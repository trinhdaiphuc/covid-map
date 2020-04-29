import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import moment from "moment";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const SeekBar = ({ value, fromDate, toDate, onChange, maxValue }) => {
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
        Date
      </Typography>
      <Grid container spacing={4}>
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
    </div>
  );
};

export default SeekBar;
