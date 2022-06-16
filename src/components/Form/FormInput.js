import React, { useEffect, useState } from "react";
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

  const handleInputChange = (event) => setInput(event.target.value);

  const fetchData = async () => {
    try {
      const data = await ipLink(input);
      updateResult(data);
    } catch (error) {
      updateResult({});
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className={classes.formcontainer}>
      <h2 className={classes.h2}>IP Address Tracker</h2>

      <form className={classes.form} onSubmit={onSubmit}>
        <input
          className={classes.input}
          type="text"
          placeholder="Search for any IP address or domain"
          id="btn"
          onChange={handleInputChange}
          value={input}
        />
        <button className={classes.button} onClick={onSubmit}>
          <img src={iconarrow} alt="arrowicon" />
        </button>
      </form>
    </div>
  );
};

export default FormInput;
