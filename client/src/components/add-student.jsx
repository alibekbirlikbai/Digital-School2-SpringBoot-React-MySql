import "../App.css";

import React from "react";

import { useState } from "react";
import { Link } from "react-router-dom";


const AddStudentPage = () => {
    const [a_name, setName] = useState("");
    const [b_surname, setSurname] = useState("");
    const [c_midterm, setMidterm] = useState("");
    const [d_endterm, setEndTerm] = useState("");
    const [e_final, setFinal] = useState("");
    const [f_gpa, setGpa] = useState("");
  

    const addStudent = (e) => {
        e.preventDefault();
        const student = {a_name, b_surname, c_midterm, d_endterm, e_final, f_gpa}
        console.log(student)
  
        fetch("http://localhost:8080/student/add",{
          method: "POST",
          headers: {"Content-type":"application/json"},
          body:JSON.stringify(student) 
        }).then(() => {
            console.log("New Student added")
        })
    }




    return (
        <div className="App">
        <div className="information">
            <h1>Add new Student</h1>

            <label>Name:</label>
                <input
                type="text" placeholder="Enter Name"
                value={a_name}
                onChange={(event) => {
                    setName(event.target.value);
                }}
            />


            <label>Surname:</label>
                <input
                type="text" placeholder="Enter Surname"
                value={b_surname}
                onChange={(event) => {
                    setSurname(event.target.value);
                }}
            />


            <label>MidTerm:</label>
                <input
                type="text" placeholder="Enter MidTerm"
                value={c_midterm}
                onChange={(event) => {
                    setMidterm(event.target.value);
                }}
            />


            <label>EndTerm:</label>
                <input
                type="text" placeholder="Enter Endterm"
                value={d_endterm}
                onChange={(event) => {
                    setEndTerm(event.target.value);
                }}
            />

            <label>Final:</label>
                <input
                type="text" placeholder="Enter Final"
                value={e_final}
                onChange={(event) => {
                    setFinal(event.target.value);
                }}
            />

            <label>Gpa:</label>
                <input
                type="text" placeholder="Enter Gpa"
                value={f_gpa}
                onChange={(event) => {
                    setGpa(event.target.value);
                }}
            />

        <button onClick={addStudent}><Link to="/student-list" class="link">Add</Link></button>
            

        </div>

        </div>
    );
}

export default AddStudentPage;
