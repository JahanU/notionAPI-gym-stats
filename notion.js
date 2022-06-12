// Use import for ES6 modules and require for commonJS.
const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_KEY })
const DATABASE_ID = process.env.NOTION_DATABASE_ID

// Ids of columns within the database
const NOTION_EXERCISE_ID = 'title'; // Exercises: { id: 'title', type: 'title', title: {} }
const NOTION_WEIGHT_ID = '|=UC';    // 'Weight': { id: '|=UC', type: 'rich_text', rich_text: {} },
const NOTION_REPS_ID = 'INpJ';      // Reps: { id: 'INpJ', name: 'Reps', type: 'number', number: [Object] },
const NOTION_COMMENTS_ID = 'WF<d';  // Comments: { id: 'WF<d', name: 'Comments', type: 'rich_text', rich_text: {} },
const NOTION_TAGS_ID = 'ihHP';      // Tags: { id: 'ihHP', type: 'multi_select', multi_select: [Object] },
const NOTION_DATES_ID = 'sLg@';     // Dates: { id: 'sLg@', type: 'date', date: {} },


// Notion Page = Page or database entry, as that is also a page!
function addStatsRow({ exercise, weight, reps, tag, comment }) {

  console.log(exercise, weight, reps, tag, comment)

  try {
    notion.pages.create({
      parent: { database_id: DATABASE_ID },

      properties: {
        [NOTION_EXERCISE_ID]: { // In order to set object keys from variables you need to wrap them in brackets.
          title: [ // Type
            {
              "text": {
                "content": exercise
              }
            }
          ]
        },
        [NOTION_WEIGHT_ID]: {
          rich_text: [
            {
              "text": {
                "content": weight
              }
            }
          ]
        },

        [NOTION_COMMENTS_ID]: {
          rich_text: [
            {
              "text": {
                "content": comment
              }
            }
          ]
        },

        // [NOTION_REPS_ID]: {
        //   number: reps
        // },

        [NOTION_REPS_ID]: {
          number: parseInt(reps),
        },

        [NOTION_TAGS_ID]: {
          multi_select: tag // If we select 1 item, it becomes an object and not array. Must pass in array tho!
        },
        [NOTION_DATES_ID]: {
          date: {
            "start": (function () {
              const date = new Date();
              date.setHours(date.getHours() + 1);
              return date.toISOString();
            })()
          }
        },
      },
    }).then((res) => {
      console.log('Row added!');
    })
  } catch (error) {
    console.log('func addStatsRow - Recieved error: ', error.body);
  }
}

module.exports = { // Export these functions to use in index.js
  addStatsRow,
}