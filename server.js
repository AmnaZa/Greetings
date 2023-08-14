// Importing required modules
const express = require('express');
const app = express();

// Set up a port
const PORT = process.env.PORT || 3000;

// Greeting route
app.get('/greeting/:name', (req, res) => {
  const name = req.params.name;
  const greeting = `Wow! Hello there, ${name}!`;
  res.send(greeting);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
