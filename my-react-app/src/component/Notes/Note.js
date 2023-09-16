import React, { useState } from "react";
export default function Note(props) {
  const { toggleModal, note, setSelectedNote } = props;
  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.text);
  const [isHover, setIsHover] = useState(false);

  const noteClickHandler = () => {
    toggleModal();
    setSelectedNote(note);
    // setTitle("changed Title");

    // setText("changed Text");
  };

  const hoverOverHandler = () => {
    setIsHover(true);
  };
  const hoverOutHandler = () => {
    setIsHover(false);
  };
  const deleteHandler = () => props.deleteNote(note.id);
  return (
    <div
      className="note"
      id={props.id}
      onClick={noteClickHandler}
      onMouseOver={hoverOverHandler}
      onMouseOut={hoverOutHandler}
    >
      {isHover && (
        <span className="material-icons check-circle">check_circle</span>
      )}

      <div className="title">{note.title}</div>
      <div className="text">{note.text}</div>

      <div
        className="note-footer"
        style={{ visibility: isHover ? "visible" : "hidden" }}
      >
        <div className="tooltip">
          <span className="material-icons hover small-icon">add_alert</span>
          <span className="tooltip-text">Remind me</span>
        </div>
        <div className="tooltip">
          <span className="material-icons hover small-icon">person_add</span>
          <span className="tooltip-text">Collaborator</span>
        </div>
        <div className="tooltip">
          <span className="material-icons hover small-icon">palette</span>
          <span className="tooltip-text">Change Color</span>
        </div>
        <div className="tooltip">
          <span className="material-icons hover small-icon">image</span>
          <span className="tooltip-text">Add Image</span>
        </div>
        <div className="tooltip archive" onClick={deleteHandler}>
          <span className="material-icons hover small-icon">archive</span>
          <span className="tooltip-text">Archive</span>
        </div>
        <div className="tooltip">
          <span className="material-icons hover small-icon">more_vert</span>
          <span className="tooltip-text">More</span>
        </div>
      </div>
    </div>
  );
}
