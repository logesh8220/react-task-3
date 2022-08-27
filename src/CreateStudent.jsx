import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFormik } from 'formik';

function CreateStudent() {
    let params = useParams()
    const navigate = useNavigate()
const formik = useFormik({
        initialValues: {
          StudentName: "",
          Sphono:"",
          Semail:"",
          Sarea:"",
          JionDate:"",
        },
        onSubmit: async(values)=>{
           await axios.post(`https://62e0d51698dd9c9df6177ef5.mockapi.io/institute`,values)
           navigate("/Studentmanagement")
       }
    })

  return (
    <div>
        <div className='container'>
            <form onSubmit={formik.handleSubmit}>  
      <lable className="text-dark ml-1">Student Name</lable>
      <input value={formik.values.StudentName} name="StudentName"  onChange={formik.handleChange} type={"text"} className="form-control col-6"></input>
      <lable className="text-dark ml-1">Ph.Number</lable>
      <input value={formik.values.Sphono} name="Sphono"  onChange={formik.handleChange} type={"number"} className="form-control col-6"></input>
      <lable className="text-dark ml-1">Email</lable>
      <input value={formik.values.Semail} name="Semail"  onChange={formik.handleChange} type={"email"} className="form-control col-6"></input>
      <lable className="text-dark ml-1">Area</lable>
      <input value={formik.values.Sarea} name="Sarea"  onChange={formik.handleChange} type={"text"} className="form-control col-6"></input>
      <lable className="text-dark ml-1">Date</lable>
      <input value={formik.values.JionDate} name="JionDate"  onChange={formik.handleChange} type={"date"} className="form-control col-6"></input>
      <button type='submit' value={"Submit"}className="btn btn-primary my-3">Change</button>
      </form>
      </div>
    </div>
  )
}

export default CreateStudent