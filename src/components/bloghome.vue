<template lang="html">
  <div class="blog_wrapper">
    <div class="blog_header">
        <ul class="list-inline text-left">
           <router-link to='/blog-home'>Content Starategy</router-link>
        <router-link to='/blog-follower'> Follower</router-link>
        <router-link to='/blog-monetize'> Monetization</router-link>
        <router-link to='/blog-guide'> Guides</router-link>
          </ul>
      </div>
        <div class="blog_body">
          <div class="container-fluid heading">
            <h1>Content Strategy</h1>
            <h2>Learn everything from creating content that inspires <br> to caption and hashtag hacks</h2>
          </div>
            <!-- sidebar -->
          <div class="container">
            <div class="row">
              <div class="col-lg-3">
                <div class="row">
                <div class="col-lg-12 col-md-3 sidebar">
                  <div class="mini-submenu">
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                  </div>
                  <div class="list-group text-left">
                    <span href="#" class="list-group-item active">
                        Submenu
                        <span class="pull-right" id="slide-submenu">
                            <i class="fa fa-times"></i>
                        </span>
                      </span>
                        <a href="#" class="list-group-item">
                            <i class="fa fa-comment-o"></i> Lorem ipsum
                        </a>
                        <a href="#" class="list-group-item">
                            <i class="fa fa-search"></i> Lorem ipsum
                        </a>
                        <a href="#" class="list-group-item">
                            <i class="fa fa-user"></i> Lorem ipsum
                        </a>
                        <a href="#" class="list-group-item">
                            <i class="fa fa-folder-open-o"></i> Lorem ipsum <span class="badge">14</span>
                        </a>
                        <a href="#" class="list-group-item">
                            <i class="fa fa-bar-chart-o"></i> Lorem ipsumr <span class="badge">14</span>
                        </a>
                        <a href="#" class="list-group-item">
                            <i class="fa fa-envelope"></i> Lorem ipsum
                        </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-1"></div>
            
              <div class="col-lg-8 text-left">
                  <div class="a2a_kit a2a_kit_size_32 a2a_floating_style a2a_vertical_style" style="    right:10px;top: 250px;line-height: 32px;">
                      <a class="a2a_button_facebook"></a>
                      <a class="a2a_button_twitter"></a>
                      <a class="a2a_button_google_plus"></a>
                      <a class="a2a_button_pinterest"></a>
                      <a class="a2a_dd" href="https://www.addtoany.com/share"></a>
                  </div>

                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <br>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <br>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <br>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
        </div>
  </div>

</template>

<script>
export default {
}
</script>

<style scoped lang="css">

.blog_header ul {
  background: #2f2f2f;
margin-top: 15px;
padding: 10px;
}

.blog_header h3 {
	margin-top:0px !important;
	padding: 20px;
	font-size:30px;
}



hr {
	width: 5%;
	border:1px solid black !important;
	}

	ul li {
		padding: 10px;
		font-size: 18px;
		list-style: none;

			}

	.list-inline {
		margin-bottom: 0px !important;
	}
	.list-inline a {
		color: white;
		padding: 10px;
	}
	

.blog_body .heading {
  background: linear-gradient(135deg, #0d324d, #7f5a83);
  	color: white;
	padding: 40px;
	padding-left: 0px !important;
	padding-right: 0px !important;
}

.blog_body .container {
  padding-top: 30px;
}

.heading h1, .heading h2{
      text-align: left;
      padding: 15px;
}
 
.heading h1 {
  font-weight: 800;
  font-size: 50px;
}

.heading h2 {
  font-size: 25px;
}

.mini-submenu{
  display:none;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid rgba(0, 0, 0, 0.9);
  border-radius: 4px;
  padding: 9px;
  /*position: relative;*/
  width: 42px;

}

.sidebar {
	margin-top: 10px;
}
.mini-submenu:hover{
  cursor: pointer;
}

.mini-submenu .icon-bar {
  border-radius: 1px;
  display: block;
  height: 2px;
  width: 100px;
  margin-top: 3px;
}

.mini-submenu .icon-bar {
  background-color: #000;
}

#slide-submenu{
  background: rgba(0, 0, 0, 0.45);
  display: inline-block;
  padding: 0 8px;
  border-radius: 4px;
  cursor: pointer;
}

.mini-submenu .list-group-item.active {
  color: #2689fe;
  background-color: none !important;
}

.mini-submenu .list-group-item {
  color:black;
}
.vl {
    border-left: 6px solid green;
    height: 500px;
}

</style>
