import { notFound } from "next/navigation";

import notFoundProduct from "../../not-found";

export default function productReview( { params } : {
    params : {
        productId: string,
        reviewId: string
    }
} ){

    if(parseInt(params.productId)>10){
        return notFoundProduct();
    }

    if(parseInt(params.reviewId)>100){
        notFound();
    }

    return (
        <>

            <h2>Review {params.reviewId} for Product {params.productId}</h2>

        </>

    );

}