import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import axios from 'axios';

function CreateMentor() {
    const navigate = useNavigate()
const formik = useFormik({
        initialValues: {
          Name: "",
          Batch:"",
          Mentorphno:"",
          Mentoremail:"",

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
      <lable className="text-dark ml-1">Mentor Name</lable>
      <input value={formik.values.Name} name="Name"  onChange={formik.handleChange} type={"text"} className="form-control col-6"></input>
      <lable className="text-dark ml-1">Ph.Number</lable>
      <input value={formik.values.Mentorphno} name="Mentorphno"  onChange={formik.handleChange} type={"number"} className="form-control col-6"></input>
      <lable className="text-dark ml-1">Email</lable>
      <input value={formik.values.Mentoremail} name="Mentoremail"  onChange={formik.handleChange} type={"email"} className="form-control col-6"></input>
      <lable className="text-dark ml-1">Batch</lable>
      <input value={formik.values.Batch} name="Batch"  onChange={formik.handleChange} type={"string"} className="form-control col-6"></input>
      <button type='submit' value={"Submit"}className="btn btn-primary my-3">Submit</button>
      </form>
      </div>
    </div>
  )
}

export default CreateMentor