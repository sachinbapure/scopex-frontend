<template>
<div class="influence_wrapper">
    <div class="container">	
	<div class="row" id="influencer_onboard">
          <div class="col-lg-6" >
          </div>
          <div class="col-lg-5 " id="infl_head" v-if="!user.authenticated">
      <h2>Sign Up</h2>
      <p>Log in to your account to get started on influencer Marketing</p>
      <div class="alert alert-danger" v-if="error">
        <p>{{ error }}</p>
      </div>
        <form @submit.prevent="submitregister()" >
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Enter your name"
          v-model="credentials.name"
        >
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Enter your email"
          v-model="credentials.email"
        >
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          placeholder="Enter your password"
          v-model="credentials.password"
        >
      </div>
      <button class="btn btn-primary">Access</button>
  </form>

  <!-- <form @submit.prevent="submitlogin()">
      
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Enter your email"
          v-model="credLogin.email"
        >
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          placeholder="Enter your password"
          v-model="credLogin.password"
        >
      </div>
      <button class="btn btn-primary">Access</button>
  </form> -->
    </div>
    <div class="row">
    	<div class="col-lg-12" id="after_login" v-if="user.authenticated">
    	<h1> Glad you signed up! <br> Now, go to your inbox (sometimes spam) and we will send you a <span>FREE ebook</span> an engagement mistakes you are making
		</h1>
		<h3>
			Need more resources

			  <router-link to="/blog-home">Click here</router-link>
		</h3>
    </div>
    </div>
	</div>
   </div>
</div>
  </template>
<style type="text/css" scoped>

	.influence_wrapper {
      background: url(../assets/group.jpg) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        min-height: 600px;
}

#influence_main {
	text-align: center;
}

.influence_main h3	{
	margin: 20px;
  padding: 40px;
}

#influencer_onboard h3 label {
  font-size: 90px;
  font-weight: 500;
  color:red;
}

#infl_head {
  padding: 25px;
  margin-top: 25px;
  background: rgba(0, 0, 0, 0.45);
  margin-top: 75px;
}

#infl_head h1 {
  font-weight: 900px !important;
  font-size:1.5rem;
  padding: 20px;
  color:white;
  letter-spacing: 1px;
}

form label {
  color:white;
  font-weight:800;
}

form input {
  padding: 5px 5px;
}

form button {
  text-align: center;
  width: 75%;
  margin: 0 auto;
}


#after_login h1{
		padding:60px;
		letter-spacing: 1px;
		color: white;
	}

#after_login {
		background: rgba(0, 0, 0, 0.5);
		margin-top: 100px;
		padding: 20px;
	}

#after_login a {
	    background: white;
    padding: 10px;
}	

#after_login h3 {
	color:white;
}

#after_login h1 span {
	font-weight: 900;
	color:#23def1;
}

</style>


  <script>
  import auth from '../auth'
  import Image from '../assets/group.jpg';

  export default {
    data() {
      return {
        // We need to initialize the component with any
        // properties that will be used in it
        credentials: {
          name: '',
          email: '',
          password: ''
        },
        error: '',
        credLogin: {
        	email: '',
        	password: ''
        },
        user: auth.user
      }
    },
    methods: {
      submitregister() {
        var credentials = {
          name: this.credentials.name,
          email: this.credentials.email,
          password: this.credentials.password
        }
        console.log(credentials)
        // We need to pass the component's this context
        // to properly make use of http in the auth service
        auth.signup(this, credentials, '/')
      },
      submitlogin() {
        var credentials = {
          email: this.credLogin.email,
          password: this.credLogin.password
        }
        // We need to pass the component's this context
        // to properly make use of http in the auth service
        auth.login(this, credentials, '/')
      }
    }

  }
  </script>