package com.backend.notes.model;

import jakarta.persistence.*;

@Entity
@Table(name="tag")
public class Tag {
    @Id
    @Column(name = "tag_id")
    private String id;
    @Column(name = "label")
    private String label;

    public Tag() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }
}
