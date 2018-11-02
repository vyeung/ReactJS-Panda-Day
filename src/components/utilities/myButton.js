import React from 'react';

import MyButton from "@material-ui/core/Button";
import TicketIcon from "../../assets/icons/ticket.png";

const myButton = (props) => {
  
  const buttonStyle = {
    background: props.back,
    color: props.color
  };
  
  return (
    <MyButton
      style={buttonStyle}
      href={props.link}
      target="_blank"  //open link in new tab
      variant="contained"
      size="small"
    >
      <img src={TicketIcon} className="icon" alt="icon" />
      {props.buttonText}  
    </MyButton>
  );
};

export default myButton;