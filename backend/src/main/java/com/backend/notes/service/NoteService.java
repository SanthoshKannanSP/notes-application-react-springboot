package com.backend.notes.service;

import com.backend.notes.model.Note;

import java.util.List;
import java.util.Optional;

public interface NoteService {
    public Note saveNote(Note note);

    public Optional<Note> getNoteById(String id);

    public List<Note> getAllNotes();

}
