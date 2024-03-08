export default function Card(
    {children}:{
        children:React.ReactNode
    }
){

    return (

        <>

            <div className="border border-black rounded-sm p-5 bg-slate-50 relative w-full h-full">
                {children}
            </div>
        
        </>

    );

}