import Card from "@/components/card"
import Link from "next/link"

export default function DefaultNotifications(){
    return(
        <>
            <Card>
                <h5>Notifications</h5>
                <div className="mt-3"><Link href={"/complex-dashboard/archived"} className="text-blue-500 underline underline-offset-8">Archived</Link></div>
            </Card>
        </>
    )
}