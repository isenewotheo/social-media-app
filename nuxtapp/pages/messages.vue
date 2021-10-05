<template>
    <div class="videos">
        <h1>messages</h1>
        <UserMessage />
        <UserMessage />
        <UserMessage />
        <UserMessage />
        <!-- <Posts /> -->
    </div>
</template>

<script>
// import Posts from '~/components/Posts.vue';
import UserMessage from '~/components/UserMessage.vue';
export default {
    components: {
        // Posts,
        UserMessage
    },
}
</script>
