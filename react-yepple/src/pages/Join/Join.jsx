import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

import { JoinTemplates } from "@templates";
import axios from "axios";

export default function Join() {
  const navigate = useNavigate();

  async function checkingEmail() {
    try {
      const response = await axios("https://jsonplaceholder.typicode.com/todos/1");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  function goJoin() {
    alert("회원가입 완료");
    navigate("/login");
  }

  const logoText = "회원가입";

  const inputProperties = [
    {
      type: "email",
      inputId: "joinemail",
      inputName: "joinemail",
      warningTextItem: "* 이미 가입한 이메일입니다.",
      warningTextClass: "warningText warningTextred",
    },
  ];

  const pwInputProperties = [
    {
      type: "password",
      inputId: "joinpw",
      inputName: "joinpw",
    },
    {
      type: "password",
      inputId: "joinrepw",
      inputName: "joinrepw",
      warningTextItem: "* 영문/숫자 /특수문자등 3가지 이상 조합한 6~15자리만 가능합니다.",
      warningTextClass: "warningText warningTextred",
    },
  ];

  const buttonProperties = {
    buttonText: "회원가입",
    className: "blueButton",
    onClick: goJoin,
  };

  return (
    <>
      <JoinTemplates
        logoText={logoText}
        inputProperties={inputProperties}
        pwInputProperties={pwInputProperties}
        buttonProperties={buttonProperties}
      />
    </>
  );
}
