import React from "react";

const NomineeList = (props) => {
  function removeNom(ind) {
    props.setNominees(
      props.nominees.filter((nom) => {
        return props.nominees.indexOf(nom) !== ind;
      })
    );
  }

  function CheckStorage() {
    if (localStorage.getItem("nominees").length !== 0) {
      let stored = localStorage.getItem("nominees");
      console.log(stored.split(" "));
    }
  }
  //CheckStorage();
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
