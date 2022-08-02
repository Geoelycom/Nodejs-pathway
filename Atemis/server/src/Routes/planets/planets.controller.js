const { getAllPlanets } = require('../../Models/planets.models')

function httpGetAllPlanets(req, res){
return res.status(200).json(getAllPlanets())
}


module.exports = {
  httpGetAllPlanets,
}