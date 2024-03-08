// import { Metadata } from "next";
import { resolve } from "path";

// export const metadata:Metadata = {
//     title: {
//         absolute: "Blog"
//     }
// }

export const generateMetadata = async() =>{
    const title = await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Blog')
        },100)
    })

}

export default function Blog(){
    return(
        <>
            <h1>Blog</h1>
        </>
    );
}