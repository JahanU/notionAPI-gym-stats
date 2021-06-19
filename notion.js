// Use import for ES6 modules and require for commonJS.
const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_KEY })
const DATABASE_ID = process.env.NOTION_DATABASE_ID
// Ids of columns within the database
const NOTION_TAGS_ID = 'ihHP'; //  Tags: { id: 'ihHP', type: 'multi_select', multi_select: [Object] },
const NOTION_DATES_ID = 'sLg@'; // Dates: { id: 'sLg@', type: 'date', date: {} },
const NOTION_WEIGHT_ID = '|=UC'; //  'Weight (1S * 10R)': { id: '|=UC', type: 'rich_text', rich_text: {} },
const NOTION_EXERCISE_ID = 'title'; //  Exercises: { id: 'title', type: 'title', title: {} }

// Notion Page = Page or database entry, as that is also a page!
function addStatsRow({ exercise, weight, tag }) {

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
        [NOTION_DATES_ID]: {
          date: {
            "start": new Date().toISOString()
          }
        },
        [NOTION_TAGS_ID]: {
          multi_select: tag // If we select 1 item, it becomes an object and not array. Must pass in array tho!
        }
      },
    });
    console.log('Row added!');
  } catch (error) {
    console.log('func addStatsRow - Recieved error: ', error.body);
  }
}

// let tagEx = {
//   name: 'Push',
// };
// addStatsRow({ exercise: "LEG DAY", weight: "100KG", tags: [tagEx] })


module.exports = { // Export these functions to use in index.js
  addStatsRow,
}