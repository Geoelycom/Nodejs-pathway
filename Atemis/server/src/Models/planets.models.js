const { parse } = require("csv-parse");
const fs = require("fs");


const HabitablePlanets = [];

function isHabitablePlanets(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}
// kepler_data.csv

async function loadPlanetsData(){
  return new Promise((resolve, reject) => {
    fs.createReadStream("../server/data/kepler_data.csv")
    .pipe(
      parse({
        comment: "#",
        columns: true,
      })
    )
    .on("data", (data) => {
      if (isHabitablePlanets(data)) {
        HabitablePlanets.push(data);
      }
    })
    .on("error", (err) => {
      reject(err);
    })
  
    .on("end", () => {
      console.log(`${HabitablePlanets.length} habitable planets found!`);
      resolve()
    });
  })
}


module.exports = {
  loadPlanetsData,
  planets: HabitablePlanets
};