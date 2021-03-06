const launches = new Map();

let latestFlightNumber = 100;
const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rockect: "Explorer ISI",
  launchDate: new Date("November 23, 2022"),
  target: "kepler-442 b",
  customer: ["Nasa", "spaceX"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function existLaunchWithId(launchId) {
return launches.has(launchId)
}


function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      success: true,
      upcoming: true,
      customer: ["Nasa", "spaceX"],
      flightNumber: latestFlightNumber,
    })
  );
}

function abortLaunchById(launchId) {
const aborted = launches.get(launchId);
aborted.success = false;
aborted.upcoming = false;
return aborted;
}


module.exports = {
  existLaunchWithId,
  getAllLaunches,
  addNewLaunch,
  abortLaunchById
};
