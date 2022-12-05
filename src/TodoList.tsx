import React, { useState, ChangeEvent, ClickEvent } from "react";

interface Props {
  todos: string[];
}

function TodoListItem(props: {
  text: string;
  handleClick: (text: string) => void;
}) {
  const { text, handleClick } = props;
  return <li onClick={() => handleClick(text)}>{text}</li>;
}

function TodoList(props: Props) {
  const [todos, setTodos] = useState(props.todos);
  const [newTodo, setNewTodo] = useState("");

  function handleTodoClick(text: string) {
    const clickedElementIndex = todos.indexOf(text);
    const newTodos = [...todos];
    newTodos.splice(clickedElementIndex, 1);
    setTodos(newTodos);
  }

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    setNewTodo(event.target.value);
  }

  function addTodo() {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }

  return (
    <div>
      <input
        type={"text"}
        value={newTodo}
        placeholder="New Todo"
        onChange={handleInput}
      />
      <button onClick={addTodo}>+ Add</button>
      <ul>
        {todos.map((todo) => (
          <TodoListItem text={todo} key={todo} handleClick={handleTodoClick} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
