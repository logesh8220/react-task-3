import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFormik } from 'formik';


function ChangeMentor() {
    let params = useParams()
    const navigate = useNavigate()
const formik = useFormik({
        initialValues: {
          Name: "",

        },
        onSubmit: async(values)=>{
           await axios.put(`https://62e0d51698dd9c9df6177ef5.mockapi.io/institute/${params.id}`,values)
           navigate("/Studentmanagement ")
       }
    })
    useEffect(()=>{
     LoadData()
    },[])
    let LoadData = async()=>{
        let data = await axios.get(`https://62e0d51698dd9c9df6177ef5.mockapi.io/institute/${params.id}`)
        console.log(data.data)
        formik.setValues({
            Name: data.data.Name,
            Mentoremail: data.data.Mentoremail
        })
    }
  return (
    <div>
        <div className='container'>
            <form onSubmit={formik.handleSubmit}>  
      <lable className="text-dark ml-1">Mentor Name</lable>
      <input value={formik.values.Name} name="Name"  onChange={formik.handleChange} type={"text"} className="form-control col-6"></input>
      <lable className="text-dark ml-1">Mentor Name</lable>
      <input value={formik.values.Mentoremail} name="Mentoremail"  onChange={formik.handleChange} type={"text"} className="form-control col-6"></input>
      <button type='submit' value={"Submit"}className="btn btn-primary my-3">Change</button>
      </form>
      </div>
    </div>
  )
}

export default ChangeMentor