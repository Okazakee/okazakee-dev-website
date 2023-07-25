import { SignJWT } from 'jose';
import jwtSecretLoader from '../utils/jwtSecretLoader';

const jwtSigner = async (username, rememberMe) => {
    const secret = await jwtSecretLoader();

    try {
    const secretKey = new TextEncoder().encode(secret);
        // Create a new JWT and set its claims (payload)
        const jwt = await new SignJWT({ username })
        .setProtectedHeader({ alg: 'HS256' }) // Use the HS256 algorithm for the signature
        .setIssuedAt() // Set the issued at time (iat) to the current time
        .setExpirationTime(rememberMe ? '1y' : '1d')
        .sign(secretKey); // Sign the JWT using the provided secret
console.log(jwt)
        return jwt; // Return the signed JWT
    } catch (error) {
        console.error('Error signing JWT:', error);
        throw error;
    }
};

export default jwtSigner;