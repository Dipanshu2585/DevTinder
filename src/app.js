const express = require('express');

const app = express();

app.use((req,res)=>{
    res.send("hello form the server");
});

app.listen(3000, ()=>{
    console.log("server is listeningg succesfully on port 3000");
}
);