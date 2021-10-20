import "../App.css";

import React from "react";

import { useState } from "react";
import { Link } from "react-router-dom";


const RegistrationPage = () => {
    const [a_login, setLogin] = useState("");
    const [b_password, setPassword] = useState("");
  

    const registr = (e) => {
        e.preventDefault();
        const teacher = {a_login, b_password}
        console.log(teacher)
  
        fetch("http://localhost:8080/teacher/register",{
          method: "POST",
          headers: {"Content-type":"application/json"},
          body:JSON.stringify(teacher) 
        }).then(() => {
            console.log("New Teacher added")
        })
    }




    return (
        <div className="App">
        <div className="information">
            <h1>Registration</h1>

            <label>Login:</label>
                <input
                type="text" placeholder="Enter Name"
                value={a_login}
                onChange={(event) => {
                  setLogin(event.target.value);
                }}
            />


            <label>Password:</label>
                <input
                type="password" placeholder="Enter Surname"
                value={b_password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
            />


        <button onClick={registr}><Link to="/student-list" class="link">Registration</Link></button>
            
        </div>

      </div>
    );
}

export default RegistrationPage;
