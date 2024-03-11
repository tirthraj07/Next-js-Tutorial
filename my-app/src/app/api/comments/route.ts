import { comments } from "./comments"

export async function GET() {
    return Response.json(comments);
}