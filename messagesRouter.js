const express = require("express");
const messagesController = require("./messagesController"); 

const router = express.Router();

router.get('/', messagesController.getMessages);
router.get('/:id', messagesController.getMessage);
router.post('/', messagesController.createMessage);
router.delete('/:id', messagesController.deleteMessage);

module.exports=router;