import React, { useState } from "react";
import "./FormContainer.css";
import { uid } from 'uid';
function FormContainer(props) {
const {edit,selectedNote,toggleModal } = props;
  const [title, setTitle] = useState((edit && selectedNote.title)|| "");
  const [text, setText] = useState((edit && selectedNote.text)|| "");
  const [isActiveForm, setIsActiveForm] = useState(edit);

  const textChangeHandler = (event) => setText(event.target.value);
  const titleChangeHandler = (event) => setTitle(event.target.value);
  const formClickHandler = (event) => {
    setIsActiveForm(true);
  };


  const submitFormHandler = (event) => {
    event.preventDefault();
   if (!edit){
  
      props.addNote({
      id: uid(),
      title,
      text,
    });
  
    
    setIsActiveForm(false);
  } else{
    props.editNote({
      id:selectedNote.id,
      title,
      text 
    })
    toggleModal()
  }
  setTitle("");
    setText("");
   };

  return (
    <div>
      <div className="form-container active-form" onClick={formClickHandler}>
        <form
          onSubmit={submitFormHandler}
          className={isActiveForm ? "form" : ""}
        
        >
          {isActiveForm && (
            <input
              onChange={titleChangeHandler}
           
              type="text"
              value={title}
              className="note-title"
              placeholder="Title"
            />
          )}

          <input
            onChange={textChangeHandler}
         
            className="note-text"
            value={text}
            type="text"
            placeholder="Take a note..."
          />
          {isActiveForm ? (
            <div className="form-actions">
              <div className="icons">
                <div className="tooltip">
                  <span className="    material-icons hover small-icon">
                    add_alert
                  </span>
                  <span className="tooltip-text">Remind me</span>
                </div>
                <div className="tooltip">
                  <span className="    material-icons hover small-icon">
                    person_add
                  </span>
                  <span className="tooltip-text">Collaborator</span>
                </div>
                <div className="tooltip">
                  <span className="    material-icons hover small-icon">
                    palette
                  </span>
                  <span className="tooltip-text">Change Color</span>
                </div>
                <div className="tooltip">
                  <span className="    material-icons hover small-icon">
                    image
                  </span>
                  <span className="tooltip-text">Add Image</span>
                </div>
                <div className="tooltip">
                  <span className="    material-icons hover small-icon">
                    archive
                  </span>
                  <span className="tooltip-text">Archive</span>
                </div>
                <div className="tooltip">
                  <span className="    material-icons hover small-icon">
                    more_vert
                  </span>
                  <span className="tooltip-text">More</span>
                </div>
                <div className="tooltip">
                  <span className="    material-icons hover small-icon">
                    undo
                  </span>
                  <span className="tooltip-text">Undo</span>
                </div>
                <div className="tooltip">
                  <span className="    material-icons hover small-icon">
                    redo
                  </span>
                  <span className="tooltip-text">Redo</span>
                </div>
              </div>
              <button type="submit" className="close-btn">
                Close
              </button>
            </div>
          ) : (
            <div className="form-actions">
              <div className="tooltip">
                <span className="    material-icons hover">check_box</span>
                <span className="tooltip-text">New List</span>
              </div>
              <div className="tooltip">
                <span className="    material-icons hover">brush</span>
                <span className="tooltip-text">New Drawing</span>
              </div>
              <div className="tooltip">
                <span className="    material-icons hover">image</span>
                <span className="tooltip-text">New Image</span>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default FormContainer;

