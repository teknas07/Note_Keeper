import React from "react";
import { Input } from "antd";

export default function Note(props) {
  function onSearch(event) {
    const value1 = event.target.value;
    console.log(event.target.value);
    props.onsearch(value1);
  }
  return (
    <div>
      <Input
        placeholder=" 🔍 input search text "
        allowClear
        onChange={onSearch}
        style={{ width: "20em" }}
      />
    </div>
  );
}
