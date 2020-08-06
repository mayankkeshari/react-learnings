import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import Convert from './Convert';

const options = [
  {
    label: "African",
    value: "af",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Arabic",
    value: "ar",
  },
];

const Translate = () => {
  const [selected, setSelected] = useState(options[0]);
  const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
        setDebouncedText(text);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

//   useEffect(() => {

//   }, [debouncedText]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text to translate</label>
        </div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>

      <Dropdown
        label="Select a language"
        options={options}
        selected={selected}
        onSelectionChange={setSelected}
      />

      <hr />
      <h3 className="ui header">Translated Text:</h3>
      <Convert text={debouncedText} lang={selected.value} />

    </div>
  );
};

export default Translate;
