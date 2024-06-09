import { useParams } from "react-router-dom";
import NoteForm from "./Components/NoteForm";
import { NoteData } from "./types";
import { useEffect, useState } from "react";

function EditNotePage() {
    const id = String(useParams())
    const [note, setNote] = useState<NoteData>()
    const [status, setStatus] = useState("")

    async function getNote() {
        let endpoint = `http://localhost:8080/note/${id}`
        let response = await fetch(endpoint,{
          method: "GET",
          headers: {"Content-Type":"application/json","Access-Control-Allow-Origin": "*"},
        })
        let result = await response.json()
        if(result.status == "error") setStatus("error")
        else {
        setNote(result.data)
        }
    }

    useEffect(()=>{
        getNote()
    },[id])

    async function onEditNote(data: NoteData) {
        let endpoint = "http://localhost:8080/note/edit"
        let response = await fetch(endpoint,{
          method: "POST",
          headers: {"Content-Type":"application/json","Access-Control-Allow-Origin": "*"},
          body: JSON.stringify({"data": data})
        })
        let result = await response.json()
        console.log(result)
    }

    return (
        <>
        <h1 className="mb-4">Edit Note</h1>
        <NoteForm  onSubmit={onEditNote} id={id} title={note?.title} tags={note?.tags} markdown={note?.markdown}/>
        </>
    )
}

export default EditNotePage