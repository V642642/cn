import { NextResponse } from "next/server";


export default function middleware (req) {
  let verify = req.cookies.get('Token');
  let url = req.url;

  
  if(!verify && url.includes('/admin-dashboard')){
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_LOCAL_URL}/login`)
  }

  if(verify && url.includes(`/login`)){
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_LOCAL_URL}/admin-dashboard`)
  }


} 