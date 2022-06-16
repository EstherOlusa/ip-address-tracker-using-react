import React from "react";
import classes from "./ResultCard.module.css";

const ResultCard = ({ result }) => {
  console.log(result);
  return (
    <div className={classes.card}>
      <div className={classes.cardtext}>
        <p className={classes.ptext}>IP ADDRESS</p>
        <h2 className={classes.h2}>{result?.ip}</h2>
      </div>
      <div className={classes.cardtext}>
        <p className={classes.ptext}>LOCATION</p>
        <h2 className={classes.h2}>
          {result?.location
            ? `${result?.location?.city},${result?.location?.country}.`
            : ""}
        </h2>
      </div>
      <div className={classes.cardtext}>
        <p className={classes.ptext}>TIMEZONE</p>
        <h2 className={classes.h2}>{result?.location?.timezone}</h2>
      </div>
      <div className={classes.cardtext}>
        <p className={classes.ptext}>ISP</p>
        <h2 className={classes.h2}>{result?.isp}</h2>
      </div>
    </div>
  );
};

export default ResultCard;
