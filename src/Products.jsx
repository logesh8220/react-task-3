
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



function Products() {
  const [products,setUsers] = useState([])
  const [isLoaidng,setLoading] = useState(false)
  // const [isLoading,setLoading] = useState[false]
  useEffect(()=>{
  loadData();
  },[])
  let loadData = async()=>{
    setLoading(true)
    let users = await axios.get("https://62e0d51698dd9c9df6177ef5.mockapi.io/users")
    setUsers(users.data)
    setLoading(false)

  }
  let deleteProduct = async(id)=>{
    try {
      let ask = window.confirm("Do You Want Delete This Data?")
      if(ask){
        
        await axios.delete(`https://62e0d51698dd9c9df6177ef5.mockapi.io/users/${id}`)
      }
      loadData();
    } catch (error) {
      
    }
  }
  return (
      <div>
        <div className="AddProducts  my-4"><button className="btn btn-primary"><Link to="/CreateProduct" className="text-light">Add Products</Link></button></div>
        {
          isLoaidng ? <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden"></span>
          </div>
        </div>:<table class="table table-bordered text-center">
  <thead>
    <th className="text-dark">Id</th>
    <th className="text-dark">Product</th>
    <th className="text-dark">Catagory</th>
    <th className="text-dark">Type</th>
    <th className="text-dark">BrandName</th>
    <th className="text-dark">Price</th>
    <th className="text-dark">Action</th>
  </thead>
  <tbody id="thead">
      {products.map((products,index)=>{
        return(
          <tr>
          <td>{products.id}</td>
          <td>{products.Product}</td>
          <td>{products.Catagory}</td>
          <td>{products.Type}</td>
          <td>{products.Brandname}</td>
          <td>${products.Price}</td>
          <td><button className="btn btn-warning mx-1"><Link to={`/products/${products.id}`} className="text-light">View</Link></button>
      <button className="btn btn-primary mx-1"><Link to={`/Edit/${products.id}`} className="text-light">Edit</Link></button>
      <button className="btn btn-danger mx-1 delete" onClick={()=>deleteProduct(products.id)}>delete</button>
      </td>
    </tr>
        )
      })}
  </tbody>
</table>
        }
</div>
    )

}

export default Products;
