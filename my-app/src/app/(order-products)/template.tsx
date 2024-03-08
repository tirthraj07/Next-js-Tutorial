"use client"

import { useState } from "react"

export default function ecomLayout({children}:{
    children:React.ReactNode
}){

    const [search, setSearch] = useState("");

    return(
        <>
            {/* If we use useState here, the DOM will regenerate and won't remember the state if we move to different page */}

            <div className="block m-4">
                <label className="m-4">Search</label>
                <input type="text" className="p-3 border border-black" onChange={(e)=>{setSearch(e.target.value)}} value={search} placeholder="Search" />

            </div>

            <div className="w-10/12 min-h-12 border-solid border-2 border-black rounded-2xl m-8 bg-slate-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3">

                <div className="p-3 min-h-12">
                    {children}
                </div>

            </div>

        </>
    )


}