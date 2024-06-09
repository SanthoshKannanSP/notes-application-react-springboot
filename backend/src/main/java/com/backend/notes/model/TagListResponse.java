package com.backend.notes.model;

import java.util.List;

public class TagListResponse {
    private String status;
    private List<Tag> data;

    public TagListResponse(String status, List<Tag> data) {
        this.status = status;
        this.data = data;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public List<Tag> getData() {
        return data;
    }

    public void setData(List<Tag> data) {
        this.data = data;
    }
}
