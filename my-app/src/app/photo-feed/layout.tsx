export default function PageFeedLayout(props:{
    children:React.ReactNode,
    modal:React.ReactNode
}){

    return(
        <>
            {props.modal}
            <div className="my-5">
                {props.children}
            </div>
        </>
    )

}