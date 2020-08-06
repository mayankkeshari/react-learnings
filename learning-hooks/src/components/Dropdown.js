import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ label, options, selected, onSelectionChange }) => {
  const [opened, setOpened] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) {
        return;
      }
      setOpened(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
        document.body.removeEventListener("click", onBodyClick);
    }
  }, []);

  const renderedOptions = options.map((option) => {
    if (selected.value === option.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectionChange(option)}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label>{ label }</label>

        <div
          onClick={() => setOpened(!opened)}
          className={`ui selection dropdown ${opened ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${opened ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
