const Message = require('./messageModel');

const getMessages = async (req, res) => {
    try {
        const messages = await Message.find();
        if(messages.length > 0) res.status(200).json(messages);
        else res.status(404).json({error: 'There are no messages'});

    } catch(error) {
        res.status(500).json({error: error.message});
    }
}

const getMessage = async (req, res) => {
    const id = req.params.id;

    try {
        const message = await Message.findById(id);
        if(message) res.status(200).json(message);
        else res.status(404).json({error: 'The message doesn\'t exists'});

    } catch(error) {
        res.status(500).json({error: error.message});
    }
}

const createMessage = async (req, res) => {
    try {
        if(!req.body.text) {
            res.status(401).json({error: 'Invalid request'});
        } else {
            const messageText = req.body.text;

            const newMessage = new Message({
                text: messageText,
                timestamp: new Date()
            });

            await newMessage.save();
            res.status(201).json(newMessage);
        }
    } catch(error) {
        res.status(500).json({error: error.message});
    }
}

const deleteMessage = async (req, res) => {
    const id = req.params.id;

    try {
        await Message.findByIdAndDelete(id);
        res.status(203).end();
    } catch(error) {
        res.status(500).json({error: error.message});
    }
}

module.exports.getMessages= getMessages;
module.exports.getMessage= getMessage;
module.exports.createMessage= createMessage;
module.exports.deleteMessage= deleteMessage;