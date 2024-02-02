const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 5000;                  //Save the port number where your server will be listening

//Idiomatic expression in express to route and respond to a client request
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('index.html', {root: __dirname});      //server responds by sending the index.html file t>
                                                        //the .sendFile method needs the absolute path to >
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at>
    console.log(`Now listening on port ${port}`); 
});
