const { planets } = require('../../Models/planets.models')

function getAllPlanets(req, res){
return res.status(200).json(planets)
}


module.exports = {
  getAllPlanets,
}