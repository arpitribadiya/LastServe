// Created by Jay Kania (B00923785)
// Updated By Arpit Ribadiya (B00932018)

const express = require("express");
const postsRouter = express.Router();

const postsControlller = require("../controller/postsController");

// get posts from all restaurants
postsRouter.get("/", postsControlller.getAllPosts);

// get posts from specific restaurant
postsRouter.post("/", postsControlller.getPostsByResID);
postsRouter.post("/createPost", postsControlller.post_create_post);
postsRouter.put("/updatePost", postsControlller.put_update_post);
postsRouter.get("/getActivePosts/:restId", postsControlller.get_active_post);
postsRouter.get("/getPastPosts/:restId", postsControlller.get_past_post);
postsRouter.get("/getPostById/:id", postsControlller.get_post_by_id);

module.exports = postsRouter;
