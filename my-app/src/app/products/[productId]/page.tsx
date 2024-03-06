import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
    params:{
        productId:string
    };
};


export const generateMetadata = ( {params}:(Props) ): Metadata =>{
    return {
        title:`Product ${params.productId}`
    }
};



// Simulation of API Call
// export const generateMetadata = async({params}:Props): Promise<Metadata> =>{
//     const title = await new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(`Product ${params.productId}`)
//         },100)
//     })
//     return{
//         title: `${title}`
//     }
// }


export default function productDetails( { params } : Props ){

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