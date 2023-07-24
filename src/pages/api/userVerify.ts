import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { SignJWT } from 'jose';

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

    if (user && user.password === password) {
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

  // Get user data from req body
  const userData = req.body;
  const {username, password} = userData;

  if (username && password) {
    try {
        const payload = await userVerify(username, password);
        if (payload) {
            try {
                // sign jwt
                const newToken = await JWTsign(username);
                res.status(200).json({newToken});
            } catch (error) {
                // response error generating jwt
                res.status(400).json({error: 'Something went wrong while signing the new JWT token'});
            }
        }
      } catch (error) {
        res
          .status(401)
          .json({ error: 'Invalid user data!', verifiedUser: false });
      }
  } else {
    res
        .status(400)
        .json({ error: 'Invalid request: Missing username or password.' });
    return;
  }
}