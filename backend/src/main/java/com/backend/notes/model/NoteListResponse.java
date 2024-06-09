package com.backend.notes.model;

import java.util.List;

public class NoteListResponse {
    private String status;
    private List<Note> data;

    public NoteListResponse(String status, List<Note> data) {
        this.status = status;
        this.data = data;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public List<Note> getData() {
        return data;
    }

    public void setData(List<Note> data) {
        this.data = data;
    }
}
