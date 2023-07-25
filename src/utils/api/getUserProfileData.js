import { MongoClient } from "mongodb";

export const getUserProfileData = async (username) => {
    try {
        const client = await MongoClient.connect(process.env.MONGODB_URI);
        const db = client.db('Users');
        const usersCollection = db.collection('Administrators');

        // Perform the check to see if the user exists in the collection
        const user = await usersCollection.findOne({ username: username });

        // Close the database connection
        client.close();

        const profileData = {
            username: username,
            imgUrl: user.userImage,
            //email etch when needed
        }

        return profileData

      } catch (error) {
        console.error('Error verifying user:', error);
        return error;
      }
}

export default getUserProfileData;