import React from "react";
import { Link } from "react-router-dom";

const LinkItem = (props) => {
  const { goTo, goToText, onClick, className } = props;

  return (
    <>
      <Link to={goTo} className={className} onClick={onClick}>{goToText}</Link>
    </>
  );
};

export default LinkItem;
