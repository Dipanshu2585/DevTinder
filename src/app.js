const express = require('express');
const ConnectDB = require('./config/database');
const app = express();
const User = require("./modules/User");

app.post("/signup", async (req,res)=>{
    const user = new User({
        firstName : "Dipanshu",
        lastName : "Nishad",
        age : 22,
        email : "dipanshu@gmail"
    });

    await user.save();
    res.send("user added successfully");
});


ConnectDB().then(()=>{
    console.log("connection succesfully established");
    app.listen(3000, ()=>{
    console.log("server is listeningg succesfully on port 3000");
}
);
})
.catch((err)=>{
    console.error("connection cannot be esatablished");

});

