import Navbar from "@/components/navbar";
import LineChart from "./line-chart";

function BarGraph(){
    return (
        <>
            <h1>Bar Graph</h1>
        </>
    );
}

export default function Dashboard(){
    return (
        <>
            <Navbar></Navbar>


            <h1>Dashboard</h1>

            <LineChart></LineChart>

            <BarGraph></BarGraph>

        </>
    );
}