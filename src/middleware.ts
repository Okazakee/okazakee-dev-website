import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('auth-token');

  // Make a POST request to /api/auth ensuring authentication token validation to access cms
  let verifiedToken;

  const response = await fetch('https://preview.okazakee.dev/api/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: token }),
  });

  if (!response.ok) {
    console.log(await response.json());
    verifiedToken = false;
  } else {
    verifiedToken = true;
  }

  if (req.nextUrl.pathname.startsWith('/login') && !verifiedToken) {
    return;
  }

  if (req.url.includes('/login') && verifiedToken) {
    return NextResponse.redirect(new URL('/cms', req.url));
  }

  if (!verifiedToken) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: ['/cms', '/login'],
};
