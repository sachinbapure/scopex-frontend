<template lang="html">
  <div class="brand_wrapper">
    <div class="container">
      <section id="brand_main">
      <div class="row" id="brand_onboard">

          <div class="col-lg-5 " id="brand_head">
              <h1 style="font-weight:900">Influencer campaigns made easy</h1>
              <p>Fill this up and our team will reach out to you to get your started in 24 hours</p>
            <form action="#">
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="name" class="form-control" id="name">
              </div>
                <div class="form-group">
                  <label for="email">Email address:</label>
                  <input type="email" class="form-control" id="email">
                </div>
                <div class="form-group">
                  <label for="pwd">Password:</label>
                  <input type="password" class="form-control" id="pwd">
                </div>

                <button type="submit" class="btn btn-primary ">Get started</button>
              </form>
          </div>
          <div class="col-lg-6" >
          </div>
          <div class="col-lg-1">

          </div>
      </div>
    </section>
    </div>

  </div>

</template>
<script>
export default {
}
</script>

<style scoped lang="css">


.brand_wrapper {
      background: url(../assets/brands2.jpg) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        min-height: 700px;
}

#brand_main {
	text-align: center;
}

.brand_main h3	{
	margin: 20px;
  padding: 40px;
}

#brand_onboard h3 label {
  font-size: 90px;
  font-weight: 500;
  color:red;
}

#brand_head {
  padding: 25px;
  margin-top: 25px;
  background: rgba(0, 0, 0, 0.45);
  margin-top: 75px;
}

#brand_head h1 {
  font-weight: 1000px !important;
  font-size:1.5rem;
  padding: 10px;
  color:white;
  letter-spacing: 1px;
  text-align: left;
}

#brand_head p {
  font-size: 0.8rem;
  text-align: left;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
}

form {
  text-align: left;
  padding-left: 10px;
  padding-right: 10px;
}
form label {
  color:white;
  font-weight:800;
}

form input {
  padding: 2px 2px;
}

form button {
}



</style>
