import { useState, useEffect } from "react";

const Footer = (props) => {
  const [list, setList] = useState(props.list);
  const [selectedName, setSelectedName] = useState("all");

  useEffect(() => {
    setList(props.list);
  }, [props.list]);

  const buttonClickHandler = () => {
    const activeList = list.filter((item) => !props.checked.includes(item));

    props.onDelete([...activeList]);
    props.onCheck([]);
  };

  const AllClickHandler = () => {
    props.onActive(true);
    props.onCompleted(true);
    setSelectedName("all");
  };

  const ActiveClickHandler = () => {
    props.onActive(true);
    props.onCompleted(false);
    setSelectedName("active");
  };

  const CompletedClickHandler = () => {
    props.onActive(false);
    props.onCompleted(true);
    setSelectedName("completed");
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{`${list.length - props.checked.length} `}</strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a
            className={selectedName === "all" ? "selected" : ""}
            onClick={AllClickHandler}
          >
            All
          </a>
        </li>
        <li>
          <a
            className={selectedName === "active" ? "selected" : ""}
            onClick={ActiveClickHandler}
          >
            Active
          </a>
        </li>
        <li>
          <a
            className={selectedName === "completed" ? "selected" : ""}
            onClick={CompletedClickHandler}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={buttonClickHandler}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
