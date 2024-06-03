import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if(pathname.startsWith("/api/profile")){
        const isAuthenticated = false;
        if(!isAuthenticated){
            return NextResponse.redirect(new URL('/api', request.url))
        }
        
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/api/profile/:path*"],
}