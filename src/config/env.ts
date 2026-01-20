import 'dotenv/config';

function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: Number(getEnv('PORT')),

  jwtSecret: getEnv('JWT_SECRET'),

  services: {
    orders: getEnv('ORDERS_SERVICE_URL'),
    auth: getEnv('AUTH_SERVICE_URL')
  }
};