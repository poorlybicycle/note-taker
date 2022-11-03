const fs = require('fs');
const path = require('path');

// module.exports = (app) => {
// app.get('/api/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, '../db/db.json'))
// })
// };

//get request for notes
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
    console.info(`${req.method} request was received to add a note`);
    fs.readFile(path.join(__dirname, './db/db.json'), (err, data) => {
      if (err) {
        throw err;
      }
      else {
        const parsedData = JSON.parse(data)
        parsedData.push({
          title: req.body.title,
          text: req.body.text
        })
        const stringify = JSON.stringify(parsedData);
        fs.writeFile(path.join(__dirname, './db/db.json'), stringify, (err) => {
          if (err) {
            throw err;
          }
          else {
            res.send('File written succesfully!')
          }
        })
      }
    });
  }
  )
};