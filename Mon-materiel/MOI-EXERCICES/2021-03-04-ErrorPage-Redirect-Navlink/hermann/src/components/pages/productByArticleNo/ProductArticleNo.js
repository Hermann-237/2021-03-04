
import React, { useState } from 'react'
import {useParams} from "react-router-dom"
import db from "../../data"

function ProductByArticleNo() {

    const [products] = useState(db)
    const {articleNo} = useParams()
    console.log(articleNo)
    const singleData =  products.filter((product)=>product.articleNo === articleNo)
    console.log(singleData)
    return (
        <div>
            <div className="m-5">
            <table className="table table-striped">
            <thead className="thead-dark">
            <tr>
              <th scope="col" className="text-center">ArticleNo</th>
              <th scope="col" className="text-center">Article's Name</th>
              <th scope="col" className="text-center">Description</th>
              <th scope="col" className="text-center">Price</th>
            </tr>
          </thead>
          <tbody>
             {
              singleData.length > 0? (singleData.map((product,index)=>{
                return(
                  <tr key = {index}>
                <th scope="row" className="text-center">{product.articleNo} </th>
                <td className="text-center">{product.name} </td>
                <td className="text-center">{product.description} </td>
                <td className="text-center">{product.price +" €"} </td>
            </tr>
                )
              })):(<h1>This article number does not exist</h1>)
            } 


            {/*  {
            singleData.map((product,index)=>{
              return(
                <tr>
              <th scope="row" className="text-center">{product.articleNo} </th>
              <td className="text-center">{product.name} </td>
              <td className="text-center">{product.description} </td>
              <td className="text-center">{product.price +" €"} </td>
          </tr>
              )
            })
          }  */}
          {/* <tr>
          <th scope="row" className="text-center">{singleData[0].articleNo} </th>
              <td className="text-center">{singleData[0].name} </td>
              <td className="text-center">{singleData[0].description} </td>
              <td className="text-center">{singleData[0].price +" €"} </td>
          </tr> */}
           
          </tbody>
        </table>
        </div>
            
        </div>
    )
}

export default ProductByArticleNo