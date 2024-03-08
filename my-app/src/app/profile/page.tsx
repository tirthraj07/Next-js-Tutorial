"use client"

export default function Profile(){

    const err = false;

    if(err === true){
        throw new Error('Error Occurred. Contact Server Administrator')
    }

    return(
        <>
            <h1>My Profile</h1>
        </>

    );
}