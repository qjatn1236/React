import React, { useContext } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../App";

export default function New() {
  const nav = useNavigate();
  const { onCreate } = useContext(DiaryDispatchContext);

  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    nav("/", { replace: true });
  };

  return (
    <div>
      <Header title={"새 일기 쓰기"} leftChild={<Button text={"< 뒤로 가기"} onClick={() => nav(-1)} />} />
      <Editor onSubmit={onSubmit} />
    </div>
  );
}
