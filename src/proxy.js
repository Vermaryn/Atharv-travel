import { NextResponse } from "next/server";

export  function proxy(req) {
  const auth = req.cookies.get("admin-auth");
  const path = req.nextUrl.pathname;
  console.log("PATH", path);
  console.log("AUTH", auth);
  if(!auth && path !== "/admin/login"){
    return NextResponse.redirect(
      new URL("/admin/login", req.url)
    );
  }
  if(auth && path === "/admin/login"){
      return NextResponse.redirect(
      new URL("/admin", req.url)
    );
  }
    
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/admin/:path*'], 
};