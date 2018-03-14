<template>
  <div class="hello">
    <section class="callout">
      <div class="video-bg">
 <video autoplay loop muted poster="path/to/poster.jpg">
              <source src="../assets/webmovie.mp4" type="video/mp4">
          </video>
      </div>
      <div class="video-overlay"></div>
      <div class="callout-inner">
        <div class="row">
        <h1 class="wow fadeInUp text-center" data-wow-duration="2s" >Influencer Marketing</h1>
          <p class="text-center"> Fast. Impactful. ROI focused. </p>

          </div>
          <div class="row">
            <div class="col-lg-12">
              <button class="btn btn-info influence_btn">Influencer</button>
              <button class="btn btn-info brand_btn">Brand</button>
            </div>
          </div>
      </div>
     
  </section>


<section>
  <div class="container" id="slide-2">
    <h1 class="wow fadeInUp" data-wow-duration="2s">Easiest and most effective way to advertise</h1>
    <p>We will hire targeted high performing influencers to promote your business. <br> We can get your campaign up and running in just 1 day.</p>
    <hr>

    <div class="row" id="feature_panel">
      <div class="col-lg-6">
      <p>
        Shoutouts at scale
      </p>
       <img :src="require('../img/app-mockup.jpg')" style="width: 50%"/>
      </div>
      <div class="col-lg-6">
        <p>Create branded content</p>
        <img :src="require('../img/branded_content.jpg')" style="width: 50%">
      </div>
    </div>
  </div>
  </section>

 <section class="customer_section" id="03">
    <h2>How it works</h2>

    <div class="container">

      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 wow fadeInLeft">
            <div class="hovereffect">
              <div class="work_body">
                <img src="../assets/step1.jpg" alt="">
                <p class="work_desc">Tell us about your marketing goals and we will create killer campaigns that you can choose to run.</p>
              </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 wow fadeInDown">
            <div class="hovereffect">
              <div class="work_body">
                <img src="../assets/step2.jpg" alt="">
                <div class="">

                  <p class="work_desc">Once you approve the campaign, we will hire the right influencers for your company and get the campaign up and running
                </p>
                </div>

              </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 wow fadeInRight">
            <div class="hovereffect">
              <div class="work_body">
                <img src="../assets/step3.jpg" alt="">
                <p class="work_desc">Relax and watch your product get talked about by millions</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>

   <section id="get_started">
    <div class="containe-fluid">
      <div class="row">
        <div class="col-lg-8">
            <h3>Start your campaign today!</h3>
            <p>Getting started with your first campaign is easier than you think! Click to get started and we will get in touch with you and take it from there.
              <br>
            Stop worrying about how and where to find the right influencers. We got your back!</p>
                  </div>
                  <div class="col-lg-4 text-center">
                    <button class="btn btn-info">Get Started</button>
                  </div>
      </div>
    </div>
  </section>

  </div>
</template>

<script>

import image from "../assets/group.jpg"

import 'video.js/dist/video-js.css'

import { videoPlayer } from 'vue-video-player'

export default {
  name: 'ScopexHome',
  data() {
      return {
        playerOptions: {
          // videojs options
          muted: true,
          language: 'en',
          loop:true,
          autoplay:true,
          controls:false,
          aspectRatio:"16:9",
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "webmovie.mp4"
          }],
        },
        image: image
      }
    },
    components: {
    videoPlayer
  },
  mounted() {
      console.log('this is current player instance object', this.player)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.callout {
    margin-bottom: 175px;
    padding-top: 50px;
    top: 0;
    width: 100%;
}
.video-bg,
.video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
}
.video-overlay {
    pointer-events: none; /* Allows right clicking on the video to pause etc */
}
.video-bg {
      z-index: -1;
      height: 700px;
}


.callout-inner h1 {
  color:white;
  width: 100%;
  padding-bottom: 20px;
  font-weight: 700;
  font-size: 3rem;
  padding-top:100px;
}

.callout-inner button {
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    margin-right: 20px;
    margin-top: 25px;
    border:none;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 1px;

}

.callout-inner p {
  margin: 0 auto;
color: white;
font-weight: 600;
font-size: 25px;

}

.callout-inner h2 {
      width: 100%;
      color:white;
      padding: 20px;
}



.video-bg video {
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;

}

.brand_btn {
  background: white;
    color: #17a2b8;
    padding-left:40px !important;
    padding-right: 40px !important;
}

.scroll_down {
    position: absolute;
      top: 135%;
      transition: 0.5s;
      left: 0;
      right: 0;
      color: white;
}
.callout-content {
    position: relative;
    text-align: center;
    margin: 100px 0; /* This adds some space around the video */
    color: #FFF;
    text-shadow: 0 0 5px rgba(0,0,0,0.4);
}



.vue-typer .custom.char {
  color: black;
  background-color: #aac9e8;
}


#slide-2{
  padding-top: 200px;
}

#slide-2 h1 {
  color:black;
  font-size: 40px;
  margin:20px;
}

.customer_section {
  margin-top: 50px;
  background: url(../assets/people.jpg) no-repeat;
  opacity: 0.8;
  box-shadow: inset 0 0 0 1000px rgba(11, 8, 8, 0.70);
  position: relative;
  text-align: center;
  width:100%;
  position: relative;
  height: 700px;
  background-size: cover;
}



.customer_section h2 {
  color:white;
  padding-top: 40px;
  font-size: 50px;
  font-weight: 600;
}

.work_body {
  padding-top: 30px;
  margin-top: 50px;
}

.work_body div {
}
.work_body img {
  width: 80%;
  border-radius: 50%;
  min-height: 250px;
}



.work_body p {
  padding-top: 20px;
    color: white;
    padding-left: 40px;
    padding-right: 40px;
    font-size: 17px;
    font-weight: 600;
    line-height: 1.3;
}

#get_started {
  background: #fff;
padding: 50px;
text-align: left;
}

#get_started h3 {
  font-weight: 700;
}

#get_started button {
  margin-top: 50px;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 15px;
  padding-bottom: 15px;
}

#feature_panel {
padding-top: 50px;
}

#feature_panel p {
  margin-top: 0;
margin-bottom: 1rem;
font-size: 15px;
font-weight: 700;
}

.card svg {
  margin:0 auto;
  margin-top:20px;
}

#feature_panel .card {
  background-color: none !important;
  border: none !important;
}

</style>
