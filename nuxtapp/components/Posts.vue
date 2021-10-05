<template>
    <div class="posts">
        <Post />
        <Post />
        <Post />
    </div>
</template>

<script>
import Post from './Post.vue'
export default {
    name: "Posts",
    components: {Post}
}
</script>
