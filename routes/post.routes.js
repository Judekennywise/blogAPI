//import expree
const express = require('express');

//import Post controller
const postController = require("./../controller/post.controller");

//import authetication middleware
const authController = require('./../auth/auth')

//create router 
const router = express.Router();

//API endpoint structure
/**
     * @openapi
     * '/api/posts':
     *  post:
     *     tags:
     *     - Post Controller
     *     summary: Create a post
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - title
     *              - description
     *              - tags
     *              - body
     *            properties:
     *              title:
     *                type: string
     *                default: Post title
     *              description:
     *                type: string
     *                default: Post description
     *              tags:
     *                type: string
     *                default: Post tags
     *              body:
     *                type: string
     *                default: Post body
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
router.post('/', authController.authenticate, postController.createAPost);
/**
     * @openapi
     * '/api/posts':
     *  get:
     *     tags:
     *     - Post Controller
     *     summary: Get all published posts
     *     parameters:
     *     responses:
     *      200:
     *        description: Fetched Successfully
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
router.get('/', postController.getAllPublishedPost);

/**
     * @openapi
     * '/api/posts/{postId}':
     *  get:
     *     tags:
     *     - Post Controller
     *     summary: Get a published posts by id
     *     parameters:
     *      - name: postId
     *        in: path
     *        description: the id of the post
     *        required: true
     *     responses:
     *      200:
     *        description: Fetched Successfully
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
router.get("/:postId", postController.getASinglePublishedPost);

/**
     * @openapi
     * '/api/posts/{postId}':
     *  put:
     *     tags:
     *     - Post Controller
     *     summary: Update post by id
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *
     *            properties:
     *              description:
     *                type: string
     *                default: ''
     *              title:
     *                type: string
     *                default: ''
     *              body:
     *                type: string
     *                default: ''
     *     parameters:
*           - name: postId
*             in: path
*             description: the id of the post
*             required: true
     *     responses:
     *      200:
     *        description: Modified
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
router.put("/:postId", authController.authenticate, postController.updateAPost); //protected route
/** DELETE Methods */
    /**
     * @openapi
     * '/api/posts/{postId}':
     *  delete:
     *     tags:
     *     - Post Controller
     *     summary: Delete user by Id
     *     parameters:
     *      - name: postId
     *        in: path
     *        description: The unique Id of the post
     *        required: true
     *     responses:
     *      200:
     *        description: Removed
     *      400:
     *        description: Bad request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
router.delete("/:postId", authController.authenticate, postController.deleteAPost); //protected route
module.exports = router;