export default function Docs( { params }:{
    params : {
        slug : string[]
    }
} ){

    if (params.slug.length == 1){
        return featurePage(params.slug[0]);
    }

    else if (params.slug.length == 2){
        return conceptPage({params});
    }


}

function featurePage( feature:string ){

    return (
        <>
            <h1>Displaying List of Concepts for {feature}</h1>
            <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>...</li>
            </ul>
        </>
    )

}


function conceptPage({params}:{
    params:{
        slug: string[]
    }
}){
    return (
        <>
            <h1>Feature {params.slug[0]}, Concept {params.slug[1]}</h1>
        </>
    );

}