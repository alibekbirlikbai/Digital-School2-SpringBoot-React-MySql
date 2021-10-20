package com.studentSystem.backend.teachers.service;

import com.studentSystem.backend.teachers.model.Teacher;
import com.studentSystem.backend.teachers.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherServiceImpl implements TeacherService {

    @Autowired
    private TeacherRepository teacherRepository ;

    @Override
    public Teacher saveTeacher(Teacher teacher) {
        return teacherRepository.save(teacher);
    }

//    @Override
//    public Student deleteStudent(Student student) {
//        return studentRepository.deleteById(student.getId());
//    }

    @Override
    public List<Teacher> getAllTeachers() {
        return teacherRepository.findAll();
    }
}
