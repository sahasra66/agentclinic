import { Hono } from 'hono';
import { createServer } from 'http';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { Home } from './pages/Home';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = new Hono();

// Load CSS file
const cssPath = join(__dirname, 'styles', 'global.css');
let cssContent = '';
try {
  cssContent = readFileSync(cssPath, 'utf-8');
  console.log('✓ Loaded CSS from:', cssPath);
} catch (err) {
  console.warn('Warning: Could not load global.css from', cssPath, err);
}

app.get('/', (c) => {
  return c.html(Home());
});

app.get('/styles/global.css', (c) => {
  return c.text(cssContent, {
    headers: { 'Content-Type': 'text/css; charset=UTF-8' },
  });
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
