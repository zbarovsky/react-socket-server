const express = require('express')
const socketIo = require('socket.io')
const http = require('http')
const cors = require('cors')
const port = process.env.PORT || 4001
const home = require('./routes/home')

const app = express()
app.use(cors())
app.use(home)

const server = http.createServer(app)
const io = socketIo(server, {
    cors: {
        origin: '*'
    }
})

// TODO CREATE CHAT APP FUNCTIONALITY FOR APP WITH COMMENTED OUT CODE

let interval

io.on('connection', (socket) => {
    console.log('a new user has entered the arena')
    if(interval) {
        clearInterval(interval)
    }
    interval = setInterval(() => getApiAndEmit(socket), 1000)
    // socket.on('chat message', (msg) => {
    //     io.emit('chat message', msg)
    //     console.log('message ', msg)
    // })
    socket.on('disconnect', () => {
        console.log('fatality, user')
        clearInterval(interval)
    })
})

const getApiAndEmit = socket => {
    const response = new Date()
    socket.emit("FromAPI", response)
}

server.listen(port, () => {
    console.log(`with my toes on ${port}, it's such a lovely view`)
})

