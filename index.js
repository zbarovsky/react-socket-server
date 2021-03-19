const express = require('express')
const app = express()
const socketIo = require('socket.io')
const http = require('http')
const server = http.createServer(app)
const io = socketIo(server)

const port = process.env.PORT || 4001

const home = require('./routes/home')
app.use(home)

io.on('connection', (socket) => {
    console.log('a new user has entered the arena')
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg)
        console.log('message ', msg)
    })
    socket.on('disconnect', () => {
        console.log('fatality, user')
    })
})

server.listen(port, () => {
    console.log(`with my toes on ${port}, it's such a lovely view`)
})

