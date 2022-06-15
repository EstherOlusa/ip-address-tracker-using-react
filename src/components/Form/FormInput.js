import React from "react";
import iconarrow from "../../assets/images/icon-arrow.svg";
import classes from "./FormInput.module.css";

const FormInput = () => {
  return (
    <div className={classes.formcontainer}>
      <h2 className={classes.h2}>IP Address Tracker</h2>

      <form className={classes.form}>
        <input
          className={classes.input}
          type="text"
          placeholder="Search for any IP address or domain"
          id="btn"
        />
        <button className={classes.button}>
          <img src={iconarrow} alt="arrowicon" />
        </button>
      </form>
    </div>
  );
};

export default FormInput;
