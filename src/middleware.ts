import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server'
import { jwtDecode } from 'jwt-decode';
import { RoleType } from './app/utils/response/default-response';

const isProtectedRoute = (pathname: string) => pathname.startsWith('/admin');

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname.startsWith('/admin')) {
    const token = req.cookies.get('auth_token');
    if (!token) {
      return Response.redirect(new URL('/login', req.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/login', '/admin/:path*'],
}