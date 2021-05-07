import React from "react";
import { baseURL, config } from "./index";
import { useState, useEffect } from "react";
import axios from "axios";
import Popup from "../Popup";

const Form = (props) => {
  const [username, setUsername] = useState("");
  const [nominations, setNominations] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setNominations(
      props.nominees.length > 0 ? props.nominees.toString("") : null
    );
  }, [props.nominees]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fields = {
      username,
      nominations,
    };
    await axios.post(baseURL, { fields }, config);

    togglePopup();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Your Name</label>
      <input
        name="name"
        placeholder="name(or Anon)"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button>Send/Save Data</button>

      {isOpen && (
        <Popup
          content={
            <>
              <b>Your nominations have been submitted!</b>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </form>
  );
};

export default Form;
