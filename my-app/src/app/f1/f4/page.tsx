import Link from "next/link"
export default function F4(){


    return(
        <>

            <h2>F4 page</h2>
            <br />
            <div className="text-blue-600 text-2xl underline underline-offset-4"><Link href={'/f1/f3'}>F3 Page</Link></div>

        </>
    )

}