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
            <h1>Growth guides</h1>
            <h2>Strategies to help you get seen by millions</h2>
            <h3></h3>
          </div>
            <!-- sidebar -->
          <div class="container">
                <div class="row">
                  <div class="col-lg-4">
                    <div class="card" style="width: 18rem;">
                      <img class="card-img-top" src="../assets/customer.jpg" alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a class="btn btn-primary">
                          <router-link to='/guide-ebook'> Guides</router-link>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="card" style="width: 18rem;">
                      <img class="card-img-top" src="../assets/customer.jpg" alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="card" style="width: 18rem;">
                      <img class="card-img-top" src="../assets/customer.jpg" alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>
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
