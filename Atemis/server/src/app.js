const express = require('express');
const path = require('path');
const morgan = require('morgan');
const planetsRouter = require('../../server/src/Routes/planets/planets.router')
const launchesRouter = require('../../server/src/Routes/launches/launches.router')
const cors = require('cors');


const app = express();
app.use(express.json())
// app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.static('../server/public'));



app.use(cors({
  origin: 'http://localhost:3000',
}))

app.use(morgan('combined'));
app.use(planetsRouter)
app.use(launchesRouter)
app.get('/*', (req, res) => {
  //res.sendFile('../server/public/index.html')
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

module.exports = app;