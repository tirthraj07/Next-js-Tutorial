export default function authLayout({children}:{
    children:React.ReactNode
}){
    return(
    <>
        {children}

        <div className="my-5">
            <p>This is a Route Group Layout</p>
            <p>This is only available for /login and /signup</p>
            <p>This is not seen in /forgot-password</p>
            <p>This is achieved by using <strong>Route Groups</strong> studied in lesson 13</p>
        </div>
    </>
    );
}