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


  // Magic 8 Ball responses array
const magic8BallResponses = [
    "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely",
    "You may rely on it", "As I see it yes", "Most likely", "Outlook good",
    "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later",
    "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
    "Don't count on it", "My reply is no", "My sources say no",
    "Outlook not so good", "Very doubtful"
  ];
  
  // Magic 8 Ball route
  app.get('/magic/:question', (req, res) => {
    const question = req.params.question.replace(/%20/g, ' ');
    const randomResponse = magic8BallResponses[Math.floor(Math.random() * magic8BallResponses.length)];
    res.send(`<h1>Question: ${question}</h1><h1>Response: ${randomResponse}</h1>`);
  });


  
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
