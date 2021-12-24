const express = require('express');
const cors = require('cors') // Enable Cross-origin resource sharing (Access from any IP)

const app = express();
app.use(express.json()) // Returns middleware that only parses json. //  NEEDED for POST/PUT request
app.use(express.static('client'));
app.use(cors());
require('dotenv/config'); // Init .env file

const { addStatsRow } = require("./notion")
const { filterInputs } = require("./helperFunctions")

app.use('/', (req, res, next) => {
  if (req.body.notionCode !== process.env.NOTION_CODE.toString()) {
    const error = new Error('Notion Code is incorrect');
    res.status(404);
    return next(error);
  }
  next();
});

app.get('/', (req, res) => {
  console.log("Hello World, Landing page!");
  res.send("Hello World, Landing page!");
});

app.post('/post-gym-stats', async (req, res, next) => {
  // { exercise: 'Bench Press', weight: '90', tag: 'Push' }
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


// Global error handler
app.use((err, req, res, next) => {
  // console.log('Recieved Error: ', err);
  res.status(res.statusCode || 500);
  res.json({
    error: {
      message: err.message,
      code: res.statusCode
    },
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log('starting server at..', PORT));

