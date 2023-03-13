import { NextApiRequest, NextApiResponse } from 'next';
import { jwtVerify, SignJWT } from 'jose';

// JWT SECRET LOADER
export const getJwtSecretKey = () => {
  const secret = process.env.JWT_SECRET_KEY;

  if (!secret || secret.length === 0) {
    throw new Error('ENV JWT_SECRET_KEY IS NOT SET!');
  }

  return secret;
};

// AUTH VERIFIER
export const verifyAuth = async (token) => {
  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(getJwtSecretKey())
    );
    return verified.payload;
  } catch (error) {
    throw Error();
  }
};

// FORM HANDLER
export const adminCheck = async (formData) => {
  try {
    formData.email === process.env.ADMIN_EMAIL &&
    formData.password === process.env.ADMIN_PASSWORD
    return true;

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

  const { token } = req.body;

  // Check if token exists, if not res error
  if (!token) {
    res.status(400).json({ error: 'Token is required!', verifiedToken: false });
    return;
  }

  // Check token validity, if it is not valid res error
  try {
    const payload = await verifyAuth(token);
    res.status(200).json({ payload, verifiedToken: true });
  } catch (error) {
    res
      .status(401)
      .json({ error: 'Your token has expired!', verifiedToken: false });
  }
}
