import { NextApiRequest, NextApiResponse } from 'next';
import jwtVerifier from '../../utils/api/jwtVerifier';

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
    const payload = await jwtVerifier(token);
    res.status(200).json({ payload, verifiedToken: true });
  } catch (error) {
    res
      .status(401)
      .json({ error: 'Your token has expired!', verifiedToken: false });
  }
}