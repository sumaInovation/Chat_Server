const express = require('express')
const ws = require('ws')

const app = express()
const httpServer = app.listen(process.env.PORT)

const wsServer = new ws.Server({ noServer: true })

httpServer.on('upgrade', (req, socket, head) => {
  wsServer.handleUpgrade(req, socket, head, (ws) => {
    wsServer.emit('connection', ws, req)
  })
})