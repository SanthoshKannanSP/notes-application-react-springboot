package com.backend.notes.service;

import com.backend.notes.model.Tag;

import java.util.List;

public interface TagService {
    public Tag saveTag(Tag tag);

    public List<Tag> getAllTags();
}
