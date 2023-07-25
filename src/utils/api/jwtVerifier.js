import { jwtVerify } from 'jose';
import { jwtSecretLoader } from './jwtSecretLoader';

export const jwtVerifier = async (token) => {
    try {
      const verified = await jwtVerify(
        token,
        new TextEncoder().encode(jwtSecretLoader())
      );

      return verified.payload;
    } catch (error) {
      throw Error();
    }
  };

export default jwtVerifier;