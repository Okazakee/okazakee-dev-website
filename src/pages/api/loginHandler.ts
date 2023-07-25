import { NextApiRequest, NextApiResponse } from 'next';
import userCheck from '../../utils/userCheck';
import jwtSigner from '../../utils/jwtSigner';

// RESPONSES HANDLER
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Check if req is POST, if not res error
    if (req.method !== 'POST') {
      return res
        .status(405)
        .json({ error: 'Method not allowed!', verifiedToken: false });
    }

    // Get user data from req body
    const userData = req.body;
    const { username, password, rememberMe } = userData;

    if (!username || !password) {
      return res
        .status(400)
        .json({ error: 'Missing username or password.' });
    }

    try {
      const payload = await userCheck(username, password);

      if (payload) {
        try {
          // Sign jwt
          const newToken = await jwtSigner(username, rememberMe);
          // Set the JWT token as a cookie in the response
          res.setHeader('Set-Cookie', `jwtToken=${newToken}; Path=/;`);
          return res.status(200).json({ success: true, message: 'Login successful' });
        } catch (error) {
          // Response error generating jwt
          return res.status(400).json({ error: 'Something went wrong while signing the new JWT token' });
        }
      } else {
        return res.status(401).json({ error: `User does not exist or password doesn't match`, verifiedUser: false });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }