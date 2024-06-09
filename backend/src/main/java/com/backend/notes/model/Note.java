package com.backend.notes.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="note")
public class Note {

    @Id
    @Column(name = "note_id")
    private String id;
    @Column(name = "title")
    private String title;
    @OneToMany
    @Column(name = "tags")
    private List<Tag> tags;
    @Column(name = "markdown")
    private String markdown;

    public Note() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<Tag> getTags() {
        return tags;
    }

    public void setTags(List<Tag> tags) {
        this.tags = tags;
    }

    public String getMarkdown() {
        return markdown;
    }

    public void setMarkdown(String markdown) {
        this.markdown = markdown;
    }
}
