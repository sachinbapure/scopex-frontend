<template lang="html">
<div :class="{ 'home': $route.path==='/' }">
  <div class="router_nav" >
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <a class="navbar-brand" href="/">Scopex</a>
      <div class="menu_bar">
        <router-link to='/' v-if="!user.authenticated" >Home</router-link>
        <router-link to='/brand-login' v-if="!user.authenticated"> Brand</router-link>
        <router-link to='/influencer-login' v-if="!user.authenticated"> Influencer</router-link>
        <router-link to='/blog-home'> Resources</router-link>
        <router-link to='/' v-if="user.authenticated" @click="logout()">Logout</router-link>
      </div>
    </nav>
    <router-view></router-view>

  </div>
</div>

</template>

<script>
import auth from '../auth'
  export default {
    data() {
      return {
        user: auth.user
      }
    },
    methods: {
      logout() {
        auth.logout();
        user.authenticated == false;
      }
    }
  }
</script>

<style scoped lang="css">

  .navbar-brand{
    color:black;
    font-size: 30px;
    text-align: center;
    font-weight: 1000;
    letter-spacing: 1px;
  }


  nav {
    width: 98%;
    margin: 0 auto;
    z-index: 1;
    }

    .menu_bar {
      width: 50%;
      text-align: right;
    }


  nav div a {
    color:black;
    text-align: right;
    padding: 10px;
    font-weight: 1000;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;

  }


    .home .navbar-brand, .home nav div a  {
      color: white;
    }




</style>
