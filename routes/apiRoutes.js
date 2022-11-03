const fs = require("fs");
const path = require('path');

// module.exports = (app) => {
// app.get('/api/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, '../db/db.json'))
// })
// };

module.exports = (app) => {
  app.get('/api/notes', (req, res) => {
    fs.readFile(path.join(__dirname, '../db/db.json'),
      (err, data) => {
        if (err) throw err
        res.json(JSON.parse(data))
      }
    )
  })
  app.post('/api/notes', (req, res) => {
    console.log(req.body)

  }
  )
};