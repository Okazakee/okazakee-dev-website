import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  // Take cookie value as token if present
  const token = req.cookies.get('jwtToken');

  if (token) {

    // Make a POST request to /api/jwtVerify ensuring authentication token validation to access cms
    const response = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT + '/jwtVerify', {
      method: 'POST',
      headers: {
        'X-Request-Source': 'middleware', // Set a custom header to identify the source
      },
      body: token.value,
    });

      // Get the verifiedToken value directly from the response
      const { verifiedToken } = await response.json();

      // When user loads /login and is not verified, do nothing
      if (req.nextUrl.pathname.startsWith('/login') && !verifiedToken || !token) {
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

  } else {
      //redirect
      if (req.nextUrl.pathname.startsWith('/login') && !token) {
        return;
      } else {
        return NextResponse.redirect(new URL('/login', req.url));
      }
  }
}

export const config = {
  matcher: ['/cms', '/login'],
};