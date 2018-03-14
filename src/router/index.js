import Vue from 'vue'
import Router from 'vue-router'
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
import RefundPageComponent from '@/components/refundpolicy'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ScopexHome',
      component: Home
    },
    {
      path: '/influencer-login',
      name: 'Influencer-login',
      component: InfluencerComponent
    },
    {
      path: '/brand-login',
      name: 'brand-login',
      component: BrandComponent
    },
    {
      path: '/blog-home',
      name: 'blog-home',
      component: BlogHomeComponent
    },
    {
      path: '/blog-follower',
      name: 'blog-follower',
      component: BlogFollowerComponent
    },
    {
      path: '/blog-monetize',
      name: 'blog-monetize',
      component: BlogMonetizationComponent
    },
    {
      path: '/blog-guide',
      name: 'blog-guide',
      component: BlogGuideComponent
    },
    {
      path: '/about-us',
      name: 'blog-guide',
      component: AboutUsComponent
    },
    {
      path: '/privacy-policy',
      name: 'blog-guide',
      component: PrivacyPageComponent
    },
    {
      path: '/terms-policy',
      name: 'blog-guide',
      component: TermsPageComponent
    },
    {
      path: '/refund-policy',
      name: 'blog-guide',
      component: RefundPageComponent
    }
  ]
})
