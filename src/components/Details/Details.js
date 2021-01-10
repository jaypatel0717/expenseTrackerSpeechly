import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughunt } from "react-chartjs-2";
import useStyles from "./styles";

const Details = ({ title }) => {
  const classes = useStyles();
  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">$50</Typography>
        {/* <Doughunt data="data" /> */}
      </CardContent>
    </Card>
  );
};

export default Details;
