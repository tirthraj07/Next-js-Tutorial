export default function productDetails( { params } : {
    params : {productId: string}
} ){
    return (
        <>
            <h1>Product Details of Product {params.productId}</h1>
            {/* <h1>Product Details of Product {params['productId']}</h1> */}

        </>

    );
}