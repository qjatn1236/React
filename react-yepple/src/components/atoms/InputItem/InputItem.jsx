import React from "react";

export default function InputItem(props) {
  const { inputType, inputId, inputName, placeholder, value } = props;
  return (
    <>
			<input type={inputType} placeholder={placeholder}  id={inputId} name={inputName} value={value} readOnly/>

      {/* {props.placeholder ? 
        <input type={inputType} placeholder={placeholder}  id={inputId} name={inputName} value={value} readOnly/> :
        <input type={inputType} placeholder={placeholder} /> 
      } */}
    </>
  );
}
