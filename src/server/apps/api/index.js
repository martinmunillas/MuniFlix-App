const express = require('express')
require('dotenv').config()

const routes = require('./network/routes')
const errorHandler = require('./utils/middlewares/errorHandler')
const connect = require('./db')

const router = express.Router()
connect()

//Error Handler
router.use(errorHandler)

//parsers
router.use(express.json())

//Videos
router.use('/mediaSrc', express.static(process.env.MEDIAFILES))

routes(router)

export default router