import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("todo-react") || "[]")
    // { id: 1, title: "첫 번째 할일", completed: false },
    // { id: 2, title: "두 번째 할일", completed: true },
  );

  const [editingTodo, setEditingTodo] = useState<Todo | null>();
  const [editingTodoTitle, setEditingTodoTitle] = useState<string>("");
  const editingInput = useRef<HTMLInputElement>(null);

  // 1. 할 일 목록 생성
  const 할일추가 = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing) return;

    if (event.key === "Enter") {
      const id = todos.length + 1;
      const title = event.currentTarget.value;
      const completed = false;

      const newTodo = { id, title, completed };
      setTodos([...todos, newTodo]);

      event.currentTarget.value = "";
    }

    // 불변성을 지켜서 업데이트 해야함
  };

  // 2. 할 일 목록 표시

  // 3. 할 일 완료 표시
  const 할일완료토글 = (target: Todo) => {
    setTodos(todos.map((todo) => (todo === target ? { ...todo, completed: !todo.completed } : todo)));
  };

  // 4. 할 일 개수 표시
  const numRemainingTodos = todos.filter((todo) => !todo.completed).length;

  // 5. 할 일 삭제
  const 할일삭제하기 = (target: Todo) => {
    // 불변성을 유지하면서 삭제하려면 어떻게 해야하지?
    setTodos(todos.filter((todo) => todo !== target));
  };

  // 6. 할 일 수정
  const 할일수정 = (target: Todo) => {
    setEditingTodo(target);
    setEditingTodoTitle(target.title);
  };

  const 할일제목변경취소 = () => {
    setEditingTodo(null);
  };

  const 할일제목변경 = (event: React.KeyboardEvent<HTMLInputElement>, target: Todo) => {
    if (event.nativeEvent.isComposing) return;

    if (event.key === "Enter") {
      const title = editingTodoTitle;
      setTodos(todos.map((todo) => (todo === target ? { ...todo, title } : todo)));
      setEditingTodo(null);
    }
  };

  useEffect(() => {
    if (editingInput.current) {
      editingInput.current.focus();
    }
  }, [editingTodo]);

  // 7. 할 일 필터링
  const [visibilityFilter, setVisibilityFilter] = useState("ALL");

  const filteredTodo = useMemo(() => {
    switch (visibilityFilter) {
      case "ALL":
        return todos;
      case "ACTIVE":
        return todos.filter((todo) => !todo.completed);
      case "COMPLETED":
        return todos.filter((todo) => todo.completed);
    }

    return todos;
  }, [visibilityFilter, todos]);

  const 전체보기 = () => {
    setVisibilityFilter("ALL");
  };
  const 해야할일보기 = () => {
    setVisibilityFilter("ACTIVE");
  };
  const 완료한일보기 = () => {
    setVisibilityFilter("COMPLETED");
  };

  // 8. 할 일 일괄 완료 처리
  const 전체완료토글 = () => {
    const allChecked = todos.every((todo) => todo.completed);
    setTodos(todos.map((todo) => ({ ...todo, completed: !allChecked })));
  };

  // 9. 할 일 일괄 삭제
  const 완료된할일삭제 = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  // 10. 지속성
  useEffect(() => {
    localStorage.setItem("todo-react", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <input type="text" placeholder="할 일을 입력해주세요." onKeyDown={(event) => 할일추가(event)} />

      <ol>
        {filteredTodo.map((todo) => (
          <li key={todo.id}>
            {editingTodo !== todo ? (
              <>
                <input type="checkbox" checked={todo.completed} onChange={() => 할일완료토글(todo)} />
                <span onDoubleClick={() => 할일수정(todo)}>{todo.title}</span>
                <button onClick={() => 할일삭제하기(todo)}>X</button>
              </>
            ) : (
              <input
                type="text"
                ref={editingInput}
                value={editingTodoTitle}
                onChange={(event) => setEditingTodoTitle(event.currentTarget.value)}
                onBlur={할일제목변경취소}
                onKeyDown={(event) => 할일제목변경(event, todo)}
              />
            )}
          </li>
        ))}
      </ol>

      <div>남은 할 일 : {numRemainingTodos}</div>

      <hr />

      <div>
        <div>{visibilityFilter}</div>
        <button onClick={() => 전체보기()} id="btn-show-all">
          전체 보기
        </button>
        <button onClick={() => 해야할일보기()} id="btn-show-active">
          해야할 일 보기
        </button>
        <button onClick={() => 완료한일보기()} id="btn-show-completed">
          완료한 일 보기
        </button>
      </div>

      <hr />

      <div>
        <button onClick={전체완료토글} id="btn-toggle-all">
          전체완료토글
        </button>
        <button onClick={완료된할일삭제} id="btn-clear-completed">
          완료된 할일 삭제
        </button>
      </div>
    </>
  );
}

export default App;
