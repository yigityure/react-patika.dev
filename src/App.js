import { useState } from "react";

import "./App.css";
import Input from "./components/Input";
import List from "./components/List";
import Footer from "./components/Footer";

function App() {
  const [todoList, setTodoList] = useState([
    "Learn JavaScript",
    "Learn React",
    "Have a life!",
  ]);

  const [checked, setChecked] = useState([]);
  const [unchecked, setUnchecked] = useState(todoList);
  const [active, setActive] = useState(true);
  const [completed, setCompleted] = useState(true);

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <Input
          list={todoList}
          unchecked={unchecked}
          onAdd={setTodoList}
          onUnchecked={setUnchecked}
        />
      </header>
      <List
        list={todoList}
        checked={checked}
        unchecked={unchecked}
        active={active}
        completed={completed}
        onDelete={setTodoList}
        onCheck={setChecked}
        onUnchecked={setUnchecked}
      />
      <Footer
        list={todoList}
        checked={checked}
        unchecked={unchecked}
        onDelete={setTodoList}
        onCheck={setChecked}
        onUnchecked={setUnchecked}
        onActive={setActive}
        onCompleted={setCompleted}
      />
    </section>
  );
}

export default App;
