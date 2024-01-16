//import express
const express = require('express');

//import user controller
const userController = require("./../controller/user.controller");

//import authetication middleware
const authController = require('./../auth/auth')

//create router
const router = express.Router();

//API endpoint for an author
router.get('/author', authController.authenticate, userController.getAllPosts);

//API endpoint for signup and login
/** POST Methods */
    /**
     * @openapi
     * '/api/auth/signup':
     *  post:
     *     tags:
     *     - User Controller
     *     summary: Create a user
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - firstname
     *              - lastname
     *              - email
     *              - password
     *            properties:
     *              firstname:
     *                type: string
     *                default: John
     *              lastname:
     *                type: string
     *                default: Doe
     *              email:
     *                type: string
     *                default: johndoe@mail.com
     *              password:
     *                type: string
     *                default: johnDoe20!@
     *     responses:
     *      201:
     *        description: Created
     *      409:
     *        description: Conflict
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
router.post("/auth/signup", authController.signup)

/**
     * @openapi
     * '/api/auth/login':
     *  post:
     *     tags:
     *     - User Controller
     *     summary: Login as a user
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - email
     *              - password
     *            properties:
     *              email:
     *                type: string
     *                default: johndoe
     *              password:
     *                type: string
     *                default: johnDoe20!@
     *     responses:
     *      201:
     *        description: Created
     *      409:
     *        description: Conflict
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
router.post("/auth/login", authController.login)

module.exports = router;