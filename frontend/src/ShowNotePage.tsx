import { Link, Navigate, useParams } from "react-router-dom"
import { NoteData } from "./types";
import { useEffect, useState } from "react";
import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import Markdown from "react-markdown";

function ShowNotePage() {
    const { id } = useParams();
    const [note, setNote] = useState<NoteData>()
    const [status, setStatus] = useState("")
    
    function getNote() {
        let endpoint = `http://localhost:8080/note/${id}`
        fetch(endpoint,{
          method: "GET",
          headers: {"Content-Type":"application/json","Access-Control-Allow-Origin": "*"},
        }).then(response => {
            if(!response.ok){
                setStatus("error")
            }
            else {
                response.json().then(result => setNote(result))
            }
        })
    }

    useEffect(()=>{
        getNote()
    },[id])

    if(status === "error") return <Navigate to="/" replace></Navigate>
    else return (
        <>
            <Row className="align-items-center mb-4">
                <Col>
                    <h1>{note?.title}</h1>
                    {note?.tags.length! > 0 && (
                        <Stack className="flex-wrap" direction="horizontal" gap={1}>
                            {note?.tags.map(tag => (
                                <Badge className="text-truncate" key={tag.id}>{tag.label}</Badge>
                            ))}
                        </Stack>
                    )}
                </Col>
                <Col xs="auto">
                    <Stack gap={2} direction="horizontal">
                        <Link to={`/${id}/edit`}>
                            <Button variant="primary">Edit</Button>
                        </ Link>
                        <Button variant="outline-danger">Delete</Button>
                        <Link to="/">
                            <Button variant="outline-secondary">Back</Button>
                        </Link>
                    </Stack>
                </Col>
            </Row>
            <Markdown>
                {note?.markdown}
            </Markdown>
        </>
    )
}

export default ShowNotePage