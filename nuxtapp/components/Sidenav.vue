<template>
    <div ref="sidenavRef" class="sidenav">
        <div class="logo-wrapper">
            <img id="logo" alt="Vue logo" src="~/assets/logo.png">
            <h3 id="logo-text">ue chat</h3>
        </div>
        <div class="header-profile">
            <div class="profile-link">
                <img class="avatar" src="~/assets/profile-pic.jpg"/>
                <div class="username">@dummy</div>
            </div>
        </div>
        <Search />
        <ul class="sidenav-links">
            <li class="sidenav-link">
                <nuxt-link class="nxt" to="/">home</nuxt-link>
            </li>
            <li class="sidenav-link">
                <nuxt-link class="nxt" to="/friends">friends</nuxt-link>
            </li>
            <li class="sidenav-link">
                <nuxt-link class="nxt" to="/messages">messages</nuxt-link>
            </li>
            <li class="sidenav-link">
                <nuxt-link class="nxt" to="/videos">videos</nuxt-link>
            </li>
            <li class="sidenav-link">
                <nuxt-link class="nxt" to="/notifications">notifications</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
import Search from '~/components/Search.vue';
export default {
    name: "Sidenav",
    components: {
        Search
    },
    props: {
        sidenavState: {
            type: Boolean,
        }
    },
    watch: {
        sidenavState() {
            this.adjustSidenav();
        }
    },
    mounted(){
        this.adjustSidenav();
    },
    methods: {
        adjustSidenav(){
            if (this.sidenavState) {
                this.$refs.sidenavRef.style.left = "0px";
            } else {
                this.$refs.sidenavRef.style.left = "-250%";
                // this.$refs.sidenavRef.style.left = "0%";
            }
        }
    }
}
</script>
