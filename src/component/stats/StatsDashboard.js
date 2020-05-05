import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import StatsVN from "./StatsVN";
import StatsGlobal from "./StatsGlobal";

const formatDataVN = (data) => {
  const arr = Object.keys(data).map((key) => {
    return {
      date: key,
      Nhiễm: data[key][0],
      "Nghi Nhiễm": data[key][1],
      "Bình phục": data[key][2],
    };
  });
  return arr;
};

const formatDataGlobal = (data) => {
  const arr = Object.keys(data).map((key) => {
    return {
      date: key,
      Nhiễm: data[key][0],
      "Tử vong": data[key][1],
      "Bình phục": data[key][2],
    };
  });
  return arr;
};

const StatsDashboard = () => {
  const [statsVN, setStatsVN] = useState([]);
  console.log("[INFO}:::: StatsDashboard -> statsVN", statsVN);
  const [statsGlobal, setStatsGlobal] = useState([]);
  console.log("[INFO}:::: statsGlobal", statsGlobal);
  const stroke1 = "#C44444";
  const stroke2 = "#66BB6A";
  const stroke3 = "#F7862D";

  useEffect(() => {
    const urlStatsGlobal = "https://td.fpt.ai/corona/corona-total.json";
    fetch(urlStatsGlobal)
      .then((res) => res.json())
      .then((result) => {
        setStatsGlobal(formatDataGlobal(result));
      });
  }, []);

  useEffect(() => {
    const urlStatsVN = "https://td.fpt.ai/corona/corona-chart-vn.json";
    fetch(urlStatsVN)
      .then((res) => res.json())
      .then((result) => {
        setStatsVN(formatDataVN(result));
      });
  }, []);
  return (
    <div id="covid-stats">
      <Container fluid>
        <h5>
          Biểu đồ thống kê số ca mắc, nghi nhiễm, bình phục, tử vong của Việt
          Nam và thế giới
        </h5>

        <Row>
          <Col xs={6}>
            <StatsVN data={statsVN} stroke={[stroke1, stroke2, stroke3]} />
          </Col>
          <Col xs={6}>
            <StatsGlobal
              data={statsGlobal}
              stroke={[stroke1, stroke2, stroke3]}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StatsDashboard;
