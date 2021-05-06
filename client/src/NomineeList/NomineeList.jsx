import React from "react";
//import { useEffect } from "react";

const NomineeList = (props) => {
  return props.nominees.map((nom) => (
    <li key={nom}>
      {nom}
      <button
        key={nom}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Remove
      </button>
    </li>
  ));
};

export default NomineeList;
