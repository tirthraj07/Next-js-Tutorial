export default function productLayout( { children }:{
    children: React.ReactNode
} ){

    return(
        <>
        
            {children}

            <div style={{
                padding:"10px",
                minHeight:"10vh",
                color:"black",
                letterSpacing:"2px",
                backgroundColor:"aliceblue"
            }}>
                <p style={{fontSize:"1.5rem"}}>Featured Products: &lt;NESTED LAYOUT&gt;</p>
                <div style={{display:"flex",justifyContent:"space-around"}}>
                    <div style={{border:"1px solid black",padding:"10px"}}>Product 1</div>
                    <div style={{border:"1px solid black",padding:"10px"}}>Product 2</div>
                    <div style={{border:"1px solid black",padding:"10px"}}>Product 3</div>
                </div>
            </div>

        </>

    );

}