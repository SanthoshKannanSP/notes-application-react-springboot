import { Button, Col, Form, Row, Stack } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import CreatableReactSelect from "react-select/creatable"
import { NoteFormProps, Tag } from "../types"
import { FormEvent, useEffect, useRef, useState } from "react"
import {v4 as uuidv4} from 'uuid'

function NoteForm({id, onSubmit, title="", markdown="",tags=[],}: NoteFormProps) {
    const titleRef = useRef<HTMLInputElement>(null);
    const markdownRef = useRef<HTMLTextAreaElement>(null);
    const [selectedTags, setSelectedTags] = useState<Tag[]>([])
    const [availableTags, setAvailableTags] = useState<Tag[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        getAllTags()
        setSelectedTags(tags)
        // console.log("123")
    },[title])

    function getAllTags() {
        let endpoint = `${import.meta.env.VITE_APP_BACKEND_HOST}/tag/all`
        fetch(endpoint,{
          method: "GET",
          headers: {"Content-Type":"application/json","Access-Control-Allow-Origin": "*"},
        }).then(response => response.json()).then(result => setAvailableTags(result.data))
    }

    async function onAddTag(newTag: Tag) {
        let endpoint = `${import.meta.env.VITE_APP_BACKEND_HOST}/tag/create`
        fetch(endpoint,{
          method: "POST",
          headers: {"Content-Type":"application/json","Access-Control-Allow-Origin": "*"},
          body: JSON.stringify(newTag)
        })
        setAvailableTags([...availableTags,newTag]);
    }

    function handleSubmit(e: FormEvent){
        e.preventDefault()

        onSubmit({
            title: titleRef.current!.value,
            id: id,
            tags: selectedTags,
            markdown: markdownRef.current!.value
        })
        navigate("..")
    }

    // console.log(tags)
    // console.log(title)

    return (
        <Form onSubmit={handleSubmit}>
            <Stack gap={4}>
                <Row>
                    <Col>
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control required ref={titleRef} defaultValue={title}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="tags">
                            <Form.Label>Tags</Form.Label>
                            <CreatableReactSelect 
                            value={selectedTags.map(tag => {
                                return {label: tag.label, value: tag.id}
                            })}
                            onCreateOption={label => {
                                const newTag = {id: uuidv4(),label}
                                onAddTag(newTag)
                                setSelectedTags(prev => [...prev, newTag])
                            }}
                            options={availableTags?.map(tag => {
                                return {label:tag.label,value:tag.id}
                            })}
                            onChange={tags => {
                                setSelectedTags(tags.map(tag => {
                                    return {label: tag.label, id:tag.value}
                                }))
                            }} isMulti />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Form.Group controlId="markdown">
                        <Form.Label>Body</Form.Label>
                        <Form.Control required as="textarea" rows={15} ref={markdownRef} defaultValue={markdown}/>
                    </Form.Group>
                </Row>
                <Row>
                    <Stack direction="horizontal" gap={2} className="justify-content-end">
                        <Button type="submit" variant="primary">Save</Button>
                        <Link to="..">
                        <Button type="button" variant="outline-secondary">Cancel</Button>
                        </Link>
                    </Stack>
                </Row>
            </Stack>
        </Form>
    )
}

export default NoteForm