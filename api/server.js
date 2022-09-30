const express = require("express");

const server = express();

const accountRouter = require('./accounts/accounts-router')

server.use(express.json());

server.use('/api/accounts', accountRouter)

server.get("*", (req, res) => {
    res.status(404).json({ message: "not found" })
  })

module.exports = server;
