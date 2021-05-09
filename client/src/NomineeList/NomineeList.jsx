import React from "react";

const NomineeList = (props) => {
  function removeNom(ind) {
    props.setNominees(
      props.nominees.filter((nom) => {
        return props.nominees.indexOf(nom) !== ind;
      })
    );
  }

  return props.nominees?.map((nom, index) => (
    <li key={nom}>
      {nom}
      <button
        className="remove"
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
