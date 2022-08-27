import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ViewStudents() {
    const [student,setStudent] = useState([])
    const params = useParams()
    const [isLoading,setLoading] = useState(false)
    useEffect(()=>{
      LoadStudents()
    },[])
    let LoadStudents = async ()=>{
        setLoading(true)
        let data = await axios.get(`https://62e0d51698dd9c9df6177ef5.mockapi.io/institute`)
        setLoading(false)
        setStudent(data.data)
    }
    let deletestudent = async (id)=>{
        try {
            let ask = window.confirm("Do You Want Remove This Student?")
            if(ask){
              
              await axios.delete(`https://62e0d51698dd9c9df6177ef5.mockapi.io/institute/${id}`)
            }
            LoadStudents();
          } catch (error) {
            
          }
    }
    return (
    <div>
                { isLoading ? <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden"></span>
          </div>
        </div>: 
        <div>
            <div className="AddProducts">
            <button className="btn btn-primary"><Link to="/CreateStudent" className="text-light">Create Student</Link></button>
            </div>
     <h1 className="text-center text-dark">Mentor: {params.Name}</h1><br></br>
     <h1 className="text-center text-dark">Batch: {params.Batch}</h1><br></br>
      <table class="table table-bordered text-center">
        <thead>
          <th className="text-dark">Id</th>
          <th className="text-dark">Students Names</th>
          <th className="text-dark">Ph.Number</th>
          <th className="text-dark">Email</th>
          <th className="text-dark">Area</th>
          <th className="text-dark">Join Date</th>
          <th className="text-dark">Action</th>
          
        </thead>
        <tbody id="thead">
          {student.map((student, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{student.StudentName}</td>
                <td>{student.Sphno}</td>
                <td>{student.Semail}</td>
                <td>{student.Sarea}</td>
                <td>{student.Joindate}</td>
                <td> <button className="btn btn-danger" onClick={()=>deletestudent(student.id)}>Remove</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
}
    </div>
  );
}

export default ViewStudents;
