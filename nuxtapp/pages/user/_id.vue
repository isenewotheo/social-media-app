<template>
  <div class="profile">
      <div class="profile-header">
        <img src="~/assets/profile-pic.jpg" class="cover-photo" alt="">
        <img src="~/assets/f.jpg" class="profile-picture" alt="">
        <div class="profile-username">theophilus oludare</div>
        <div class="bio">
          <h3 class="profile-h3 flex">
            <div class="value">bio:</div>
            <div
              class="arrow arrow-small" 
              :class="{'arrow-up' : bioOpened, 'arrow-down': !bioOpened}"  @click="bioOpened = !bioOpened">
            </div>
          </h3>
          <p v-show="bioOpened">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique velit odit saepe culpa perferendis, deleniti blanditiis dolores itaque libero nihil reiciendis voluptates nesciunt consequuntur, cupiditate omnis dolore officiis dolorem aliquam?
          </p>
        </div>
        <div class="follow">
          <v-btn class="dark green--text mx-5">follow</v-btn>
        </div>
      </div>
      
      <Posts />
  </div>
</template>

<script>
import Posts from '~/components/Posts.vue';
export default {
  components: {Posts},
  data() {
    return {
      bioOpened: false
    }
  },
  methods: {
  },
}
</script>