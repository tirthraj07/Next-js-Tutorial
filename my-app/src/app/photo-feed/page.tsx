import Modal from "@/components/modal";
import Link from "next/link";
import wonders from "./wonders";




export default function PhotoFeed(){
    

    return (
        <>
            <h1 className="text-center text-2xl underline underline-offset-4">Photo Feed</h1>

            <div className="border border-black my-5 grid grid-cols-4 gap-3 p-4">
                {
                    wonders.map(({imgName, imgSrc}) => {
                        return(
                            <Link key={imgName} href={`/photo-feed/${imgName.split(' ').join('-')}`}>
                            <div className="cursor-pointer">
                            <Modal imgSrc={imgSrc} imgName={imgName}/>
                            </div>
                            </Link>
                        )
                    })
                }
            </div>

        </>
    )
}