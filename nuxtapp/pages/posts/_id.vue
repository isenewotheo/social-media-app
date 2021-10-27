<template>
    <div class="post-page">
        <template v-if="postExist">
            <Post
                :showFullPost="true"
                :noStyle="true"
                :key="post._id"
                :body="post.body"
                :postID="post._id"
                :likeCount="post.likeCount"
                :date="post.date"
                :modified="post.modified"
            />
            <!-- comment -->
            <v-divider></v-divider>
            <div class="comments-wrapper">
                <div class="comments">
                    <Comment />
                    <Comment />
                </div>
            </div>
        </template>

        
        <template v-else>
            <div v-show="postLoading" class="loading loading-green loading-large"></div>
            <div v-show="!postLoading">
                <h1 style="text-align: left;">OPPs!!!</h1>
                <h2 style="text-align: left;">it seems the Post your looking for Does not Exist or It have been deleted</h2>
            </div>
        </template>
    </div>
</template>

<script>
import Post from '~/components/Post.vue';
import Comment from '~/components/Comment.vue';
import Search from '~/components/Search.vue';
export default {
    components: {Post, Comment, Search},
    data(){
        return {
            postLoading: true,
            postExist: false,
            post: [],
            _id: '',
            body: '',
            date: '',
            modified: '',
            likeCount: '',
            tags: [],
            userID: '',
            likes: [],
            comments: [],
        }
    },
    watch:{
        post(){
            this.postExist = true;
        }
    },
    mounted(){
        console.log(this.$route.params.id)
        this.fetchPost();
    },
    methods: {
        async fetchPost(){
            let id = String(this.$route.params.id);
            id = JSON.stringify(id)

            const req = await fetch("http://localhost:8080/graphql", 
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({
                        query: `{
                            getPost(id: ${id.toString()}){
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
                console.table(res.data.getPost)
                this.postLoading = false
                let data = res.data.getPost;
                if (data == null) {
                    this.postExist=false;
                }else{
                    this.post = res.data.getPost
                }
            }
        }
    },
    computed: {
        postBody(){
            let textArr = this.body.split("\n")
            let body = textArr.join(" ");
            body = body.trim()
            if (textArr.length <= 3) {
                if (body.length <= 150) {
                    this.isLongPost = false
                }
            }
            body = body.substring(0, 100)
            return body
        },
        postDate(){
            let date = new Date(parseInt(this.date));
            return date.toLocaleDateString();
        },
        postTime(){
            let date = new Date(parseInt(this.date));
            let _time = date.toLocaleTimeString();
            let x = _time.split(":")// [hr, min, sec am]
            // Add a zero to the hour if it a single digit
            if (x[0].length == 1) {
                x[0] = "0" + x[0];
            }
            let s = x.splice(2);
            s = s.toString().split(" ")[1];
            x = x.join(":");
            let time = x + " " + s;
            return time;
        },
    }
}
</script>
