export default function ComplexDashboardLayout(
    {
        children,
        notifications,
        revenue,
        users
    }
    
    :{
        children:React.ReactNode
        notifications:React.ReactNode,
        revenue:React.ReactNode,
        users:React.ReactNode
    }


){

    return (
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

        </div>
    );

}