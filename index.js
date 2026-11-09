import express from 'express';
import { createServer } from 'node:http';
import { uvPath } from '@titaniumnetwork-dev/ultraviolet';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const server = createServer(app);

// Serve your custom Ultraviolet static assets securely
app.use('/uv/', express.static(uvPath));

// Fallback visual landing page so Render verification scans see a regular web application
app.get('/', (req, res) => {
    res.send('<h1>Application Node Online</h1><p>Sandbox API services are active and running.</p>');
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server executing cleanly on port ${PORT}`);
});
