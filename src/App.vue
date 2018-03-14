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
import AboutUsComponent from '@/components/aboutus'
import PrivacyPageComponent from '@/components/privacy'
import TermsPageComponent from '@/components/terms'
import FooterComponent from '@/components/footer'
import RefundPageComponent from '@/components/refundpolicy'






export default {
  name: 'App',
  components: { MainHeader,Home,InfluencerComponent,BrandComponent,BlogHomeComponent,BlogGuideComponent,BlogMonetizationComponent,BlogFollowerComponent,FooterComponent,AboutUsComponent,PrivacyPageComponent,TermsPageComponent,RefundPageComponent}
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
