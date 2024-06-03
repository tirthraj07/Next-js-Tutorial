import { NextRequest } from "next/server";
import { comments } from "./comments"

export async function GET(request:NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filterComments = query?comments.filter(comment => comment.text.includes(query)):comments;
    return Response.json(filterComments);
}

export async function POST(request:Request){
    const data = await request.json();
    const newComment = {
        id : comments.length+1,
        text: data.text
    }
    comments.push(newComment);
    return new Response(JSON.stringify(newComment),{
        headers:{
            "Content-Type":"application/json"
        },
        status:201
    })

}