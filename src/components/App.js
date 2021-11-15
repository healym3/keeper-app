import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
//
function App() {
  const [noteList, updateNotes] = React.useState([{title: "Note Title", content: "Note Content"}]);

  function addNote(newNote){
    console.log(newNote);
    updateNotes((prev)=>{
      return [...prev, newNote];
    });
    console.log(noteList);
  }

  function deleteNote(id){
    updateNotes((prev) => {
      return prev.filter((note, index)=> index !== id);
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {noteList.map((note, index) => {
        return <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote}/>
      })}
      
      <Footer />
    </div>
  );
}

export default App;
