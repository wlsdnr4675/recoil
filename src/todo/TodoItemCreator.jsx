import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./store/atom";

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);
  const [id, setID] = useState(0);
  const getId = () => {
    return setID((prev) => prev + 1);
  };

  const addItem = () => {
    getId();
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: id,
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };
  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default TodoItemCreator;
