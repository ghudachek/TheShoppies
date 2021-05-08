import React from "react";

const NomineeList = (props) => {
  function removeNom(ind) {
    if (ind === 0) {
      props.setNominees(props.nominees.splice(1));
    } else {
      props.setNominees(
        props.nominees.splice(0, ind).concat(props.nominees.slice(ind))
      );
    }
  }

  function CheckStorage() {
    if (localStorage.getItem("nominees").length !== 0) {
      let stored = localStorage.getItem("nominees");
      console.log(stored.split(" "));
    }
  }
  CheckStorage();
  return props.nominees?.map((nom, index) => (
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
