import Fastify from 'fastify';
// ESM + TypeScript → importa sempre .js, mesmo sendo .ts
import { env } from './config/env.js'; // “vou compilar isso para env.js depois”

const app = Fastify({ logger: true });

app.get('/health', async () => {
  return { status: 'ok', env: env.nodeEnv };
});

app.listen({ port: env.port, host: '0.0.0.0' })
  .then(() => console.log(`API Gateway rodando na porta ${env.port}`))
  .catch(err => {
    app.log.error(err);
    process.exit(1);
  });