const express = require('express');
const app = express()
const friendsRouter = require('./Routes/friends.router')
const PORT = 3000

app.use((req, res, next) => {
  const start = Date.now()
  next()
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`);
})

app.use(express.json())


// Mount routers after initaliazation.. mounted relative to the roots of our friends hence simplifying our match request routes
app.use('/friends', friendsRouter);

app.listen(PORT, () => {
  console.log(`app is Listening on port ${PORT}..`)
})