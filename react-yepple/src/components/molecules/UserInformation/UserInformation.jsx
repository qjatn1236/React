import React from "react";
import "./style.scss";

export default function UserInformation(props) {
  const { userAccount } = props;

  return (
    <div className="userAccount">
      <p>{userAccount.email}</p>
      <p>가입일 : {userAccount.SignUpDate}</p>
    </div>
  );
}
