// GET handlers are cached by default
// You will notice that in production built, the api will store updating
// To stop this, you need to use Segment Config option in dynamic mode
// You can also use Request object to stop caching
// You can also use dynamic functions like headers() and cookies()
// You can also use any other HTTP method other than GET


export const dynamic = "force-dynamic"; // By default it is auto which results in caching
export async function GET(){
    return Response.json({"time":new Date().toLocaleTimeString()})
}