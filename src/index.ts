import { Hono } from 'hono';
import { createServer } from 'http';
import { Home } from './pages/Home';

const app = new Hono();

app.get('/', (c) => {
  return c.html(Home());
});

const port = 3000;
const server = createServer(async (req, res) => {
  try {
    const response = await app.fetch(
      new Request(`http://localhost:${port}${req.url || '/'}`, {
        method: req.method,
        headers: Object.fromEntries(
          Object.entries(req.headers).map(([key, value]) => [key, String(value)])
        ),
      })
    );
    const headers: Record<string, string> = {};
    response.headers.forEach((value, key) => {
      headers[key] = value;
    });
    res.writeHead(response.status, headers);
    res.end(await response.text());
  } catch (err: unknown) {
    console.error(err);
    res.writeHead(500);
    res.end('Internal Server Error');
  }
});

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
