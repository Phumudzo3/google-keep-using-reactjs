import React, { useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import Sidebar from "./component/Sidebar/Sidebar";
import FormContainer from "./component/Form/FormContainer";
import Notes from "./component/Notes/Notes";
import Modal from "./component/Modal/Modal";

const NOTES = [];

const App = () => {
  const [notes, setNotes] = useState(NOTES);
  const [selectedNote, setSelectedNote] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };
  const editNote =(EditedNote)=>{
    
      setNotes(prevNotes=>{
        const newArray =prevNotes.map(note=>{
          if(EditedNote.id===note.id){
            note.title =EditedNote.title
            note.text=EditedNote.text
      }
return note;
    })
  return newArray;
  })
}
  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => id !== note.id);
    });
  };
  const toggleModal = () => {
    setIsModalOpen((prevNotes) => {
      return !prevNotes;
    });
  };
  return (
    <div>
      <Navbar />
      <Sidebar />
      <FormContainer addNote={addNote} />
      <Notes
        notes={notes}
        deleteNote={deleteNote}
        toggleModal={toggleModal}
        setSelectedNote={setSelectedNote}
      />
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          selectedNote={selectedNote}
          toggleModal={toggleModal}
          editNote ={editNote}
        />
      )}
    </div>
  );
};

export default App;
