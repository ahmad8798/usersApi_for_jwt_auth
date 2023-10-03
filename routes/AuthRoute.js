import express from 'express'
import { login, signup } from '../controllers/AuthController.js'

const Authrouter = express.Router()

Authrouter.route('/signup').post(signup)
Authrouter.route('/login').post(login)

export default Authrouter