import Image from 'next/image'
import ImageArr from "../wonders"

type Props = {
    params:{
        id:string
    }
}

export default function PhotoID({params}:(Props)){
    let imgName = ""
    let imgSrc = ""
    for(let i of ImageArr){
        if(i.imgName===params.id.split('-').join(' ')){
            imgName = i.imgName;
            imgSrc = i.imgSrc;
            break;
        }
    }

    return (
        <>
            <div className="w-[30vw] min-h-[75vh] border border-black m-auto flex flex-col rounded-3xl">

                <div className=" grow-[3] overflow-hidden relative">
                    <Image 
                    src={imgSrc}
                    fill
                    className="rounded-t-3xl"
                    style={{
                        objectFit:'cover'
                    }}
                    title={imgName}
                    alt={imgName}/>
                </div>
                <div className="border-t border-black grow-[1] relative">
                    <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-2xl underline underline-offset-4">{imgName}</div>
                </div>

            </div>
        </>
    )
}