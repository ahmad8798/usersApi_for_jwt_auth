import express from 'express'
import { getUsers } from '../controllers/UsersController.js'

const userRouter  = express.Router()

userRouter.route('/users').get(getUsers)

export default userRouter