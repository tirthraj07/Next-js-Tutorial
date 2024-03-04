import { notFound } from "next/navigation";

export default function productDetails( { params } : {
    params : {productId: string}
} ){

    if( parseInt(params.productId) > 10){
        notFound();
    }


    return (
        <>
            <h1>Product Details of Product {params.productId}</h1>
            {/* <h1>Product Details of Product {params['productId']}</h1> */}

        </>

    );
}