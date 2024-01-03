"# blogAPI" 
A REST API for a blog using NodeJS, Express, and MongoDB

API ENDPOINTS

POSTS ROUTE
GET /api/posts -------------------(gets all published posts)
POST /api/posts -----------------(create a new post)
PUT /api/posts/:postId ----------(update a post)
DELETE /api/posts/:postId -------(delete a post)
GET /api/posts/:postId ----------(get a single post)

AUTHENTICATION ROUTE
POST /api/auth/signup ----------(sign up a user)
POST /api/auth/login -----------(login a user)

AUTHOR ROUTE
GET /api/author ----------------(get all posts-drafts and published- written by the author)
