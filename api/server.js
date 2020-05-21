const express = require("express");

const Players = require("../players/playersModel.js");

const server = express();

server.use(express.json());



server.get("/players", (req, res) => {
  Players.getAll()
    .then(players => {
      res.status(200).json(players);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.post('/players', (req, res) => {

    Players.add(req.body)
    .then(player => {
       
            res.status(201).json(player);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "There was an error while saving the player to the database"})
        })
})

server.delete("/players/:id", (req, res) => {

    Players.remove(req.params.id)
  .then(player => {
    res.status(200).json(player);
  })
  .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        error: "The player could not be removed" 
      });
  
  });
});


server.put('/players/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    Players.findById(id)
    .then(player => {
      if (player) {
        Players.update(changes, id)
        .then(updatedPlayer=> {
          res.status(200).json(updatedPlayer);
        });
      } else {
        res.status(404).json({ message: 'Could not find player with given id' });
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to update player' });
    });
  });
  


 server.get("/players/:id", (req, res) => {
    const { id } = req.params;
    Players.findById(id)
      .then(player => {
       
           res.status(200).json(player);
        }
      )
      .catch(error => {
        // log error to database
        console.log(error);
        res.status(500).json({
          error:"The player could not be retrieved."
        });
      });
  });
module.exports = server;
