import Image from 'next/image'
export default function Modal({imgSrc, imgName}:{
    imgSrc:string,
    imgName:string
}){
    return(
        <>
            <div className="border border-black border-solid min-h-[40vh] flex flex-col flex-wrap overflow-hidden">
                <div className="grow-[3] overflow-hidden relative">
                <Image
                    src={imgSrc}
                    fill
                    style={{
                        objectFit:'contain'
                    }}
                    alt="Picture of the author"
                />
                </div>
                <div className="border-t border-black flex-grow text-center font-xl p-1">{imgName}</div>
            </div>
        </>
    )
}