"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function authNavLayout({children}:{
    children: React.ReactNode
}){

    const navLinks = [
        { name:"Register", href:"/register" },
        { name:"Login", href:"/login" },
        { name:"Forgot Password", href:"/forgot-password" }
    ]

    const pathname = usePathname();

    return(
        <>
        <div className="border-solid border-2 rounded-sm border-black p-5 min-h-12 my-3 flex justify-around">

            {
                navLinks.map((link)=>{
                    const isActive = pathname.startsWith(link.href);
                    
                    return(
                        <Link 
                            href={link.href} 
                            key={link.name}
                            className={isActive?"font-bold text-lg":"font-mono"}
                        >
                            {link.name}
                        </Link>
                    )
                })
            }

        </div>

        <div className="my-4 text-center">You are currently on {pathname}</div>

        {children}
        </>)
    ;
}