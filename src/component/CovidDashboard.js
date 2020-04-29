import React, { useEffect, useState, useCallback } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CovidGoogleMap from "./CovidGoogleMap";
import PatientInfo from "./PatientInfo";
import Container from "react-bootstrap/Container";
import PatientList from "./PatientList";
import SeekBar from "./SeekBar";
import moment from "moment";

const fromDate = new Date("12/8/2019");
const toDate = new Date();
const maxValue = moment(toDate).diff(fromDate, "days");

const compare = (a, b) => {
  let comparison = 0;
  if (a.verifyDate > b.verifyDate) {
    comparison = 1;
  } else if (a.verifyDate < b.verifyDate) {
    comparison = -1;
  }
  return comparison * -1;
};

const getPatientsBeforeDate = (patients, date) => {
  const newPatients = patients.filter(
    (patient) => date.diff(patient.verifyDate, "days") > 0
  );
  return newPatients;
};

const CovidDashboard = () => {
  const [currentPatient, setCurrentPatient] = useState();
  const [currentPatientIndex, setCurrentPatientIndex] = useState();
  const [patients, setPatients] = useState([]);
  const [defaultPatients, setDefaultPatients] = useState([]);
  const [valueSeekBar, setValueSeekBar] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const defaultCenter = { lat: 16.047079, lng: 108.20623 };

  const currentCenter = currentPatient
    ? { lat: currentPatient.lat, lng: currentPatient.lng }
    : defaultCenter;
  const zoom = currentPatient ? 12 : 6;

  const patientClickedHandler = (patient, index) => {
    setAutoPlay(false);
    setCurrentPatient(patient);
    setCurrentPatientIndex(index);
  };

  const increaseSeekValue = useCallback(() => {
    const currentDate = moment(fromDate).add(valueSeekBar, "days");
    const getPatients = getPatientsBeforeDate(defaultPatients, currentDate);
    setPatients(getPatients);
    setCurrentPatient(null);
    setCurrentPatientIndex(null);
    setValueSeekBar(valueSeekBar + 1);
  }, [valueSeekBar, defaultPatients]);

  const onChangeSeekBarHandler = (newValue) => {
    setAutoPlay(false);
    setValueSeekBar(newValue);
    const currentDate = moment(fromDate).add(newValue, "days");
    const getPatients = getPatientsBeforeDate(defaultPatients, currentDate);
    setPatients(getPatients);
    setCurrentPatient(null);
    setCurrentPatientIndex(null);
  };

  const onAutoPlay = () => {
    setAutoPlay(!autoPlay);
  };

  useEffect(() => {
    if (autoPlay) {
      const newInterval = setInterval(increaseSeekValue, 500);
      return () => {
        clearInterval(newInterval);
      };
    }
  }, [autoPlay, increaseSeekValue]);

  useEffect(() => {
    if (valueSeekBar > maxValue) {
      setValueSeekBar(maxValue);
      setAutoPlay(false);
    }
  }, [valueSeekBar]);

  useEffect(() => {
    const url = "https://cors-anywhere.herokuapp.com/https://maps.vnpost.vn/apps/covid19/api/patientapi/list";
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        const sortPatientsList = result.data.sort(compare);
        setDefaultPatients(sortPatientsList);
        const getPatients = getPatientsBeforeDate(
          sortPatientsList,
          moment(fromDate)
        );
        setPatients(getPatients);
      });
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={8}>
          <CovidGoogleMap
            onPatientMarkerClicked={patientClickedHandler}
            center={currentCenter}
            patients={patients}
            zoom={zoom}
            currentPatientIndex={currentPatientIndex}
          />
        </Col>

        <Col xs={4}>
          <Row id="patient-info">
            <h6>Thông tin bệnh nhân</h6>
            <div>
              {currentPatient && (
                <PatientInfo
                  name={currentPatient.name}
                  address={currentPatient.address}
                  note={currentPatient.note}
                  verifyDate={currentPatient.verifyDate}
                />
              )}
            </div>
          </Row>
          <Row>
            <PatientList
              patients={patients}
              onPatientListClicked={patientClickedHandler}
              currentPatientIndex={currentPatientIndex}
            />
          </Row>
        </Col>
      </Row>
      <SeekBar
        fromDate={fromDate}
        toDate={toDate}
        value={valueSeekBar}
        maxValue={maxValue}
        onChange={onChangeSeekBarHandler}
        onAutoPlay={onAutoPlay}
        autoPlay={autoPlay}
      />
    </Container>
  );
};

export default CovidDashboard;
