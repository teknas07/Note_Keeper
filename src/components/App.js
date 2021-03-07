import React, { useState } from "react";
import Header from "./Header";
import Sort from "./Sort";
import Note from "./Note";
import Search from "./Search";
import Filter from "./Filter";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import { Row, Divider, Space, Card, Col } from "antd";
import "antd/dist/antd.css";

import "../styles.css";

export default function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function sortnd(sortednote) {
    setNotes((sortednote) => {
      return [...sortednote];
    });
  }

  function onSearch(value) {
    // setSearchtext(value);
    filtered(value);
  }

  function filtered(value) {
    console.log(value, "filter");
    // const filtered = notes.filter((note) => {
    //   return note.title.toLowerCase().includes(value.toLowerCase());
    // });
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setNotes(notes);
    else {
      const filtered = notes.filter((item) => {
        return Object.keys(item).some((key) =>
          item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setNotes(filtered);
    }
  }

  function filted(sortednote) {
    if (sortednote.length !== 0) {
      setNotes(sortednote);
    } else {
      setNotes(notes);
    }
  }

  return (
    <div>
      <Header />

      <Row justify="center" gutter={16}>
        <Col>
          <CreateArea onAdd={addNote} />
        </Col>

        <Col>
          <Card justify="center">
            <Space direction="vertical">
              <Sort sortnote={notes} sortn={sortnd} />

              <Filter filt={notes} filterm={filtered} sortn={filted} />
            </Space>

            <Divider />
            <Search onsearch={onSearch} />
          </Card>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }} justify="center">
        {notes.map((noteItem, index) => {
          return (
            <Col key={index} xs={16} sm={12} md={8} lg={8} xl={8}>
              <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                date={noteItem.cdate}
                onDelete={deleteNote}
                onAdd={addNote}
              />
            </Col>
          );
        })}
      </Row>
      <Footer />
    </div>
  );
}
