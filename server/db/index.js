const pg = require('pg');

require('dotenv').config();

//connect to postgres local db with credentials
const client = new pg.Client('postgres://localhost/gql_ninja');

client.connect(err => {
  if (err) {
    console.error('error: ', err);
  } else {
    console.log('CONNECTED to local postgres db');
  }
});

// const insertBook = () => {
//   client
//     .query(
//       'INSERT INTO messages (message_text, scheduled_time, user_id) values ($1, $2, (select user_id from users where phone_number = $3 AND verified_status = true))',
//       [messageText, scheduledTime, phoneNumber]
//     )
//     .then(() => console.log('Message created successfully'))
//     .catch(err => console.log('Message not created: ' + err));
// };

const insertAuthor = (authorName, age) => {
  client
    .query('INSERT INTO authors (name, age) values ($1, $2)', [authorName, age])
    .then(() => console.log('New author inserted'))
    .catch(err => console.log('ERROR:' + err));
};

module.exports.insertAuthor = insertAuthor;
