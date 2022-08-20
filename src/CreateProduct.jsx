import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      Product: "",
      Catagory: "",
      Type: "",
      BrandName: "",
      Price: "",
    },
    validate:(values)=>{
    let errors = {}
    if(values.Product === ""){
        errors.Product = "Enter Value"
    }
    return errors;
    },
    onSubmit: async (values) => {
    let user = await axios.post(`https://62e0d51698dd9c9df6177ef5.mockapi.io/users`,values)
   navigate("/Products")
    },
  });
  return (
    <>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <lable>Product</lable>
              <input
                className="form-control"
                type={"text"}
                value={formik.values.Product}
                onChange={formik.handleChange}
                name="Product"
              />
              <span className="text-danger">{formik.errors.Product}</span>
            </div>
            <div className="col-lg-6">
              <lable>Catagory</lable>
              <input
                className="form-control"
                type={"text"}
                value={formik.values.Catagory}
                onChange={formik.handleChange}
                name="Catagory"
              />
            </div>
            <div className="col-lg-6">
              <lable>Type</lable>
              <input
                className="form-control"
                type={"text"}
                value={formik.values.Type}
                onChange={formik.handleChange}
                name="Type"
              />
            </div>
            <div className="col-lg-6">
              <lable>BrandName</lable>
              <input
                className="form-control"
                type={"text"}
                value={formik.values.BrandName}
                onChange={formik.handleChange}
                name="BrandName"
              />
            </div>
            <div className="col-lg-6">
              <lable>Price</lable>
              <input
                className="form-control"
                type={"number"}
                value={formik.values.Price}
                onChange={formik.handleChange}
                name="Price"
              />
            </div>
          </div>
          <button type="submit" value={"submit"} className="btn btn-primary my-3">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default CreateProduct;
