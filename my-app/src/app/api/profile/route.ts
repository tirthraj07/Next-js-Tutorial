// There are two ways to get headers.
// 1. using NextRequest from "next/server"
// 2. using headers from "next/headers"

import { type NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest){

    // Request Headers
    const requestHeaders = new Headers(request.headers);
    const headerList = headers();

    console.log(requestHeaders.get("Authorization"));
    console.log(headerList.get("Authorization"));

    // Response Headers
    return new Response("<h1>Profile API data</h1>", {
        headers:{
            "Content-Type":"text/html"
        }
    })

}