package com.backend.notes.service;

import com.backend.notes.model.Note;

import java.util.List;

public interface NoteService {
    public Note saveNote(Note note);

    public List<Note> getAllNotes();
}
