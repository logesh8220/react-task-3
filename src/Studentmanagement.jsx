import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Studentmanagement() {
    const [mentor,setMentor] = useState([])
    const [isLoading,setLoading] = useState(false)
    useEffect(()=>{
        LoadData ()
    },[])
    let LoadData = async()=>{
        setLoading(true)
        let data = await axios.get(`https://62e0d51698dd9c9df6177ef5.mockapi.io/institute`)
        setLoading(false)
        setMentor(data.data)
    }
    let deletementor = async (id)=>{
            
            try {
                let ask = window.confirm(`Do You Want Remove this Mentor?`)
                if(ask){
                  
                  await axios.delete(`https://62e0d51698dd9c9df6177ef5.mockapi.io/institute/${id}`)
                }
                LoadData();
              } catch (error) {
                
              }
       
    }
  return (
    <div>
        { isLoading ? <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden"></span>
          </div>
        </div>:<div>
        <div className="AddProducts">
            <button className="btn btn-primary"><Link to="/CreateMentor" className="text-light">Create Mentor</Link></button>
            </div><br></br>
        <table  class="table table-bordered text-center">
        <thead>
    <th className="text-dark">Id</th>
    <th className="text-dark">Batch</th>
    <th className="text-dark">Mentor Name</th>
    <th className="text-dark">Email</th>
    <th className="text-dark">Action</th>
  </thead>
  <tbody id="thead">
   {
    mentor.map((mentor,index)=>{
   return (
    <tr>
        <td>{index+1}</td>
        <td>{mentor.Batch}</td>
        <td>{mentor.Name}</td>
        <td>{mentor.Mentoremail}</td>
        <td><button className="btn btn-warning mx-1"><Link to={`/ViewStudents/${mentor.Name}`} className="text-light">View Students</Link></button>
      <button className="btn btn-primary mx-1"><Link to={`/ChangeMentor/${mentor.id}`} className="text-light">Edit Mentor</Link></button>
      <button className="btn btn-danger mx-1 delete" onClick={(()=>{deletementor(mentor.id)})}>Remove Mentor</button>
      </td>
    </tr>
   )
    })
   }
  </tbody>
        </table>
        </div>
}

    </div>
  )
}

export default Studentmanagement