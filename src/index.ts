import { Hono } from 'hono';
import { Home } from './pages/Home';

const app = new Hono();

app.get('/', (c) => {
  return c.html(Home());
});

const port = 3000;
console.log(`Server listening on http://localhost:${port}`);

export default {
  port,
  fetch: app.fetch,
};
