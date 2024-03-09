import Link from "next/link"
export default function F1(){
    return(
        <>

            <h2>F1 Page</h2>
            <ul>
                <br />
                <li><Link href={'/f1/f2'}><div className="text-blue-600 text-2xl underline underline-offset-4">F2 Page</div></Link></li>
                <br />
                <li><Link href={'/f1/f4'}><div className="text-blue-600 text-2xl underline underline-offset-4">F4 Page</div></Link></li>
            </ul>
            
        </>
    )
}