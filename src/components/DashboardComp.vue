<template>
    <div class="container-fluid d-flex flex-column min-vh-100">
      <!-- Header -->
      <header class="header d-flex justify-content-between align-items-center p-4">
        <div class="d-flex align-items-center">
          <img src="@/assets/image.png" alt="Logo" class="logo" />
          <h1 class="ms-3">ModernTech Solutions</h1>
        </div>
        <button @click="handleLogout" class="btn btn-secondary">
          Logout
        </button>
      </header>

      <div>
        <h1>{{ msg }}</h1>
      </div>

      <!-- Main Content -->
      <main class="flex-grow-1 d-flex justify-content-center align-items-center">
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col" v-for="(item, index) in navItems" :key="index">
            <div class="card h-100">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">Click to navigate to the {{ item.title }} section.</p>
                <router-link :to="item.link" class="btn btn-primary mt-auto">Go</router-link>
              </div>
            </div>
          </div>
        </div>
      </main>
  
      <!-- Footer -->
      <footer class="bg-dark text-white text-center p-3">
        <p>&copy; 2024 ModernTech Solutions. All rights reserved.</p>
      </footer>
    </div>
</template>
  
<script>
  export default {
    name : 'DashboardComp',
    props: {
      currentUser: String, // This will be passed from the parent
      msg: {
        type : String,
        required : true
      }
    },
    data() {
      return {
        navItems: [
          { title: 'Employee Information', link: '/employee' },
          { title: 'Payroll', link: '/payroll' },
          { title: 'Performance Metrics', link: '/performance-metrics' },
          { title: 'Time Off', link: '/timeoff' }
        ]
      }
    },
    methods: {
      handleLogout() {
        this.$emit('logout')
        this.$router.push('/') // Redirect to login page after logout
      },
    },
  }
</script>
  
<style scoped>
/* Header styles */
.header {
  background-color: limegreen;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:white;
}



/* Make the body and html take full height */
  html, body {
  height: 100%;
  width: 100%;
  margin: 0;
}

/* Flexbox container for full page height */
  .container-fluid {
  display: flex;
  flex-direction: column;
  height: 100%;
}


  /* Logo styling */
  .logo {
    width: 60px;
    height: 60px;
    object-fit: contain;
  }
  
  /* Header styles */
  header h1 {
    font-size: 1.5rem;
  }
  
  /* Footer styling */
  footer {
    bottom: 0;
    width: 100%;
  }
</style>
  