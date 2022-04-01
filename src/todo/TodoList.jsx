import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "./store/atom";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);
  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => {
        console.log(todoItem);
        return <TodoItem key={todoItem.id} item={todoItem} />;
      })}
    </>
  );
};

export default TodoList;
