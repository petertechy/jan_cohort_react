import React, { useEffect, useState } from "react";
import axios from "axios";

const MakeRequest = () => {
  const [product, setproduct] = useState([]);
  const [loading, setloading] = useState(true);
  const endpoint = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // console.log("workiinnngggg")
    try {
      let response = await axios.get(endpoint);
      setloading(false)
      setproduct(response.data);
      console.log(response);
    } catch (err) {
      console.log(err.message, "There is an error");
    }
    // .then((response)=>{
    //     console.log(response)
    // })
    // .catch((error)=>{
    //     console.log(error, "there is an error")
    // })
  };

  return (
    <div>
      <h1>Make Request Here</h1>
      <button onClick={fetchData}>Fetch Data</button>

      

      {loading ? (
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        product.map((products) => (
          <div key={products.id}>
            <h1>{products.id}</h1>
            <h1>{products.title}</h1>
            <img width={200} src={products.image} alt="" />
            <p>{products.description}</p>
            <i>${products.price}</i>
          </div>
        ))
      )}
    </div>
  );
};

export default MakeRequest;
