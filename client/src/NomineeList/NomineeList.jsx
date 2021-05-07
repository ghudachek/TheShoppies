import React from "react";
import { useEffect } from "react";

const NomineeList = (props) => {
  function removeNom(ind) {
    props.nominees.splice(ind, 1);
  }

  useEffect(() => {
    props.setNominees(props.nominees);
  }, [props.nominess]);

  return props.nominees.map((nom, index) => (
    <li key={nom}>
      {nom}
      <button
        key={nom}
        onClick={(e) => {
          e.preventDefault();
          removeNom(index);
        }}
      >
        Remove
      </button>
    </li>
  ));
};

export default NomineeList;
