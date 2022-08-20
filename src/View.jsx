import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function View() {
    const params = useParams()
    const [productData,setProductData] = useState({})

useEffect(()=>{
loadProduct()
},[])
let loadProduct = async ()=>{
    try {
        let products = await axios.get(`https://62e0d51698dd9c9df6177ef5.mockapi.io/users/${params.id}`)
        setProductData(products.data)
    } catch (error) {
         alert(error)
    }
}

  return (
    <div className='cardcar'>
<div className="card car text-center">
  <img src="https://media.npr.org/assets/img/2022/02/07/ap_22035703692687-bb96f6d10f51d3a149a3638571f675eb0664acca.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h1 className="card-title text-dark">Vehical Detials</h1>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item"><h2> Vehical Name: {productData.Product}</h2></li>
    <li className="list-group-item"><h2> Vehical Catagory: {productData.Catagory}</h2></li>
    <li className="list-group-item"><h2> Vehical Type: {productData.Type}</h2></li>
    <li className="list-group-item"><h2> Vehical Brand: {productData.Brandname}</h2></li>
    <li className="list-group-item"><h2> Vehical Price: $ {productData.Price}</h2></li>
  </ul>
  <div className="card-body">

  </div>
</div>
</div>
  )
}

export default View