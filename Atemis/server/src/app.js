const express = require('express');
const path = require('path');
const planetsRouter = require('./Routes/planets/planets.router');
const cors = require('cors');


const app = express();
app.use(express.json())
// app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.static('../server/public'))


app.use(cors({
  origin: 'http://localhost:3000',
}))
app.use(planetsRouter)
app.get('/', (req, res) => {
  //res.sendFile('../server/public/index.html')
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

module.exports = app;