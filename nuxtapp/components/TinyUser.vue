<template>
    <div ref="sldk" @click="clicked" :id="userID" class="tiny-user">
        @{{username}}
    </div>
</template>

<script>
export default {
    props: {
        username: String,
        userID: String,
    },
    methods: {
        clicked(){
            this.$emit('clicked', {username: this.username, userID: this.userID })
        }
    }
}
</script>