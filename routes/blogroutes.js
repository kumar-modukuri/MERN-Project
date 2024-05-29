const express = require('express');
const blogcontroller = require('../controllers/blogcontroller');
const router = express.Router();

//Routing to Blogs Page
router.get('/', blogcontroller.blog_index);

//Redirecting to Blogs Page After New Blog Created
router.post('/',blogcontroller.blog_create_post);

//Routing to Create
router.get('/create',blogcontroller.blog_create_get);

//Routing to a Specific Blog with Id
router.get('/:id',blogcontroller.blog_details);

//Redirecting to Blogs Page After Deleting
router.delete('/:id',blogcontroller.blog_delete);

module.exports = router;