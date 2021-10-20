package com.studentSystem.backend.students.service;

import com.studentSystem.backend.students.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();

}
