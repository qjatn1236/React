import "./Editor.css";
import { useState, useRef } from "react";

export default function Editor({ onCreate }) {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }

    onCreate(content);
    setContent("");
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="Editor">
      <input onChange={onChangeContent} onKeyDown={onKeyDown} ref={contentRef} type="text" placeholder="새로운 Todo ..." value={content} />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
}
