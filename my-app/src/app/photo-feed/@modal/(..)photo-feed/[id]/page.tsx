"use client"
import ImageArr from "../../../wonders"
import Modal from "@/components/modal"
import Image from "next/image"
import { useRouter } from "next/navigation"

type Props = {
    params:{
        id:string
    }
}


export default function InterceptedPhotoID({params}:(Props)){
    let imgName = ""
    let imgSrc = ""
    for(let i of ImageArr){
        if(i.imgName===params.id.split('-').join(' ')){
            imgName = i.imgName;
            imgSrc = i.imgSrc;
            break;
        }
    }

    const router = useRouter();

    const handleClick = (e) => {
        if(e.target.id=="img"){
            router.forward();
        }
        else{
            router.back();
        }
    }

    return(
        
        <div onClick={handleClick} className="fixed top-0 left-0 w-[100%] h-[100%] z-20" style={{background:"rgba(0,0,0,0.5)"}}>
            <div className="bg-slate-100 border border-black m-auto flex flex-col" style={{width:"30vw", height:"70vh", marginTop:"15vh", borderRadius:"30px"}}>
                <div className="grow-[3] overflow-hidden relative" style={{borderTopRightRadius:"30px", borderTopLeftRadius:"30px"}}>
                <Image 
                    id="img"
                    src={imgSrc}
                    fill
                    onClick={()=>{
                        location.reload();
                    }}
                    className="rounded-t-3xl"
                    style={{
                        objectFit:'cover'
                    }}
                    title={imgName}
                    alt={imgName}
                />
                </div>
                <div className="border-t border-black grow-[1] relative" style={{borderBottomRightRadius:"30px", borderBottomLeftRadius:"30px"}}>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">
                        {imgName}
                    </div>
                </div>
            </div>
        </div>
    
    )

}