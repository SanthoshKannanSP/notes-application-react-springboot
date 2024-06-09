import NoteForm from "./Components/NoteForm";
import { NoteData } from "./types";
import { v4 as uuidv4 } from 'uuid'

function CreateNotePage() {
    function onCreateNote(data: NoteData) {
        let endpoint = "http://localhost:8080/note/create"
        fetch(endpoint,{
          method: "POST",
          headers: {"Content-Type":"application/json","Access-Control-Allow-Origin": "*"},
          body: JSON.stringify(data)
        })
    }

    return (
        <>
        <h1 className="mb-4">Create Note</h1>
        <NoteForm  onSubmit={onCreateNote} id={uuidv4()}/>
        </>
    )
}

export default CreateNotePage