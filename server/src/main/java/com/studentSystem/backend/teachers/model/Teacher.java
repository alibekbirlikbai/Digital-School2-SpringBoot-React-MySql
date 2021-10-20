package com.studentSystem.backend.teachers.model;

import javax.persistence.*;

@Entity
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)    //Make id AUTO-INCREMENT
    private int id;

    @Column(name="login")
    private String a_login;

    @Column(name="password")
    private String b_password;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getA_login() {
        return a_login;
    }

    public void setA_login(String a_login) {
        this.a_login = a_login;
    }

    public String getB_password() {
        return b_password;
    }

    public void setB_password(String b_password) {
        this.b_password = b_password;
    }
}
