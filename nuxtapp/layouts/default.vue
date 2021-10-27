<template>
<v-app>
  <Header :sidenav-state=sidenavState @toogle="toogleSidenav" />
  <Sidenav :sidenav-state=sidenavState />
  <main>
    <div class="main">
      <nuxt />
    </div>
  </main>
</v-app>
</template>

<script>
import {mapState} from "vuex";
import "vuetify/dist/vuetify.css"
import Header from '~/components/Header.vue';
import Sidenav from '~/components/Sidenav.vue';

export default {
  components: {
    Header,
    Sidenav,
  },
  data(){
    return {
      sidenavState: false,
    }
  },
  computed: {
    ...mapState(["count"]),
  },
  mounted() {
    this.adjustSidenav();
    window.addEventListener("resize", this.adjustSidenav);
    this.$vuetify.theme.dark = false;
  },
  methods: {
      toogleSidenav() {
        this.sidenavState = !this.sidenavState;
      },
      adjustSidenav(){
        if (window.innerWidth > 700) {
          this.sidenavState = true;
        }else {
          this.sidenavState = false;
        }
      }
  },

  unMouted() {
    window.removeEventListener("resize", this.adjustSidenav)
  }
}
</script>