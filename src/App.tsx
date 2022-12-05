import React from "react";
import TodoList from "./TodoList";

function App() {
  return (
    <div>
      <TodoList todos={["Zimmer aufräumen", "Steuer machen"]} />
    </div>
  );
}

export default App;
