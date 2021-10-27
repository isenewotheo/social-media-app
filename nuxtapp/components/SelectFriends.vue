<template>
    <div class="select-friends">
        <div>
            <div style="margin: auto; width: 230px;" >
                <SearchForm placeholder='Search For Friends' />
            </div>
            <div v-show="selectedFriends.length != 0" class="tagged-users-list">
              click user to remove them from tag list
              <br/>
              <TinyUser 
                v-for="friend in selectedFriends" 
                :key="friend.userID"
                :userID="friend.userID" 
                :username="friend.username"
                @clicked="removeFriend"
              />
            </div>
            <div class="friends-list" >
                <Friend 
                    v-for="friend in friendList" 
                    :key="friend.userID" 
                    :username="friend.username" 
                    :userID="friend.userID" 
                    :avatarURL="friend.avatarURL" 
                    :mutualFriendsCount="friend.mutualFriendsCount" 
                    @clicked="addFriend" 
                />
            </div>
        </div>
    </div>
</template>

<script>
import SearchForm from '~/components/SearchForm.vue'
import Friend from '~/components/Friend.vue'
import TinyUser from '~/components/TinyUser';
export default {
    data(){
        return {
            selectedFriends: [],
            friendList: [
                {
                    username: "dummy",
                    userID: "user8939",
                    avatarURL: "/_nuxt/assets/f.jpg",
                    mutualFriendsCount: "34",
                },
                {
                    username: "dummy1",
                    userID: "user8932",
                    avatarURL: "/_nuxt/assets/profile-pic.jpg",
                    mutualFriendsCount: "4",
                },
                {
                    username: "dummy2",
                    userID: "user8935",
                    avatarURL: "/_nuxt/assets/f.jpg",
                    mutualFriendsCount: "3",
                },
            ]
        }
    },
    props: {
        selectedFriendsProp: {
            type: Array,
            required: true
        }
    },
    watch: {
        selectedFriendsProp() {
            this.selectedFriends = this.selectedFriendsProp
        }
    },
    components: {
        SearchForm,
        Friend,
        TinyUser
    },
    methods: {
        searchFriend(){
            prompt("searching")
        },
        removeFriend(args){
            this.$emit("removeFriend", args)
        },
        addFriend(args){
            let userID = args[0].user.userID
            let username = args[0].user.username

            let userSelected = false

            this.selectedFriends.forEach(user => {
                if (user.userID === userID) {
                    userSelected = true
                }
            });
            
            if (!userSelected) {
                this.selectedFriends.push({userID, username})
                this.$emit("friendSelected", this.selectedFriends)
                return
            }
            console.log("user already selected")
        }
    },
}
</script>
<style scoped>
    .tagged-users-list{
        margin: 5px 10px;
        background-color: inherit;
    }
</style>