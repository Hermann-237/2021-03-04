import {useParams} from "react-router-dom"

 function ProductsDetailsPage() {
     const {productId} = useParams()

    return (
        <>
            <h1>Page details {productId}</h1>
        </>
    )
}

export default ProductsDetailsPage;