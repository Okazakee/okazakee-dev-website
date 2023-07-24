import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { jwtVerify, SignJWT } from 'jose';

// Account existance check
export const userVerify = async (email, password) => {
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db('Users');
    const usersCollection = db.collection('Administrators');

    // Perform the check to see if the user exists in the collection
    const user = await usersCollection.findOne({ email: email });

    // Close the database connection
    client.close();

    if (user) {
      // User exists
      return true;
    } else {
      // User does not exist
      return false;
    }
  } catch (error) {
    console.error('Error verifying user:', error);
    throw error;
  }
};

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
    const payload = await verifyAuth(token);
    res.status(200).json({ payload, verifiedToken: true });
  } catch (error) {
    res
      .status(401)
      .json({ error: 'Your token has expired!', verifiedToken: false });
  }
}
