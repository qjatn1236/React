import React from "react";

const Button = (props) => {
  const { buttonText, onClick, className } = props;

  return (
    <button onClick={onClick} className={className}>
      {buttonText}
    </button>
  );
}

export default Button;