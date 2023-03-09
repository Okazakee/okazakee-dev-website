import { useEffect } from 'react';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  // Take cookie value as token if present
  const token = req.cookies.get('auth-token');

  // Make a POST request to /api/auth ensuring authentication token validation to access cms
  const response = await fetch(process.env.API_ENDPOINT + '/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: token }),
  });

  // Collect response valuable data
  const responseData = await response.json();
  const { verifiedToken } = responseData;

  // Error log
  if (!response.ok) {
    console.log(responseData);
  }

  // When user loads /login and is not verified, do nothing
  if (req.nextUrl.pathname.startsWith('/login') && !verifiedToken) {
    return;
  }

  // When user loads /login IS verified, redirect to /cms
  if (req.url.includes('/login') && verifiedToken) {
    return NextResponse.redirect(new URL('/cms', req.url));
  }

  // When user loads /cms and is not verified, redirect to /login
  if (!verifiedToken) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: ['/cms', '/login'],
};
