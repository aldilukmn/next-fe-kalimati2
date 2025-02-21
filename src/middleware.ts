import { NextRequest, NextResponse } from 'next/server';
import { jwtDecode } from 'jwt-decode';
import { RoleType } from './app/utils/response/default-response';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('auth_token')?.value;
  const { pathname } = req.nextUrl;
  if (!token) {
    if (pathname.startsWith('/admin')) {
      return NextResponse.redirect(new URL('/login', req.url));
    };
    return NextResponse.next();
  };
  const splitBearer = token.startsWith('Bearer ') ? token.split(' ')[1] : token;
  if (!splitBearer) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  const decoded: RoleType = jwtDecode(splitBearer);
  const userTime: number = Number(decoded.exp) * 1000;
  const currentTime: number = new Date().getTime();

  if (currentTime > userTime) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  if (pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/admin', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/login'],
}