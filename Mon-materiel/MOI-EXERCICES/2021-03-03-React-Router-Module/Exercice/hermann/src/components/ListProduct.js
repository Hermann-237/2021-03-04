import React, { useState } from 'react'
import SingleProduct from "./SingleProduct"

const db = [
  {
    articleNo: "pc-0001",
    name: "Dell PC 2021",
    description:
      "super-fast and not-so-reliable machine that takes care of your daily dosis of crashes",
    price: 89.9,
  },
  {
    articleNo: "hw-0002",
    name: "Lenovo ThinkPad",
    description:
      "high-end-business notebook for the power-user who does not need a working computer at all",
    price: 95.9,
  },
  {
    articleNo: "hw-0003",
    name: "MacBook Pro",
    description:
      "beautifully designed, pricey aluminum block. comes with an apple sticker for your car!",
    price: 39.9,
  },
  {
    articleNo: "hw-0004",
    name: "HP Spectre Convertible",
    description:
      "extremely performant notebook that converts to a bulky tablet for users with strong arms and huge hands",
    price: 180,
  },
  {
    articleNo: "hw-0005",
    name: "Samsung",
    description:
      "Tu peux bien l'acheter il est moin chere et tu pourras le revendre lorsque tu voudras",
    price: 12.1,
  },
];


const ListProduct = () => {
    const [products] = useState(db)
    console.log("voici les products",products)
    return (
      <div className="" style={{margin:"0 200px" }}>
       <table class="table">
  <thead class="thead-dark">
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
                <SingleProduct id ={index+1} articleNo ={product.articleNo} name={product.name} description ={product.description} price ={product.price + " €"}/>
              )
            })
          }
           
          </tbody>
        </table>
      </div>
    );
}

export default ListProduct

