export default function ecomLayout({children}:{
    children:React.ReactNode
}){
    
    {/* If we use it useState here, it won't change even if the page goes into different page under same layout */}


    {/* <div className="block m-4">
        <label className="m-4">Search</label>
        <input type="text" className="p-3 border border-black" onChange={(e)=>{setSearch(e.target.value)}} value={search} placeholder="Search" />

    </div> */}
    


    return(
        <>


            {children}

        </>
    )


}