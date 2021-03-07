import React, { useState } from "react";
import "antd/dist/antd.css";
import { DatePicker } from "antd";

export default function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    cdate: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    // console.log([name]);
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
      cdate: ""
    });
    // console.log(note);
    event.preventDefault();
  }

  function onChanged(date, datestring) {
    // console.log();
    const value = datestring;
    // console.log([name]);
    setNote((prevNote) => {
      return {
        ...prevNote,
        cdate: value
      };
    });
  }

  return (
    <div>
      <form className="text">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />

        <DatePicker name="cdate" className="mock-block" onChange={onChanged} />

        <button className="add" onClick={submitNote}>
          Add
        </button>
      </form>
    </div>
  );
}
