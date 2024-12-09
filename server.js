const express = require('express');
const cors = require('cors'); // Import CORS
const app = express();

app.use(cors()); // Enable CORS

// Sample post data
const postList = [
  { id: '1', titre: 'Premier post', contenu: 'détails premier post' },
  { id: '2', titre: 'Deuxième post', contenu: 'détails deuxième post' },
  { id: '3', titre: 'Troisième post', contenu: 'détails troisième post' },
];

// Define the /postList route
app.get('/postList', (req, res) => {
  res.json(postList);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
