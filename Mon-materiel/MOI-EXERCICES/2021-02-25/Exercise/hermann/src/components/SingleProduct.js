import React from "react";


const SingleProduct = ({id,articleNo,name,description,price}) => {
return(
    <tr>
        <th scope="row" className="text-center">{id} </th>
        <td className="text-center">{articleNo} </td>
        <td className="text-center">{name} </td>
        <td className="text-center">{description} </td>
        <td className="text-center">{price} </td>
    </tr>
)
  
};



export default SingleProduct;
