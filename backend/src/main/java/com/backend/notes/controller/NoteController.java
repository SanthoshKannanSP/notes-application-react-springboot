package com.backend.notes.controller;

import com.backend.notes.model.Note;
import com.backend.notes.model.NoteListResponse;
import com.backend.notes.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/note")
public class NoteController {
    @Autowired
    private NoteService noteService;

    @GetMapping("/all")
    public NoteListResponse getAllNotes(){
        List<Note> data = noteService.getAllNotes();
        NoteListResponse response = new NoteListResponse("success", data);
        return response;
    }

    @PostMapping("/create")
    public String add(@RequestBody Note note){
        noteService.saveNote(note);
        return "success";
    }
}


