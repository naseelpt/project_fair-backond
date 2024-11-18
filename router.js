// import express
const express = require('express')

//import usercontroller
const userController = require('./controllers/userController')

// add controller
const projectController = require ('./controllers/projectController')

// import jwtmiddleware
const jwtMiddleware = require('./middleware/jwtMiddleware')

const multerConfig = require('./middleware/multerMiddleware')

// instance router
const router = new express.Router()

// register
router.post('/register',userController.register)

// login
router.post('/login',userController.login)

// add project
router.post('/add-project',jwtMiddleware,multerConfig.single('projectimage'),projectController.addProjectController)

// all project
router.get('/all-project',jwtMiddleware,projectController.getAllProjectController)

// home project
router.get('/home-project',projectController.getHomeProjectController)

// user project
router.get('/user-project',jwtMiddleware,projectController.getUserProjectController)

// remove user project
router.delete('/remove-userproject/:id',jwtMiddleware,projectController.removeUserProjectController)

// update user project
router.put('/update-userProject/:id',jwtMiddleware,multerConfig.single('projectimage'),projectController.editProjectController)

// update user profile
router.put('/update-userprofile',jwtMiddleware,multerConfig.single("profile"),userController.editProfileController)


module.exports = router