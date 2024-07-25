import React from "react";
import { useNavigate } from "react-router-dom";

import LinkItem from "@atoms/LinkItem";
import Button from "@atoms/Button";
import "./style.scss";


const MyReservationTitleBox = (props) => {

  const { link, title, buttonData } = props;


  return (
    <div className="myReservationTitleBox">
      <LinkItem goTo={link} goToText={title} />
      <div>
        <Button buttonText={buttonData.one.text} onClick={buttonData.one.onClick}/>
        <Button buttonText={buttonData.two.text} onClick={buttonData.two.onClick}/>
      </div>
    </div>
  );
};

export default MyReservationTitleBox;
