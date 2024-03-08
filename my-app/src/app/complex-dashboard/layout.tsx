"use client"
import React, { useState } from "react";
export default function ComplexDashboardLayout(
    {
        children,
        notifications,
        revenue,
        users,
        login
    }
    
    :{
        children:React.ReactNode
        notifications:React.ReactNode,
        revenue:React.ReactNode,
        users:React.ReactNode,
        login:React.ReactNode
    }


){

    const [auth, setAuth] = useState(false);

    return auth? (
        <div>
            {children}

            <div className="grid grid-cols-2 w-3/4 m-auto mt-4 min-h-[50vh]">
                <div className="grid grid-rows-2">
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
                <div>
                    {notifications}
                </div>
            </div>


            <div className="mt-5 flex justify-center">
                <div><button onClick={()=>setAuth(false)} className="border border-black p-3 rounded-2xl hover:bg-black hover:text-slate-50 transition-all hover:shadow-slate-900 hover:shadow-sm">Log Out</button></div>
            </div>

        </div>
    ):
    (   
        <>
            
            <div className="border border-black rounded-[2rem] flex flex-col justify-center items-center gap-11 text-xl p-6 absolute w-[75%] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                {login}
                <div><button onClick={()=>setAuth(true)} className="border border-black p-3 rounded-2xl hover:bg-black hover:text-slate-50 transition-all hover:shadow-slate-900 hover:shadow-sm">Log In</button></div>
            </div>
        </>
    )

}