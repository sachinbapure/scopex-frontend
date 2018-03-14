import axios from 'axios'


// URL and endpoint constants
const API_URL = 'http://localhost:5001/'
const LOGIN_URL = API_URL + 'api/login'
const SIGNUP_URL = API_URL + 'api/register'

export default {

  // User object will let us check authentication status
  user: {
    authenticated: false
  },

  // Send a request to the login URL and save the returned JWT
  login(context,creds, redirect) {
  	axios.post(LOGIN_URL, creds, {
      	headers: {
      'Content-type': 'application/json',
    }})
      .then(response => {
      	if (response.data.code == 200) {
      	this.user.authenticated = true
           
}
    }).catch((error) => {
      context.error = error.response
    })
  },

  signup(context,creds, redirect) {
  	axios.post(SIGNUP_URL, creds, {
      	headers: {
      'Content-type': 'application/json',
    }})
      .then(response => {
      	this.user.authenticated = true
    }).catch((error) => {
      context.error = error.response
    })
  },
  // To log out, we just need to remove the token
  logout() {
    this.user.authenticated = false
  },

  checkAuth() {
    var jwt = localStorage.getItem('id_token')
    if(jwt) {
      this.user.authenticated = true
    }
    else {
      this.user.authenticated = false      
    }
  },

  // The object to be passed as a header for authenticated requests
  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    }
  }
}