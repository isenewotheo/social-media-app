const Post = require("../models/post");

class QueryPosts {
    // adds a new post to the database////////////////////////////////////////////
    async addPost(details){
        let post = new Post({...details});
        try {
            const newPost = await post.save();
            return newPost;
        } catch (error) {
            return error;
        }    
    }

    // gets all posts/////////////////////////////////////////////////
    async getPosts(){
        try {
            let posts = await Post.find();
            return posts
        } catch (error) {
            return error
        }
    }
    
    // gets a single post/////////////////////////////////////////////////
    async getPost(id){
        try {
            let post = await Post.findOne({_id: id});
            return post._doc
        } catch (error) {
            return null;
        }
    }
}

// let q = new QueryPosts();
// q.getTagPosts('vue').then(res => console.log(res))

module.exports = QueryPosts;