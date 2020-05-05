import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import moment from "moment";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: "60px 0px 0px 0px",
  },
});

const SeekBar = ({
  value,
  fromDate,
  toDate,
  onChange,
  maxValue,
  onAutoPlay,
  autoPlay,
}) => {
  const classes = useStyles();
  const marks = [
    {
      value: 0,
      label: moment(fromDate).format("DD/MM/YYYY"),
    },
    {
      value: maxValue,
      label: moment(toDate).format("DD/MM/YYYY"),
    },
  ];

  return (
    <div className={classes.root}>
      <Typography id="continuous-slider" gutterBottom>
        Hiển thị danh sách bệnh nhân theo ngày
      </Typography>
      <Row>
        <Col xs={2}>
          <IconButton onClick={() => onAutoPlay()}>
            {autoPlay ? (
              <PauseIcon style={{ fontSize: 80, color: "#3F51B5" }}></PauseIcon>
            ) : (
              <PlayArrowIcon
                style={{ fontSize: 80, color: "#3F51B5" }}
              ></PlayArrowIcon>
            )}
          </IconButton>
        </Col>
        <Col xs={10}>
          <Grid container spacing={2}>
            <Grid item xs>
              <Slider
                step={1}
                value={value ? value : 0}
                classes={{
                  valueLabel: "value-label",
                  rail: "rail",
                  track: "track",
                }}
                min={0}
                max={maxValue}
                onChange={(_event, newValue) => {
                  onChange(newValue);
                }}
                aria-labelledby="continuous-slider"
                valueLabelFormat={(x) =>
                  moment(fromDate).add(x, "days").format("DD/MM/YYYY")
                }
                valueLabelDisplay="on"
                marks={marks}
              />
            </Grid>
          </Grid>
        </Col>
      </Row>
    </div>
  );
};

export default SeekBar;
