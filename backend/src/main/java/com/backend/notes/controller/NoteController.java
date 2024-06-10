package com.backend.notes.controller;

import com.backend.notes.model.Note;
import com.backend.notes.model.NoteListResponse;
import com.backend.notes.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @GetMapping("/{noteId}")
    public ResponseEntity<?> getNoteById(@PathVariable String noteId){
        Optional<Note> note = noteService.getNoteById(noteId);
        if(note.isPresent()){
            return ResponseEntity.ok(note.get());
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Note is not found with ID: "+noteId);
    }

    @PostMapping("/edit")
    public ResponseEntity<?> updateNoteById(@RequestBody Note noteData){
        Optional<Note> note = noteService.getNoteById(noteData.getId());
        if(note.isPresent()){

            return ResponseEntity.ok(noteService.saveNote(noteData));
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Note is not found with ID: "+noteData.getId());
    }

    @PostMapping("/create")
    public String add(@RequestBody Note note){
        noteService.saveNote(note);
        return "success";
    }
}


