import "./TodoItem.css";
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";

function TodoItem({ id, isDone, content, date }) {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onChangeDelete = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onChangeDelete}>삭제</button>
    </div>
  );
}

export default memo(TodoItem);
