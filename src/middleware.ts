import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {

  const token = req.cookies.get("auth-token");

  // Make a POST request to /api/auth ensuring authentication token validation to access cms
  let verifiedToken;
  let errorToDisplay;

  try {
    const response = await fetch('http://localhost:3000/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token: token })
    });

    if (!response.ok) {
      errorToDisplay = await response.json();
    }

    verifiedToken = await response.json();

  } catch (error) {
    console.error('There was a problem with the fetch operation:', errorToDisplay.error);
  }

  if (req.nextUrl.pathname.startsWith('/login') && !verifiedToken) {
    return
  }

  if (req.url.includes('/login') && verifiedToken) {
    return NextResponse.redirect(new URL('/cms', req.url))
  }

  if (!verifiedToken) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}

export const config = {
  matcher: ['/cms', '/login'],
}