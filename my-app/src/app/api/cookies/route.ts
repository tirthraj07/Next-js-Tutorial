// There are two ways to set and get cookies 
/*
1. Using Set-Cookie Header and requests.cookies.get() method
2. Using the cookies function provided in next/headers
*/

import { NextRequest } from "next/server";
import { cookies } from "next/headers";


export async function GET(request: NextRequest){
    // First Approach
    const theme = request.cookies.get('theme');
    console.log(theme);

    // Second Approach
    cookies().set("resultsPerPage","100");
    console.log(cookies().get("resultsPerPage"));

    return new Response("Cookies",{
        headers:{
            "Set-Cookie":"theme=dark",
        }
    })

}