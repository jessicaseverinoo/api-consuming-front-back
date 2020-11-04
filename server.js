const cors = require('cors');
const express = require('express');
const app = express();
const axios = require('axios');

app.use(cors());

app.get('/', async (req, res) => {

  try {
    // response é a resposta do axios, mas é retirado o data de dentro do response
    // const response = await axios('https://jsonplaceholder.typicode.com/users');
    const { data } = await axios('https://jsonplaceholder.typicode.com/users');

    return res.json(data);
  } catch (error) {
    console.log(`error: ${error}`);
  }
});

app.listen('4567');
