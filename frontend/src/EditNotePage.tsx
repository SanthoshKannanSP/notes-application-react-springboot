import { Link, Navigate, useParams } from "react-router-dom";
import NoteForm from "./Components/NoteForm";
import { NoteData } from "./types";
import { useEffect, useState } from "react";

function EditNotePage() {
    const { id } = useParams()
    const [note, setNote] = useState<NoteData>()
    const [status, setStatus] = useState("")

    function getNote() {
        // console.log(id);
        let endpoint = `http://localhost:8080/note/${id}`
        fetch(endpoint,{
          method: "GET",
          headers: {"Content-Type":"application/json","Access-Control-Allow-Origin": "*"},
        }).then(response => {
            if(!response.ok){
                setStatus("error")
            }
            else {
                response.json().then(result => {setNote(result)})
            }
        })
    }

    useEffect(()=>{
        getNote()
    },[])

    async function onEditNote(data: NoteData) {
        let endpoint = "http://localhost:8080/note/edit"
        let response = await fetch(endpoint,{
          method: "POST",
          headers: {"Content-Type":"application/json","Access-Control-Allow-Origin": "*"},
          body: JSON.stringify(data)
        })
        let result = await response.json()
        console.log(result)
    }
    if(status === "error") return <Navigate to="/" replace></Navigate>
    else{
        return (
            <>
            <h1 className="mb-4">Edit Note</h1>
            <NoteForm  onSubmit={onEditNote} id={String(id)} title={note?.title} tags={note?.tags} markdown={note?.markdown}/>
            </>
        )
    }
}

export default EditNotePage