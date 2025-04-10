<template>
  <div id="app" class="min-h-screen bg-gray-100">
    <router-view v-if="isLoggedIn" /> <!-- The main content will render here if logged in -->
    <login-comp v-else @login="handleLogin" /> <!-- Show LoginComp if not logged in -->
  </div>
</template>

<script>
import LoginComp from './components/LoginComp.vue'

export default {
  components: {
    LoginComp,
  },
  data() {
    return {
      isLoggedIn: false,
    }
  }, 
  methods: {
    handleLogin(userData) {
      this.isLoggedIn = true
      this.$router.push({ name: 'home' }) // Navigate to the home page after login
    },
    handleLogout() {
      this.isLoggedIn = false
      this.$router.push({ name: 'login' }) // Navigate back to the login page after logout
    },
  },
  watch: {$route(to) {
    if(this.isLoggedIn && to.name === 'login') {
      this.isLoggedIn = false;
    }
  }},
}
</script>