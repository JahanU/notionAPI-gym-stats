const express = require('express');
const cors = require('cors') // Enable Cross-origin resource sharing (Access from any IP)

const app = express();
// app.use(express.urlencoded({ extended: false })) // parses incoming requests with urlencoded payloads and is based on body-parser.

app.use(express.json()) // Returns middleware that only parses json. The options are // NEEDED for POST/PUT request
app.use(express.static('client'));
app.use(cors());
require('dotenv/config'); // Init .env file

const { addStatsRow } = require("./notion")

app.get('/', (req, res) => {
  res.send("Hello World, Landing page!");
  console.log("Hello World, Landing page!");
});

app.post('/post-gym-stats', async (req, res) => {
  console.log(req.body);

  const { exercise, weight, tagName } = req.body; // All Strings
  let tag = [{ name: tagName }]; // Tags need to be an array of objects (in our case, it will always be length = 1)

  try {
    await addStatsRow({
      exercise,
      weight,
      tags: tag
    });
    res.send(req.body);
  } catch (error) {
    res.send(error);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('starting server at..', PORT));
