"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

/*
https://stackoverflow.com/questions/74421327/nextrouter-was-not-mounted-next-js

The new useRouter hook should be imported from next/navigation and not next/router

*/


export default function OrderProduct(){
    const [order,setOrder] = useState(false);
    const [orderText, setOrderText] = useState('Placing Your Order');
    const router = useRouter();

    // const handleOrder = () =>{
    //     router.push('/confirm')
    // }

    const handleOrder = async() => {
        setOrder(true);
        setOrderText('Placing Your Order...')
        console.log('Placing Your Order...')
        const success = true;
        await new Promise((resolve,reject)=>{
            if(success){    
                setTimeout(()=>{
                    router.push('/confirm')
                },3000)
                resolve(true);
            }else{
                setOrderText('Couldn\'t Place your order :(')
                reject(false);
            }
        })

    }

    return (
        <>
            <h1 className="my-5">Order Product</h1>
            {
                order?
                    (
                        <h5>{orderText}</h5>
                    )
                :
                    (
                        <button onClick={handleOrder} className="border-solid border-2 border-black p-3 rounded-xl hover:bg-black hover:text-white ease duration-300">Order Product</button>
                    )
            }

        </>

    );

}