import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Profile"
}

export default function Profile(){

    const err = true;

    if(err === true){
        throw new Error('Error Occurred. Contact Server Administrator')
    }

    return(
        <>
            <h1>My Profile</h1>
        </>

    );
}