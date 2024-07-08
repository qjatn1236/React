import { useState } from "react";
import "./App.css";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "첫 번째 할일", completed: false },
    { id: 2, title: "두 번째 할일", completed: true },
    { id: 3, title: "할일", completed: true },
  ]);

  // 1. 할 일 목록 생성
  const 할일추가 = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing) return;

    if (event.key === "Enter") {
      const title = event.currentTarget.value;
      const completed = false;

      const newTodo = { id: 3, title, completed };
      setTodos([...todos, newTodo]);
    }

    // 불변성을 지켜서 업데이트 해야함
  };

  // 2. 할 일 목록 표시
  // 3. 할 일 완료 표시

  // 4. 할 일 개수 표시
  // 5. 할 일 삭제
  // 6. 할 일 수정
  // 7. 할 일 필터링

  // 8. 할 일 일괄 완료 처리
  // 9. 할 일 일괄 삭제
  // 10. 지속성

  return (
    <>
      <input type="text" placeholder="할 일을 입력해주세요." onKeyDown={(event) => 할일추가(event)} />

      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" />
            <span>{todo.title}</span>
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;
