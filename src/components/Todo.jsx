import { useDispatch, useSelector } from "react-redux";
import { completeTodo, removesTodo } from "../features/todosReducer";

function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todosReducer.todos);

  function makeMark(i) {
    dispatch(completeTodo(i));
  }

  function removeTodo(i) {
    dispatch(removesTodo(i));
  }

  return (
    <div className="todos">
      {todos.map((todo, index) => {
        return (
          <div
            key={index}
            className={`todo ${todo.favorite ? "selected" : ""}`}
          >
            <div className="favorite">
              <button onClick={() => makeMark(index)}>❤</button>
            </div>
            <div className="todo-text">{todo.text}</div>
            <div className="actions">
              <button onClick={() => removeTodo(index)}>✖</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Todo;
