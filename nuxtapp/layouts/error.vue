<template>
  <v-app light color="white">
    <div style="background-color: white;">
      kdfj
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione eligendi recusandae voluptas corrupti incidunt aut facere at impedit quaerat harum, tempora cupiditate totam excepturi dicta sint. Id, expedita saepe.
    <v-card>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquam laudantium non nemo vel, a excepturi sed enim quia similique sit, natus facere mollitia dolores soluta ipsa quidem, dolore culpa?
    </v-card>
    <v-alert type="success" icon="mdi-firework" border="left" loading elevation="5" dismissible>
      hello world
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sapiente quasi tenetur sit quo reiciendis amet soluta necessitatibus velit ipsam! Tempore quidem alias repellat in, doloremque error at. Similique, aut.
    </v-alert>
    <v-btn elevation="24" color="error">click</v-btn>
    <!-- <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink> -->
    </div>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  mounted(){
    this.$vuetify.theme.dark = false;
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
