import React, { useState } from "react";
import axios from "axios";

const MakeRequest = () => {
    const [product, setproduct] = useState([])
    const endpoint = "https://fakestoreapi.com/products"

    const fetchData = ()  =>{
        // console.log("workiinnngggg")
        axios.get(endpoint)
        .then((response)=>{
            console.log(response.data)
            setproduct(response.data)
        })
        .catch((error)=>{
            console.log(error, "there is an error")
        })
    }

  return (
    <div>
      <h1>Make Request Here</h1>
      <button onClick={fetchData}>Fetch Data</button>

      {
        product.map((products)=>(
            <div key={products.id}>
                <h1>{products.id}</h1>
                <h1>{products.title}</h1>
                <img width={200} src={products.image} alt="" />
                <p>{products.description}</p>
                <i>${products.price}</i>
            </div>

        ))
      }
    </div>
  );
};

export default MakeRequest;
