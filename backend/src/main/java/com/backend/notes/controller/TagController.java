package com.backend.notes.controller;

import com.backend.notes.model.Tag;
import com.backend.notes.model.TagListResponse;
import com.backend.notes.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/tag")
public class TagController {
    @Autowired
    private TagService tagService;

    @GetMapping("/all")
    public TagListResponse getAllTags(){
        List<Tag> data = tagService.getAllTags();
        TagListResponse response = new TagListResponse("success",data);
        return response;
    }

    @PostMapping("/create")
    public String add(@RequestBody Tag tag){
        tagService.saveTag(tag);
        return "Success";
    }
}