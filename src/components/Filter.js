import React from "react";
import { DatePicker, Space } from "antd";
import "antd/dist/antd.css";

const { RangePicker } = DatePicker;

export default function Filter(props) {
  function filt(filteredata) {
    props.sortn(filteredata);
  }

  function onChange(date, dateString) {
    const filteredata = [];
    props.filt.forEach((data) => {
      if (data.cdate >= dateString[0] && data.cdate <= dateString[1]) {
        filteredata.push(data);
      }
    });
    // console.log(filteredata);
    filt(filteredata);
  }

  function onChangemon(date, dateString) {
    props.filterm(dateString);
  }

  return (
    <div>
      <Space direction="vertical">
        <RangePicker className="filterday" onChange={onChange} />
        <DatePicker
          className="filterday"
          onChange={onChangemon}
          picker="month"
        />
        <DatePicker
          className="filterday"
          onChange={onChangemon}
          picker="year"
        />
      </Space>
    </div>
  );
}
