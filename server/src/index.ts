import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Resolve path to the React/Vite client dist folder
// Since this script is in `src/` or `dist/`, `../../client/dist` gets us to the right place
const clientDistPath = path.resolve(__dirname, '../../client/dist');

// Serve the static files from the client dist directory
app.use(express.static(clientDistPath));

// Fallback to index.html for Single Page Applications (SPA) routing
app.use((req, res) => {
  res.sendFile(path.join(clientDistPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`eightyfive.no main website running at http://localhost:${port}`);
});
