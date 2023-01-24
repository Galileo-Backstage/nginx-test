const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 5000;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hi');
});

app.get('/errors/4xx', async (req, res) => {
  res.status(401).send('4xx error');
});

app.get('/errors/5xx', async (req, res) => {
  res.status(500).send('5xx error');
});

app.listen(PORT, (err) => {
  console.log(`Listening on port ${PORT}`)
});
