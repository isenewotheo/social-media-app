<template>
    <div :class="{'post' : !noStyle }">
        <div class="post-header">
            <div class="profile-link">
                <!-- <div class="avatar"></div> -->
                <img src="../assets/profile-pic.jpg" class="avatar" alt="user">
                <div style="display: flex; flex-direction: column;">
                    <div class="username">@dummy</div>
                    <div class="post-meta">
                        <div class="post-date">{{postDate}}</div>
                        <div class="post-time">{{postTime}}</div>
                    </div>
                </div>
            </div>
            <div class="launch-post-menu">...</div>
            <!-- <div class="post-menu">...</div> -->
        </div>
        <v-divider></v-divider>
        <div v-if="showFullPost">
            <pre class="post-body">{{body}}</pre>
        </div>
        <div v-else>
            <pre v-if="isLongPost" class="post-body"><nuxt-link class="post-body-link" :to=postURL>{{postBody}}</nuxt-link>
    <span class="read-more" @click="isLongPost = false">read more...</span></pre>
            <pre v-else class="post-body"><nuxt-link class="post-body-link" :to=postURL>{{body}}</nuxt-link></pre>
        </div>
        
        <v-divider></v-divider>
        <div class="post-footer">
            <Like />
            <Comments />
            <Share />
        </div>
    </div>
</template>

<script>
import Like from '~/components/svgs/Like.vue'
import Share from '~/components/svgs/Share.vue'
import Comments from '~/components/svgs/Comments.vue'
export default {
    name: "Post",
    props: {
        showFullPost: {
            type: Boolean,
            default: false
        },
        noStyle: {
            type: Boolean,
            default: false
        },
        body: {
            type: String,
            required: true
        },
        postID: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        modified: {
            type: String,
            required: true
        },
        likeCount: {
            type: Number,
            required: true
        },
    },
    components: {
        Like,
        Share,
        Comments,
    },
    data(){
        return {
            isLongPost: true,
            postURL: `/posts/${this.postID}`,
        }
    },
    mounted(){
        if (this.showFullPost) {
            this.isLongPost = true;
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
            let d = new Date(parseInt(this.date));
            return d.toLocaleDateString();
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