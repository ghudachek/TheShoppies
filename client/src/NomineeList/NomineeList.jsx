import React from "react";

const NomineeList = (props) => {
  function removeNom(ind) {
    console.log(ind);
    if (ind === 0) {
      console.log(props.nominees.slice(1));
      props.setNominees(props.nominees.splice(1));
    } else {
      props.setNominees(
        props.nominees.splice(0, ind).concat(props.nominees.slice(ind))
      );
    }
  }

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
