package com.studentSystem.backend.students.controller;

import com.studentSystem.backend.students.model.Student;
import com.studentSystem.backend.students.repository.StudentRepository;
import com.studentSystem.backend.students.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;
    private StudentRepository studentRepository;

    @PostMapping("/add")
    public String add(@RequestBody Student student) {
        studentService.saveStudent(student);
        return "New student is added";
    }


    @GetMapping("/getAll")
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }


}
