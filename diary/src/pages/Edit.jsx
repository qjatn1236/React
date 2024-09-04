import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext, DiaryDispatchContext } from "../App";
import Header from "../components/Header";
import Editor from "../components/Editor";
import Button from "../components/Button";

export default function Edit() {
  const nav = useNavigate();
  const params = useParams();

  const data = useContext(DiaryStateContext);
  const { onDelete } = useContext(DiaryDispatchContext);

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제하시겠습니까? 다시 복구되지 않아요!")) {
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button text={"< 뒤로 가기"} onClick={() => nav(-1)} />}
        rightChild={<Button text={"삭제하기"} type={"NEGATIVE"} onClick={onClickDelete} />}
      />
      <Editor />
    </div>
  );
}
