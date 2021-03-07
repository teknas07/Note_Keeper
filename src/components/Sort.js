import React from "react";
import { Select } from "antd";
import Moment from "moment";

const { Option } = Select;

export default function Sort(props) {
  function sortd(event) {
    console.log(event);
    if (event === "oldest") {
      const sortedArray = props.sortnote.sort(
        (a, b) =>
          new Moment(a.cdate).format("YYYYMMDD") -
          new Moment(b.cdate).format("YYYYMMDD")
      );
      console.log(sortedArray);
      props.sortn(sortedArray);
    } else {
      const sortedArray = props.sortnote.sort(
        (a, b) =>
          new Moment(b.cdate).format("YYYYMMDD") -
          new Moment(a.cdate).format("YYYYMMDD")
      );
      console.log(sortedArray);
      props.sortn(sortedArray);
    }
  }

  return (
    <div>
      <Select
        showSearch
        style={{ width: "20em" }}
        placeholder="Sort By"
        onSelect={sortd}
      >
        <Option value="latest">Latest</Option>
        <Option value="oldest">Oldest</Option>
      </Select>
    </div>
  );
}
