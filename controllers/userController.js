const fs = require('fs');
const filePath = require('../database.json');
const { readData, writeData } = require('../utils/file.js');

async function createUser(req, res){
    try {
        const data = await readData();

        //determine the last user id
        const lastUser = data.users[data.users.length - 1];

        //what happens if there is no users?  
        //ternary operator
        const nextId = lastUser ? lastUser.id + 1 : 1;

        console.log(req.body);

        //create a new user object 
        const newUser = {
            id: nextId,
            username: req.body.username,
            first_name: req.body.first_name,
            email: req.body.email,
        }

        //push the new data to memory object
        data.users.push(newUser);

        //commits data by writing it to file.
        await writeData(data);

    } catch (error) {
        res.status(500).json(`Internal Server Error: ${error}`);
    }
}

module.exports = {createUser};