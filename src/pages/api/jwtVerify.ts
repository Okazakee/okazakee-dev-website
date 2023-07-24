import { NextApiRequest, NextApiResponse } from 'next';
import { jwtVerify } from 'jose';

// JWT SECRET LOADER
export const getJwtSecretKey = () => {
  const secret = process.env.JWT_SECRET_KEY;

  if (!secret || secret.length === 0) {
    throw new Error('ENV JWT_SECRET_KEY IS NOT SET!');
  }

  return secret;
};

// AUTH VERIFIER
export const tokenVerify = async (token) => {
  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(getJwtSecretKey())
    );

    console.log("Token is valid!");

    return verified.payload;
  } catch (error) {
    throw Error();
  }
};

// RESPONSES HANDLER
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check if req is POST, if not res error
  if (req.method !== 'POST') {
    res
      .status(405)
      .json({ error: 'Method not allowed!', verifiedToken: false });
    return;
  }

  const token = req.body;

  // Check if token exists
  if (!token) {
    res.status(400).json({ error: 'No JWT token found! Redirecting...', verifiedToken: false });
    return;
  }

  // Check token validity, if it is not valid res error
  try {
    const payload = await tokenVerify(token);
    res.status(200).json({ payload, verifiedToken: true });
  } catch (error) {
    res
      .status(401)
      .json({ error: 'Your token has expired!', verifiedToken: false });
  }
}

// ITER
/*
user hits /cms or /login
middleware hits /jwtVerify with jwt cookie, if present check validity, if not redirect, if validity ok redirect /cms, if validity not ok redirect /login
token is sent in POST to /jwtVerify
pass it to tokenVerify()
*/