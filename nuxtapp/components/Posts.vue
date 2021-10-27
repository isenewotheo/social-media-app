<template>
    <div class="posts">
        <v-btn elevation="20" color="primary" small @click="fetchPosts">Get Posts</v-btn>
        
        <Post 
            v-for="post in posts" 
            :key="post._id"
            :body="post.body"
            :postID="post._id"
            :likeCount="post.likeCount"
            :date="post.date"
            :modified="post.modified"
        />
    </div>
</template>

<script>
import Post from './Post.vue'
export default {
    name: "Posts",
    data(){
        return {
            posts: [],
        }
    },
    components: {Post},
    // mounted(){
    //     this.fetchPosts();
    // }
    watch: {
        posts(){
            console.table(this.posts)
        }
    },
    methods: {
        async fetchPosts(){
            console.log("clicked")
            const req = await fetch("http://localhost:8080/graphql", 
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({
                        query: `{
                            getPosts{
                                _id,
                                body,
                                userID
                                date,
                                modified,
                                likeCount
                            }
                        }`
                    })
                })
            const res = await  req.json();
            if (res.hasOwnProperty("errors")) {
                console.log(res)
                console.log("there is an error")
            }else {
                console.table(res.data.getPosts)
                // this.posted = true;
                this.posts = res.data.getPosts
            }
        }
    }
}
</script>
