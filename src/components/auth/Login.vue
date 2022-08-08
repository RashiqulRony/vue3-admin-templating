<template>
  <div class="limiter">
    <div class="container-login100 page-background">
      <div class="wrap-login100">
        <form class="login100-form validate-form" @submit.prevent="login()">
					<span class="login100-form-logo">
						<i class="fa fa-user"></i>
					</span>
          <span class="login100-form-title p-b-34 p-t-27">
						Log in
					</span>
          <div class="wrap-input100 validate-input" data-validate="Enter username">
            <input class="input100" v-model="user.email" type="text" name="username" placeholder="Username">
<!--            <span class="focus-input100" data-placeholder="&#128100;"></span>-->
          </div>
          <div class="wrap-input100 validate-input" data-validate="Enter password">
            <input class="input100" v-model="user.password" type="password" name="pass" placeholder="Password">
<!--            <span class="focus-input100" data-placeholder="&#xf191;"></span>-->
          </div>
          <div class="contact100-form-checkbox">
            <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">
            <label class="label-checkbox100" for="ckb1">
              Remember me
            </label>
          </div>
          <div class="container-login100-form-btn">
            <button class="login100-form-btn">
              Login
            </button>
          </div>
          <div class="text-center p-t-90">
            <a class="txt1" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// require('');

import "/public/assets/css/pages/extra_pages.css";

export default {
  name: 'LoginComponent',

  data: () => ({
    user: {
      id: 1,
      name: "Mr. Admin",
      email: '',
      password: '',
      access_token: 'abcdefgijk1234',
    }
  }),

  mounted() {
    if (this.$store.getters.isLoggedIn === true) {
      this.$router.push({ path: `/dashboard` });
    }
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.user).then(response => {
        console.log("Full",response)
        window.location.reload()
      }).catch(error => {
        console.log(error)
      });
    }
  }

}

</script>

<style >
@import '/public/assets/css/pages/extra_pages.css';
</style>

