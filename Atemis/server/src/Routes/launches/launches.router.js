const express = require("express");
// const { httpAbortLaunch } = require("../../../../client/src/hooks/requests")
const {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch,
} = require("../launches/launches.controller");

const launchesRouter = express.Router();

launchesRouter.get("/launches", httpGetAllLaunches);
launchesRouter.post("/launches", httpAddNewLaunch);
launchesRouter.delete("/launches/:id", httpAbortLaunch);

module.exports = launchesRouter;
