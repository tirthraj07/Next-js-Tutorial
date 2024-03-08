export default function ecomLayout({children}:{
    children:React.ReactNode
}){

    return(
        <>

            <div className="w-10/12 min-h-12 border-solid border-2 border-black rounded-2xl m-8 bg-slate-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3">

                <div className="p-3 min-h-12">
                    {children}
                </div>

            </div>

        </>
    )


}