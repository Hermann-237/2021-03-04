
import React, { useState } from 'react'
import db from "../../data"


import SingleProduct from "../../SingleProduct"


function Products() {
    const [products] = useState(db)

    return (
        <div>
            <div className = " m-5">
        <table className="table table-striped">
        <thead className="thead-dark" >
            <tr>
              <th scope="col" className="text-center">ID</th>
              <th scope="col" className="text-center">ArticleNo</th>
              <th scope="col" className="text-center">Article's Name</th>
              <th scope="col" className="text-center">Description</th>
              <th scope="col" className="text-center">Price</th>
            </tr>
          </thead>
          <tbody>
          {
            products.map((product,index)=>{
              return(
                <SingleProduct key={index} id ={index+1} articleNo ={product.articleNo} name={product.name} description ={product.description} price ={product.price + " €"}/>
              )
            })
          }
           
          </tbody>
        </table>
        </div>
        </div>
    )
}

export default Products