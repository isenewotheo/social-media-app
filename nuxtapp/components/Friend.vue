<template>
    <div @click="clicked" :id="userID" class="friend">
        <img :src="avatarURL" class="avatar" alt="i" />
        <div class="friend-info">
            <div class="username">@{{username}}</div>
            <div class="mutual-friendship">{{mutualFriendsCount}} mutual friends</div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        username: {
            type: String,
            required: true
        },
        userID: {
            type: String,
            required: true
        },
        mutualFriendsCount: {
            type: String,
            required: true
        },
        avatarURL: {
            type: String,
            required: true
        },
    },
    methods: {
        clicked(){
            this.$emit("clicked", [{
                // userID: this.userID ,
                // username: this.username ,
                user: this.$props
            }])
        }
    }
}
</script>