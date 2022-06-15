import React from "react";
import classes from "./ResultCard.module.css";

const ResultCard = () => {
  return (
    <div className={classes.card}>
      <div className={classes.cardtext}>
        <p className={classes.ptext}>IP ADDRESS</p>
        <h2 className={classes.h2}>lorem ipsum</h2>
      </div>
      <div className={classes.cardtext}>
        <p className={classes.ptext}>LOCATION</p>
        <h2 className={classes.h2}>lorem ipsum</h2>
      </div>
      <div className={classes.cardtext}>
        <p className={classes.ptext}>TIMEZONE</p>
        <h2 className={classes.h2}>lorem ipsum</h2>
      </div>
      <div className={classes.cardtext}>
        <p className={classes.ptext}>ISP</p>
        <h2 className={classes.h2}>lorem ipsum</h2>
      </div>
    </div>
  );
};

export default ResultCard;
