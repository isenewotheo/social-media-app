<template>
    <div class="videos">
        <h1>Friends</h1>
        <v-card>
            <v-card-title class="headline">
                <h3>Hello</h3>
            </v-card-title>
            <v-card-text class="bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt alias neque nam in excepturi! Alias beatae impedit nostrum cupiditate officiis consectetur ipsum, iure, reprehenderit provident illo molestias ipsa reiciendis deserunt?
            </v-card-text>
        </v-card>
        <Posts />
    </div>
</template>

<script>
import Posts from '~/components/Posts.vue';
export default {
    components: {Posts},
}
</script>
