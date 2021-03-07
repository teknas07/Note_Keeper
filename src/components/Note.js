import { React, useState, useRef } from "react";
import { Tag, DatePicker, Space, Button } from "antd";
import "antd/dist/antd.css";
import Moment from "moment";
import { EditFilled, CheckOutlined, DeleteFilled } from "@ant-design/icons";
// import "../styles.css";

export default function Note(props) {
  const [edit, setEdit] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
    cdate: ""
  });
  const [date, setDate] = useState("");
  const thetitle = useRef();
  const thecontent = useRef();

  function handleClick() {
    props.onDelete(props.id);
  }

  function check() {
    // console.log(props.isedit);
    setEdit(!edit);
  }

  function change() {
    setEdit(!edit);
  }

  function call() {
    setEdit(false);
    props.onDelete(props.id);
    // console.log(note);
    props.onAdd(note);
  }

  function updatedate(date, datestring) {
    setDate(datestring);
  }

  function update() {
    const title = thetitle.current.value;
    const content = thecontent.current.value;
    const date1 = date;
    setNote({
      title: title,
      content: content,
      cdate: date1
    });
  }

  function editd() {
    return (
      <div>
        <form className="edit">
          <input
            name="title"
            // onChange={update}
            defaultValue={props.title}
            placeholder="Title"
            ref={thetitle}
          />
          <textarea
            name="content"
            // onChange={update}
            defaultValue={props.content}
            placeholder="Take a note..."
            rows="3"
            ref={thecontent}
          />
          <Space direction="horizontal">
            <DatePicker
              name="cdate"
              className="mock-block"
              // defaultValue={props.cdate}
              onChange={updatedate}
              defaultValue={Moment(props.cdate)}
            />
          </Space>
          <div className="editpart">
            <Space direction="horizontal">
              <Button type="primary" shape="square" onClick={update}>
                Sure !
              </Button>
              <Button type="primary" shape="circle" onClick={call}>
                <CheckOutlined />
              </Button>
              <Button danger shape="circle" onClick={change}>
                X
              </Button>
            </Space>
          </div>
        </form>
      </div>
    );
  }

  function display() {
    return (
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <Tag className="tag" color="success">
          {props.date}
        </Tag>
        <Tag
          icon={<EditFilled />}
          className="tag"
          color="processing"
          onClick={check}
        >
          Edit
        </Tag>
        <Tag className="tag delete" color="red" onClick={handleClick}>
          {<DeleteFilled />}
        </Tag>
      </div>
    );
  }

  return edit ? editd() : display();
}
