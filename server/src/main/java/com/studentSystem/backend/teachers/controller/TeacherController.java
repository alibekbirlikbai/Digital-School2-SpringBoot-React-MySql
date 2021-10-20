package com.studentSystem.backend.teachers.controller;

import com.studentSystem.backend.teachers.model.Teacher;
import com.studentSystem.backend.teachers.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/teacher")
@CrossOrigin
public class TeacherController {
    @Autowired
    private TeacherService teacherService;

    @PostMapping("/register")
    public String add(@RequestBody Teacher teacher) {
        teacherService.saveTeacher(teacher);
        return "New student is added";
    }


    @GetMapping("/getAllTeachers")
    public List<Teacher> getAllTeachers() {
        return teacherService.getAllTeachers();
    }
}
