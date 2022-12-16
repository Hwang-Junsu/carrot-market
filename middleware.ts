import {NextRequest, NextFetchEvent, userAgent} from "next/server";
import {NextResponse} from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
    if (req.nextUrl.pathname.startsWith("/")) {
        // const ua = userAgent(req);
        // if (ua?.isBot) {
        //     return NextResponse.redirect(`${req.nextUrl.origin}/enter`);
        // }
        // if (req.url.includes("/api")) {
        //     if (
        //         !req.url.includes("/enter") &&
        //         !req.cookies.get("carrotsession")
        //     ) {
        //         return NextResponse.redirect(`${req.nextUrl.origin}/enter`);
        //     }
        // }
    }
    // if (req.nextUrl.pathname.startsWith("/chats")) {
    //     console.log("chats ONLY middleware");
    // }
    return NextResponse.next();
}
