const express = require('express');
const friendsController = require('../Controllers/friends.controllers');


const friendsRouter = express.Router()

// send a Post and GET request to the server using the POST and GET middleware in express
friendsRouter.post('/', friendsController.postFriend)
friendsRouter.get('/', friendsController.getFriends)
friendsRouter.get('/:friendId', friendsController.getIndividualFriend)

module.exports = friendsRouter;