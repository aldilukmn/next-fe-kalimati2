import { NextRequest } from 'next/server';

const protectedRoutes = ['/dashboard'];

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  // const isProtectedRoute = protectedRoutes.includes(path);
  const token = req.cookies.get('auth_token');
  console.log(token);
}