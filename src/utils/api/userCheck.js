import { MongoClient } from 'mongodb';
import sha256 from 'crypto-js/sha256';

const userCheck = async (username, password) => {
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

export default userCheck;