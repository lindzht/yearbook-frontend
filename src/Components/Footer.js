import React from "react";
import { useHistory } from "react-router-dom";
import leftarrow from "../images/leftarrow.png"
import rightarrow from "../images/rightarrow.png"

const Footer = ({ setCohortIndex, cohortIndex }) => {

  const history = useHistory();

  const handleGoBack = () => {
    window.history.back();
    history.push(`/cohorts/${cohortIndex - 1}`) 
  };

//   const handleForward = () => {
//     setCohortIndex(1);
//     history.goBack();
//   };

  return (
    <div id="footer">
      <div id="arrows">
        <img id="back-arrow" onClick={handleGoBack} style={{width: 50}} src={leftarrow} alt="back"/>
        <img id="forward-arrow" style={{width: 50}} src={rightarrow} alt="back"/>
      </div>
    </div>
  );
};

export default Footer;
