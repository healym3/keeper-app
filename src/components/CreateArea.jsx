import React from "react";

function CreateArea(props) {
    const [newNote, updateNewNote] = React.useState({title: "", content: ""});

    function handleChange(Event){
        const { name, value } = Event.target;
        updateNewNote((prev) => {
            return {
                ...prev,
                [name]: value
            }
        });
    }

    function submitNote(Event){
        props.onAdd(newNote);
        updateNewNote({title: "", content: ""});
        Event.preventDefault();
    
    }


  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={newNote.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={newNote.content}/>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
