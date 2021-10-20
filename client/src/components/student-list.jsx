import "../App.css";
import axios from "axios";

import React from "react";

import { useState } from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";


const StudentList = () => {
    const ref = useRef(null);
  
    const [studentList, setStudentList] = useState([]);    

    const getStudents = () => {
        fetch("http://localhost:8080/student/getAll")
        .then(res=>res.json())
        .then((result)=>{
        setStudentList(result);
        }
      )
    }

    useEffect(() => {
        setTimeout(() => {
        ref.current.click();
        }, 0);
    }, []);



    ///Кнопка delete не работает
    const deleteStudent = (id) => {

        axios.delete(`http://localhost:8080/student/${id}`)
            .then(response => {
                if(response.data != null) {
                    alert("Book deleted successfully");
                }
            })
      }
    


    
    return (
            <div className="information list">
                <Link to="/"><button id="logout">logout</button></Link>

                    <h1>List of Students</h1>

                    <table>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>midterm(Pk-1)</th>
                                <th>enterm(Pk-2)</th>
                                <th>final</th>
                                <th>gpa</th>                                                   
                            </tr>
                            
                        {studentList.map(student => {
                            return (      
                                <tr> 
                                    <td>{student.id}</td>

                                    <td>{student.a_name}</td>
                                    <td>{student.b_surname}</td>
                                    <td>{student.c_midterm}%</td>
                                    <td>{student.d_endterm}%</td>
                                    <td>{student.e_final}%</td>
                                    <td>{student.f_gpa}</td>

                                    <td><button 
                                        onClick={() => {
                                        deleteStudent(student.id);
                                        }}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}

                    </table>


                    <button ref={ref} onClick={getStudents} class="hidden"></button>

                    <Link to="/add-student"><button>Add new Student</button></Link>
            </div>
    );
}

export default StudentList;


