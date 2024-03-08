"use client"

export default function ErrorBoundary({error,reset}:{error:Error, reset:()=> void}){

    return(
        <>
            <h1>Error</h1>
            <h4>{error.message}</h4>
            <div><button onClick={reset}>Retry</button></div>
        
        </> 

    )


}