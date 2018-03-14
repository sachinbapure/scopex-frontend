<template>
  <div id="app">
    <main-header></main-header>
    <footer-component></footer-component>
  </div>
</template>

<script>


import MainHeader from '@/components/header'
import Home from '@/components/home'
import InfluencerComponent from '@/components/influencer'
import BrandComponent from '@/components/brand'
import BlogHomeComponent from '@/components/bloghome'
import BlogFollowerComponent from '@/components/blogfollower'
import BlogMonetizationComponent from '@/components/blogmonetization'
import BlogGuideComponent from '@/components/blogguide'
import FooterComponent from '@/components/footer'





export default {
  name: 'App',
  components: { MainHeader,Home,InfluencerComponent,BrandComponent,BlogHomeComponent,BlogGuideComponent,BlogMonetizationComponent,BlogFollowerComponent,FooterComponent}
}
</script>

<style lang="scss">

body {
  overflow-x: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
