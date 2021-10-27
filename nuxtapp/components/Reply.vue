<template>
    <div class="comment">
        <!-- <v-divider></v-divider> -->
        <div class="post-header">
            <div class="profile-link">
                <!-- <div class="avatar"></div> -->
                <img src="../assets/profile-pic.jpg" class="avatar" alt="user">
                <div style="display: flex; flex-direction: column;">
                    <div class="username">@dummy</div>
                    <div class="post-meta">
                        <div class="post-date">{{'postDate'}}</div>
                        <div class="post-time">{{'postTime'}}</div>
                    </div>
                </div>
            </div>
        </div>
        <v-divider></v-divider>
        this is a comment
        <br>
        Lorem ipsum dolor sit,dantium nemo porro quae nesciunt est quam asperiores id tempora voluptas enim quod!
        <v-divider></v-divider>
        <div class="post-footer">
            <Like />
        </div>
        <!-- <v-divider></v-divider> -->
    </div>
</template>

<script>
import Like from '~/components/svgs/Like.vue'
export default {
    components: {Like}
}
</script>