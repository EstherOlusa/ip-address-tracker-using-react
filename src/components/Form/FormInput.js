import React, { useState } from "react";
import iconarrow from "../../assets/images/icon-arrow.svg";
import classes from "./FormInput.module.css";

const ipLink = async (ipAddress) => {
  const resp = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_FKLJ0z1tWWTgyWiHdmEY9Q7u8HydE&ipAddress=${ipAddress}`
  );
  const data = await resp.json();
  return data;
};

const FormInput = ({ updateResult }) => {
  const [input, setInput] = useState("");

  const formInputHandler = (event) => {
    setInput(event.target.value);
  };
  const onClick = async (e) => {
    try {
      e.preventDefault();
      // if (input) {
      const data = await ipLink(input);
      console.log(data);
      updateResult(data);
      // }
    } catch (error) {
      updateResult({});
      console.log(error);
    }
  };
  return (
    <div className={classes.formcontainer}>
      <h2 className={classes.h2}>IP Address Tracker</h2>

      <form className={classes.form}>
        <input
          className={classes.input}
          type="text"
          placeholder="Search for any IP address or domain"
          id="btn"
          onChange={formInputHandler}
          value={input}
        />
        <button className={classes.button} onClick={onClick}>
          <img src={iconarrow} alt="arrowicon" />
        </button>
      </form>
    </div>
  );
};

export default FormInput;
