import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputBlur, inputChange } from "../features/inputReducer";
import { addTodo } from "../features/todosReducer";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

function Form() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.inputReducer);

  function handleChange(e) {
    setInput(e.target.value);
    dispatch(inputChange());
  }

  function handleBlur() {
    if (!input) {
      dispatch(inputBlur());
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  }

  return (
    <>
      <form className="main" onSubmit={handleSubmit}>
        <input
          className={state.classError}
          type="text"
          value={input}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Button type="submit" variant="primary" size="lg" disabled={!input}>
          Отправить
        </Button>
      </form>
      <div className="err-block">
        {state.empty && (
          <div className="err">Поле ввода не должно быть пустым!</div>
        )}
      </div>
    </>
  );
}

export default Form;
