import 'dotenv/config.js'
import express from 'express'
import cors from 'cors'
import { apiBaseURL, headers } from './config/index.js'
import userController from './controllers/userController.js'
import mainController from './controllers/mainControllers.js' 
import favoriteController from './controllers/favoriteController.js'

import userRouter from './routes/userRoutes.js'
import router from './routes/routes.js'

import mongoose from './connection.js'

const app = express()
const PORT = process.env.PORT || 3000


app.use(cors())
app.use(express.json())
app.use('/', router)
app.use('/user', userRouter)
app.use('/main', router)













app.listen(PORT, () => {
console.log(`server is running on on port ${PORT}`)
})