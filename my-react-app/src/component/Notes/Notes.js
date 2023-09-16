import "./Notes.css";
import Note from "./Note";

const Notes = (props) => {
  const { notes, deleteNote,toggleModal,setSelectedNote } = props;
  if (notes.length === 0) {
    return (
      <div className="notes">
        <p>Note you add appers here. </p>
      </div>
    );
  }
  return (
    <div className="notes">
      {notes.map((note, index) => (
        <Note
          key={index}
          id={note.id}
          note ={note}
          deleteNote={deleteNote}
          toggleModal={toggleModal}
          setSelectedNote={setSelectedNote}
        />
      ))}
      {/* {
  notes.length===0 && <p>Note you add appers here. </p>
}
{
  notes.length!==0 && notes.map((note,index)=>(
    <Note key={index} id={note.id} title={note.title} text={note.text} />))
} */}
    </div>
  );
};

export default Notes;
