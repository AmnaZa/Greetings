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

// Tip Calculator route
app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = (req.params.total);
    const tipPercentage = (req.params.tipPercentage);
    const tipAmount = (total * tipPercentage) / 100;
    res.send(`Your tip will be: ${tipAmount}`);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
