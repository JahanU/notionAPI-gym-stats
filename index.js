const express = require('express');
const cors = require('cors') // Enable Cross-origin resource sharing (Access from any IP)

const app = express();
// app.use(express.urlencoded({ extended: false })) // parses incoming requests with urlencoded payloads and is based on body-parser.

app.use(express.json()) // Returns middleware that only parses json. //  NEEDED for POST/PUT request
app.use(express.static('client'));
app.use(cors());
require('dotenv/config'); // Init .env file

const { addStatsRow } = require("./notion")
const { filterInputs } = require("./helperFunctions")

app.get('/', (req, res) => {
  res.send("Hello World, Landing page!");
  console.log("Hello World, Landing page!");
});

app.post('/post-gym-stats', async (req, res) => {
  // { exercise: 'Bench Press', weight: '90', tagName: 'Push' }
  let { exercise, weight, tag } = req.body; // All Strings 
  [exercise, weight, tag] = filterInputs(exercise, weight, tag);

  try {
    await addStatsRow({
      exercise,
      weight,
      tag
    });
    res.send(req.body);
  } catch (error) {
    res.send(error);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('starting server at..', PORT));
