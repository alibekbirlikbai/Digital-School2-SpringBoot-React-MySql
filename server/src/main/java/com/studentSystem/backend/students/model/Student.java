package com.studentSystem.backend.students.model;

import javax.persistence.*;

@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)    //Make id AUTO-INCREMENT
    private int id;

    @Column(name="name")
    private String a_name;

    @Column(name="surname")
    private String b_surname;

    @Column(name="midterm")
    private int c_midterm;

    @Column(name="endterm")
    private int d_endterm;

    @Column(name="final")
    private int e_final;

    @Column(name="gpa")
    private double f_gpa;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getA_name() {
        return a_name;
    }

    public void setA_name(String a_name) {
        this.a_name = a_name;
    }

    public String getB_surname() {
        return b_surname;
    }

    public void setB_surname(String b_surname) {
        this.b_surname = b_surname;
    }

    public int getC_midterm() {
        return c_midterm;
    }

    public void setC_midterm(int c_midterm) {
        this.c_midterm = c_midterm;
    }

    public int getD_endterm() {
        return d_endterm;
    }

    public void setD_endterm(int d_endterm) {
        this.d_endterm = d_endterm;
    }

    public int getE_final() {
        return e_final;
    }

    public void setE_final(int e_final) {
        this.e_final = e_final;
    }

    public double getF_gpa() {
        return f_gpa;
    }

    public void setF_gpa(double f_gpa) {
        this.f_gpa = f_gpa;
    }
}
