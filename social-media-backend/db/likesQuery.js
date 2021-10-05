const Like = require("../models/like");

class QueryLikes {

    // gets all the Likes from a comment, post or reply///////////////////////////
    async getLikes(postID){
        try {
            let _likes = await Like.find({postID});
            let likes = [];
            Array(_likes).forEach(like => {
                likes.push(like);
            });
            return likes[0]
            // console.log(likes[0])
        } catch (error) {
            return error
        }
    }
    

    // adds a new reply to the database////////////////////////////////////////////
    async addLike(details){
        /*/
        * Likes cant be added more than once to a post 
          by a single user.
        * so verifyLike() checks if the user have already like 
          the post before.
        * if it has been liked it returns an error
        */

        let liked = false; // this is true if the post is already liked by the user

        // loop through likes and set the liked state if the userid is in the like
        let likes = await this.getLikes(details.postID);
        likes.forEach(like => {
            if (like.userID === details.userID)  liked = true;
        });
        
        try {
            if (liked) {
                throw new Error("This user has liked this post ");
            }
            let like = new Like({...details});
            const newLike = await like.save();
            return newLike;
        } catch (error) {
            return error;
        }    
    }



    // gets a single like/////////////////////////////////////////////////
    async getLike(id){
        try {
            let like = await Like.findOne({_id: id});
            like =  like._doc
            return like;
        } catch (error) {
            return error;
        }
    }

    async removeLike(id){
        try {
            let like = await Like.deleteOne({_id: id})
            return like;
        } catch (error) {
            return error
        }
    }
}

// let q = new QueryPosts();
// q.getTagPosts('vue').then(res => console.log(res))

module.exports = QueryLikes;