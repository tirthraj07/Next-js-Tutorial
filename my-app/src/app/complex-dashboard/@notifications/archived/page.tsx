import Card from "@/components/card"
import Link from "next/link"

export default function ArchivedNotifications(){
    return(
        <>
            <Card>
                <h5>Notifications</h5>
                <div className="mt-3"><Link href={"/complex-dashboard"} className="text-blue-500 underline underline-offset-8">Default</Link></div>
            </Card>
        </>
    )
}