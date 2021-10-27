<template>
    <div class="create-post">
        <v-alert type="success" border="left" v-if="error">
          <div class="headline">Posted</div>
        </v-alert>
        <v-alert type="error" border="left" v-if="error" dismissible>
          <div class="headline">Error</div>
          <div class="subtitle">There was an error posting</div>
        </v-alert>
        <form @submit.prevent="post">
            <div class="grow-wrap">
                <textarea name="body" v-model="postBody" class="post-body-input" placeholder="Write Your Post Here"></textarea>
            </div>
            <br>

            <!-- add tag to the post -->
            <button class="add-tag" @click.prevent="modalOpened = !modalOpened">
              Tag Friends <span style="font-weight: 650; font-size: 1.4rem;">+</span>
            </button>
            <!-- tagged user list -->
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
            <Modal v-show="modalOpened" @closeModal="modalOpened = !modalOpened">
              <span slot="modal-header">tag friends</span>
              <div slot="modal-body">
                <SelectFriends 
                  :selectedFriendsProp="selectedFriends"
                  @friendSelected="friendSelected"
                  @removeFriend="removeFriend"
                />
              </div>
            </Modal>


            <div class="flex" style="margin-top: 20px;" >
                <div id="visibility">
                     <div class="selected-visibility-wrapper">
                         Who can see Your Post 
                         <div v-if="global">
                            <svg class="visibility-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm160 215.5v6.93c0 5.87-3.32 11.24-8.57 13.86l-15.39 7.7a15.485 15.485 0 0 1-15.53-.97l-18.21-12.14a15.52 15.52 0 0 0-13.5-1.81l-2.65.88c-9.7 3.23-13.66 14.79-7.99 23.3l13.24 19.86c2.87 4.31 7.71 6.9 12.89 6.9h8.21c8.56 0 15.5 6.94 15.5 15.5v11.34c0 3.35-1.09 6.62-3.1 9.3l-18.74 24.98c-1.42 1.9-2.39 4.1-2.83 6.43l-4.3 22.83c-.62 3.29-2.29 6.29-4.76 8.56a159.608 159.608 0 0 0-25 29.16l-13.03 19.55a27.756 27.756 0 0 1-23.09 12.36c-10.51 0-20.12-5.94-24.82-15.34a78.902 78.902 0 0 1-8.33-35.29V367.5c0-8.56-6.94-15.5-15.5-15.5h-25.88c-14.49 0-28.38-5.76-38.63-16a54.659 54.659 0 0 1-16-38.63v-14.06c0-17.19 8.1-33.38 21.85-43.7l27.58-20.69a54.663 54.663 0 0 1 32.78-10.93h.89c8.48 0 16.85 1.97 24.43 5.77l14.72 7.36c3.68 1.84 7.93 2.14 11.83.84l47.31-15.77c6.33-2.11 10.6-8.03 10.6-14.7 0-8.56-6.94-15.5-15.5-15.5h-10.09c-4.11 0-8.05-1.63-10.96-4.54l-6.92-6.92a15.493 15.493 0 0 0-10.96-4.54H199.5c-8.56 0-15.5-6.94-15.5-15.5v-4.4c0-7.11 4.84-13.31 11.74-15.04l14.45-3.61c3.74-.94 7-3.23 9.14-6.44l8.08-12.11c2.87-4.31 7.71-6.9 12.89-6.9h24.21c8.56 0 15.5-6.94 15.5-15.5v-21.7C359.23 71.63 422.86 131.02 441.93 208H423.5c-8.56 0-15.5 6.94-15.5 15.5z"/></svg>
                         </div>
                         <div v-else-if="friends">
                            <svg class="visibility-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"/></svg>
                         </div>
                         <div v-else-if="me">
                            <svg class="visibility-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/></svg>
                         </div>
                         <div 
                          class="arrow arrow-small" 
                          :class="{'arrow-up' : visibilityOpened, 'arrow-down': !visibilityOpened}" 
                          style="display: inline-block; margin-left: 10px;" 
                          @click="visibilityOpened = !visibilityOpened">

                         </div>
                         
                     </div>
                    <ul v-show='visibilityOpened' id="visibility-menu-list">
                        <li @click="toogleVisibility('global')">
                            <div class="visibility-name">EveryOne</div>
                            <svg class="visibility-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm160 215.5v6.93c0 5.87-3.32 11.24-8.57 13.86l-15.39 7.7a15.485 15.485 0 0 1-15.53-.97l-18.21-12.14a15.52 15.52 0 0 0-13.5-1.81l-2.65.88c-9.7 3.23-13.66 14.79-7.99 23.3l13.24 19.86c2.87 4.31 7.71 6.9 12.89 6.9h8.21c8.56 0 15.5 6.94 15.5 15.5v11.34c0 3.35-1.09 6.62-3.1 9.3l-18.74 24.98c-1.42 1.9-2.39 4.1-2.83 6.43l-4.3 22.83c-.62 3.29-2.29 6.29-4.76 8.56a159.608 159.608 0 0 0-25 29.16l-13.03 19.55a27.756 27.756 0 0 1-23.09 12.36c-10.51 0-20.12-5.94-24.82-15.34a78.902 78.902 0 0 1-8.33-35.29V367.5c0-8.56-6.94-15.5-15.5-15.5h-25.88c-14.49 0-28.38-5.76-38.63-16a54.659 54.659 0 0 1-16-38.63v-14.06c0-17.19 8.1-33.38 21.85-43.7l27.58-20.69a54.663 54.663 0 0 1 32.78-10.93h.89c8.48 0 16.85 1.97 24.43 5.77l14.72 7.36c3.68 1.84 7.93 2.14 11.83.84l47.31-15.77c6.33-2.11 10.6-8.03 10.6-14.7 0-8.56-6.94-15.5-15.5-15.5h-10.09c-4.11 0-8.05-1.63-10.96-4.54l-6.92-6.92a15.493 15.493 0 0 0-10.96-4.54H199.5c-8.56 0-15.5-6.94-15.5-15.5v-4.4c0-7.11 4.84-13.31 11.74-15.04l14.45-3.61c3.74-.94 7-3.23 9.14-6.44l8.08-12.11c2.87-4.31 7.71-6.9 12.89-6.9h24.21c8.56 0 15.5-6.94 15.5-15.5v-21.7C359.23 71.63 422.86 131.02 441.93 208H423.5c-8.56 0-15.5 6.94-15.5 15.5z"/></svg>
                        </li>
                        <li @click="toogleVisibility('friends')">
                            <div class="visibility-name">friends</div>
                            <svg class="visibility-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"/></svg>
                        </li>
                        <li @click="toogleVisibility('me')">
                            <div class="visibility-name">only me</div>
                            <svg class="visibility-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/></svg>
                        </li>
                    </ul>
                </div>
                <button id="submit-post" v-if="posting">
                  <div class="loading loading-white"></div>
                </button>
                <button v-else id="submit-post" type="submit">Post</button>
            </div>
        </form>
    </div>
</template>

<script>
import SelectFriends from '~/components/SelectFriends';
import TinyUser from '~/components/TinyUser';
import Modal from '~/components/Modal';
export default {
  components: {
    SelectFriends,
    Modal,
    TinyUser
  },
  data() {
    return {
      visibilityOpened: false,
      modalOpened: false,
      global: true,
      me: false,
      friends: false,
      selectedFriends: [],
      tags: [],
      postBody: "",
      posting: false,
      posted: false,
      error: true,
    }
  },
  watch: {
    selectedFriends(){
      // this if condition stops the code from checking for the
      // the userID if selectedFriends is empty
      if (this.selectedFriends.length === 0) {
        console.log("empty")
        this.tags = []
        return
      }
      let tags = [];  
      console.log("workding")
      this.selectedFriends.forEach(friend => {
        tags.push(friend.userID)
      });
      this.tags = tags;
    }
  },
  methods: {
    toogleVisibility(visibility){
      this.visibilityOpened = false;
      if (visibility === "friends") {
        this.global = false
        this.me = false
        this.friends = true
      } else if(visibility === "me"){
        this.global = false
        this.me = true
        this.friends = false
      }else {
        this.global = true
        this.me = false
        this.friends = false
      }
    },
    friendSelected(args){
      this.selectedFriends = [...args]
    },
    removeFriend(args) {
      let g = this.selectedFriends.filter(friend => friend.userID !== args.userID)
      this.selectedFriends = g;
    },
    async post(){
      this.posting = true;
      let postBody = String(this.postBody);
      postBody = JSON.stringify(postBody)

      // am writing this part like this because when the tags[<string>] is converted to 
      // a string the quote("") get removed so it converted to a json and it ends are trimmed, 
      // so we have this"[<string>]" instead of this "[[<string>]]"
      let tags = JSON.stringify(Array(this.tags))
      tags = tags.substr(1, tags.length-2)


      let req = await fetch("http://localhost:8080/graphql", 
        {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify({
            query: `
            mutation {
              addPost(
                userID: "user5323",
                tags: ${tags},
                body: ${postBody}
              ){
                _id,
                userID,
                body,
                date,
                likeCount,
                tags,
                modified
              }
            }`
          })
      })
      let res = await req.json();
      this.posting = false
      if (res.hasOwnProperty("errors")) {
        console.log(res)
        console.log("there is an error")
      }else {
        console.table(res.data.addPost)
        this.posted = true;
      }
    }
  },
}
</script>

<style>
  .add-tag {
    background-color: var(--primary);
    padding-top: 0%;
    color: white;
  }
</style>