import { NextApiRequest, NextApiResponse } from 'next';
import { jwtVerify, SignJWT } from 'jose';

export const getJwtSecretKey = () => {
  const secret = process.env.JWT_SECRET_KEY;

  if (!secret || secret.length === 0) {
    throw new Error('ENV JWT_SECRET_KEY IS NOT SET!');
  }
  console.log('tutto ok');
  return secret;
};

export const verifyAuth = async (token) => {
  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(getJwtSecretKey())
    );
    return verified.payload;
  } catch (error) {
    console.log('token', token);
    throw Error('Your token has expired.');
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed!' });
    return;
  }

  const { token } = req.body;

  if (!token) {
    res.status(400).json({ error: 'Token is required!' });
    return;
  }

  try {
    const payload = await verifyAuth(token);
    res.status(200).json({ payload });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}
