import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { jwtDecode } from 'jwt-decode';
import { RoleType } from './app/utils/response/default-response';

const LOGIN_PATH = '/login';
const ADMIN_PATH = '/admin';

// Fungsi untuk mengecek apakah route membutuhkan autentikasi
const isProtectedRoute = (pathname: string) => pathname.startsWith(ADMIN_PATH);

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get('auth_token')?.value;

  // Jika tidak ada token dan route butuh proteksi, redirect ke login
  if (!token) {
    return isProtectedRoute(pathname)
      ? NextResponse.redirect(new URL(LOGIN_PATH, req.url))
      : NextResponse.next();
  }

  // Coba decode token, jika gagal maka redirect ke login
  let decoded: RoleType;
  try {
    const splitBearer = token.startsWith('Bearer ') ? token.split(' ')[1] : token;
    decoded = jwtDecode(splitBearer);
  } catch (error) {
    return NextResponse.redirect(new URL(LOGIN_PATH, req.url));
  }

  // Cek apakah token sudah expired
  const userTime = Number(decoded.exp) * 1000;
  const currentTime = Date.now();
  if (currentTime > userTime) {
    return NextResponse.redirect(new URL(LOGIN_PATH, req.url));
  }

  // Jika user sudah login dan mencoba masuk ke /login, redirect ke /admin
  if (pathname.startsWith(LOGIN_PATH)) {
    return NextResponse.redirect(new URL(ADMIN_PATH, req.url));
  }

  return NextResponse.next();
}

// Middleware hanya akan berjalan di route tertentu
export const config = {
  matcher: [LOGIN_PATH, `${ADMIN_PATH}/:path*`],
};
