export default function PrivateFolder(){

    return (
        <>
            <h1>You won't be able to access this folder via routing</h1>

            Private Folders can be helpful in 
            1. Separating the UI logic from routing logic
            2. For consistently organizing internal files across the project
            3. For sorting and grouping files in code editors
            4. For avoiding potential naming conflicts with future Next.js file conventions

            If you do want to include an underscore in your route, you can prefix it using %5F

        </>
    );

}