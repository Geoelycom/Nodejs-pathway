// Get friend with Id

const model = require('../Models/friends.model');
function postFriend(req, res) {
  if (!req.body.name){
   return res.status(400).json({
      error: 'Missing name property'
    })
  }
  const newFriend = {
    name: req.body.name,
    id: model.length
  }
model.push(newFriend);

res.json(newFriend)
}

function getFriends(req, res) {
  res.json(model)
  }

 

 // exmple would be www.webme.com/friends/12
//{:/12} == params
function getIndividualFriend(req, res) {
  const friendsId =  Number(req.params.friendId);
  const friend = model[friendsId];
  if (friend){
    res.json(friend)
  } else {
    res.status(404).json({
      error: 'Friend does not exist'
    })
  }
  
}

module.exports = {
  postFriend,
  getIndividualFriend,
  getFriends
}