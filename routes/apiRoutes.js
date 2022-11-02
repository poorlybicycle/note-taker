const fs = require("fs");
const path = require('path');

// module.exports = (app) => {
// app.get('/api/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, '../db/db.json'))
// })
// };

module.exports = (app) => {
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
  })};