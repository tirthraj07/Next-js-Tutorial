import Link from "next/link";
export default function Home(){
    return (
        <>
    
            <h1>Home Page</h1>
        
            <div>
                <h3>Links</h3>
                <Link href="/about">About</Link>
                <br />
                <Link href="/profile">Profile</Link>     
                <br />
                <Link href="/products">Products</Link>
            </div>

        </>)
    ;
}