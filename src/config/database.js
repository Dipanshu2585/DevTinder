const mongoose = require('mongoose');

const ConnectDB = async() =>{
   await mongoose.connect('mongodb+srv://dipanshunishad2002:HdevwjjRmaFRfRDx@cluster0.2k6je72.mongodb.net/devTinder');
};

module.exports = ConnectDB;


