package com.studentSystem.backend.teachers.service;

import com.studentSystem.backend.teachers.model.Teacher;

import java.util.List;

public interface TeacherService {
    public Teacher saveTeacher(Teacher teacher);
    public List<Teacher> getAllTeachers();

}
