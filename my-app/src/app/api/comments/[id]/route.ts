import { comments } from "../comments";
export async function GET(request:Request, { params }:{
    params:{
        id:string
    }
}){

    for(let i of comments){
        if(i.id === parseInt(params.id)){
            return new Response(JSON.stringify(i),{
                headers:{
                    "Content-Type":"application/json"
                },
                status:200
            })
        }
    }

    return new Response(JSON.stringify({error:"Comment not found"}), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 404
    });
}