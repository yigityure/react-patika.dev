import { useState } from "react";

const Input = (props) => {
  const [str, setStr] = useState("");

  const onChangeInputHandler = (e) => {
    setStr(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    props.onAdd([...props.list, str]);
    props.onUnchecked([...props.unchecked, str]);

    setStr("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={str}
        onChange={onChangeInputHandler}
        autoFocus
      />
    </form>
  );
};

export default Input;
