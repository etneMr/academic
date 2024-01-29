import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(req: NextRequest){
    return NextResponse.redirect(new URL('/chat', req.url))
}

export const config = {
    matcher: ['/students/:path*', '/teachers/:path*']
}