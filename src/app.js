const express = require('express')
const app = express()
const rethink = require('./database')
const body = require('body-parser')
app.use(body());
// app.get('/', function (req, res) {
//   rethink.connect()
//     .then(conn => rethink.r.table('rooms').run(conn))
//     .then(cursor => cursor.toArray())
//     .then(result => {
//       res.send(result)
//     })

// })
app.get('/', function (req, res) {
  res.render('login.ejs')
})


app.post('/show-user', function (req, res) {
  rethink.connect()
    .then((conn) => {
      return rethink.r.table("rooms").insert({
        username: req.body.username,
        password: req.body.password
      }).run(conn)
    })
    .then(result => {
      res.redirect('/');
    })
})
app.listen(3000);
