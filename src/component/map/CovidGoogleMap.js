import React from "react";
import { GoogleMap, LoadScript, Marker, InfoBox } from "@react-google-maps/api";

const options = { closeBoxURL: "", enableEventPropagation: true };

const CovidGoogleMap = ({
  onPatientMarkerClicked,
  center,
  patients,
  zoom,
  currentPatientIndex,
}) => {
  const APIKey = "AIzaSyBZolpm92zx6q9DIdM0xdo15AQuCkclyGs";
  return (
    <LoadScript googleMapsApiKey={APIKey}>
      <GoogleMap
        mapContainerStyle={{
          height: "600px",
          width: "100%",
        }}
        zoom={zoom}
        center={center}
      >
        {patients.map((patient, index) => (
          <Marker
            key={index}
            position={{ lat: patient.lat, lng: patient.lng }}
            onClick={() => {
              onPatientMarkerClicked(patient, index);
            }}
          ></Marker>
        ))}
        {currentPatientIndex != null && (
          <InfoBox position={center} options={options}>
            <div className="info-box">{patients[currentPatientIndex].name}</div>
          </InfoBox>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default CovidGoogleMap;
