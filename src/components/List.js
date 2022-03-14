import { useEffect, useState } from "react";

const List = (props) => {
  const [list, setList] = useState(props.list);
  const [allCheck, setAllCheck] = useState(false);
  const [allActive, setAllActive] = useState(true);
  const [allCompleted, setAllCompleted] = useState(true);

  useEffect(() => {
    setList(props.list);
  }, [props.list]);

  useEffect(() => {
    setList(props.checked);
  }, [allCompleted]);

  useEffect(() => {
    setList(props.unchecked);
  }, [allActive]);

  useEffect(() => {
    if (props.active && props.completed) {
      setList(props.list);
    } else if (!props.active) {
      setList(props.checked);
    } else if (!props.completed) {
      setList(props.unchecked);
    }
  }, [props.active, props.completed, props.list]);

  const inputCheckHandler = (event) => {
    let updatedList = [...props.checked];
    let activeList = [...props.unchecked];

    if (allCheck) {
      setAllCheck(!allCheck);
    }

    if (event.target.checked) {
      updatedList = [...props.checked, event.target.value];
      activeList.splice(props.unchecked.indexOf(event.target.value), 1);
    } else {
      updatedList.splice(props.checked.indexOf(event.target.value), 1);
      activeList = [...props.unchecked, event.target.value];
    }
    props.onCheck(updatedList);
    props.onUnchecked(activeList);

    if (!props.active) {
      setAllCompleted(!allCompleted);
    } else if (!props.completed) {
      setAllActive(!allActive);
    }
  };

  const buttonClickHandler = (e) => {
    let updatedList = [...props.list];
    let checkedList = [...props.checked];
    let uncheckedList = [...props.unchecked];

    if (props.active && props.completed) {
      updatedList.splice(props.list.indexOf(e.target.value), 1);
      checkedList.splice(props.checked.indexOf(e.target.value), 1);
    } else if (!props.active) {
      updatedList.splice(props.list.indexOf(e.target.value), 1);
      checkedList.splice(props.checked.indexOf(e.target.value), 1);
    } else {
      updatedList.splice(props.list.indexOf(e.target.value), 1);
      uncheckedList.splice(props.unchecked.indexOf(e.target.value), 1);
    }

    props.onCheck(checkedList);
    props.onUnchecked(uncheckedList);

    setList(updatedList);
    props.onDelete(updatedList);
  };

  const allCheckHandler = () => {
    setAllCheck(!allCheck);

    if (props.active && props.completed) {
      if (!allCheck) {
        props.onCheck(list);
        props.onUnchecked([]);
      } else {
        props.onCheck([]);
        props.onUnchecked(list);
      }
    } else if (!props.active) {
      if (!allCheck) {
        props.onUnchecked([]);
        props.onCheck(props.list);
        setAllCompleted(!allCompleted);
      } else {
        props.onCheck([]);
        props.onUnchecked(props.list);
        setAllCompleted(!allCompleted);
      }
    } else {
      if (!allCheck) {
        props.onUnchecked([]);
        props.onCheck(props.list);
        setAllActive(!allActive);
      } else {
        props.onCheck([]);
        props.onUnchecked(props.list);
        setAllActive(!allActive);
      }
    }
  };

  if (list.length === 0) {
    return false;
  }

  return (
    <section className="main">
      <input
        className="toggle-all"
        type="checkbox"
        checked={allCheck}
        onChange={() => 0}
      />
      <label htmlFor="toggle-all" onClick={allCheckHandler}>
        {" "}
        Mark all as complete{" "}
      </label>

      <ul className="todo-list">
        {list.map((item, i) => (
          <li
            key={i}
            id={i}
            className={props.checked.includes(item) ? "completed" : ""}
          >
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                value={item}
                checked={props.checked.includes(item) ? true : false}
                onChange={inputCheckHandler}
              />
              <label>{item}</label>
              <button
                className="destroy"
                value={item}
                onClick={buttonClickHandler}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default List;
