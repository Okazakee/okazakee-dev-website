import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { SignJWT } from 'jose';
import sha256 from 'crypto-js/sha256';

// JWT SECRET LOADER
export const getJwtSecretKey = () => {
  const secret = process.env.JWT_SECRET_KEY;

  if (!secret || secret.length === 0) {
    throw new Error('ENV JWT_SECRET_KEY IS NOT SET!');
  }

  return secret;
};

// Account existance and data validity check
export const userVerify = async (username, password) => {
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db('Users');
    const usersCollection = db.collection('Administrators');

    // Perform the check to see if the user exists in the collection
    const user = await usersCollection.findOne({ username: username });

    // Close the database connection
    client.close();

    if (user && user.password === sha256(password).toString()) {
      // User exists, and the password matches
      return true;
    } else {
      // User does not exist or password doesn't match
      return false;
    }
  } catch (error) {
    console.error('Error verifying user:', error);
    throw error;
  }
};

export const JWTsign = async (username) => {
    const secret = await getJwtSecretKey();

    try {
    const secretKey = new TextEncoder().encode(secret);
      // Create a new JWT and set its claims (payload)
      const jwt = await new SignJWT({ username })
        .setProtectedHeader({ alg: 'HS256' }) // Use the HS256 algorithm for the signature
        .setIssuedAt() // Set the issued at time (iat) to the current time
        .setExpirationTime('2h') // Set the expiration time of the token
        .sign(secretKey); // Sign the JWT using the provided secret

      return jwt; // Return the signed JWT
    } catch (error) {
      console.error('Error signing JWT:', error);
      throw error;
    }
  };

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
    const { username, password } = userData;
  
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: 'Missing username or password.' });
    }
  
    try {
      const payload = await userVerify(username, password);
  
      if (payload) {
        try {
          // Sign jwt
          const newToken = await JWTsign(username);
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