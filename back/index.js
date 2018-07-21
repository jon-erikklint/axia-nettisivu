const http = require('http')
const express = require('express')
const app = express()
//const bodyParser = require('body-parser')
const cors = require('cors')
//const mongoose = require('mongoose')

const config = require('./utils/config')
//const getAuthorizationToken = require('./utils/middleware')

//mongoose.connect(config.mongoUrl)
//mongoose.Promise = global.Promise

app.use(express.static('build'))
app.use(cors())
//app.use(bodyParser.json())

//app.use(getAuthorizationToken)

//app.use('/api/blogs', blogsRouter)

const server = http.createServer(app)

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})

/*server.on('close', () => {
  mongoose.connection.close()
})*/

module.exports = {
  app, server
}