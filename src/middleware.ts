import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server'
import { jwtDecode } from 'jwt-decode';
import { RoleType } from './app/utils/response/default-response';

const isProtectedRoute = (pathname: string) => pathname.startsWith('/admin');

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname.startsWith('/admin')) {
    const token = req.cookies.get('auth_token')?.value;
      if (!token) {
        return isProtectedRoute(pathname) ?
        NextResponse.redirect(new URL('/login', req.url))
        : NextResponse.next();
      };
    const splitBearer = token.startsWith('Bearer ') ? token.split(' ')[1] : token;
    const decoded: RoleType = jwtDecode(splitBearer);
    const userTime: number = Number(decoded.exp) * 1000;
    const currentTime: number = new Date().getTime();

    if (currentTime > userTime) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  if (pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/admin', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/login', '/admin/:path*'],
}