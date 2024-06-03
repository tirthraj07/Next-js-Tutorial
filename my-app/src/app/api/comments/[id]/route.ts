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


export async function PATCH(request:Request, { params }:{
    params:{
        id:string
    }
}){
    const body = await request.json();
    const { text } = body;


    const index = comments.findIndex(
        comment => comment.id === parseInt(params.id)
    );

    if(index === -1){
        return new Response(JSON.stringify({"error":"Comment Not Found!"}),{
            headers:{
                "Content-Type":"application/json"
            },
            status:404
        })
    }

    comments[index].text = text;
    return new Response(JSON.stringify(comments[index]), {
        headers:{
            "Content-Type":"application/json"
        },
        status:200
    })


}