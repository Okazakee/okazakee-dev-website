export const jwtSecretLoader = () => {
    const secret = process.env.JWT_SECRET_KEY;

    if (!secret || secret.length === 0) {
      throw new Error('ENV JWT_SECRET_KEY IS NOT SET!');
    }

    return secret;
  };

export default jwtSecretLoader;