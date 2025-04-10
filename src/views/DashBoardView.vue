<template>
  <div class="dashboard-container">
    <div class="sidebar">
      <div class="logo">
        <img src="@/assets/image.png" alt="Company Logo" class="logo-image"> 
      </div>
      <nav>
        <ul>
          <li 
            v-for="item in menuItems" 
            :key="item.path"
            :class="{ active: isActive(item.path) }"
          >
            <router-link :to="item.path">
              <i :class="item.icon"></i>
              {{ item.label }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    
    <main class="main-content">
      <header>
        <div class="user-info">
          <img src="@/assets/avatar.avif" alt="User Avatar" class="avatar">
          <span>User1</span> 
        </div>
        <button @click="logout" class="logout-btn">Logout</button>
      </header>

      <!-- Show Dashboard Summary only when on the Home Page -->
      <section v-if="isHomePage" class="dashboard-summary">
        <h2>Dashboard Overview</h2>
        <div class="dashboard-container">
          <div class="dashboard-card">
           <div class="image-container" style="background-image: url('https://c7.alamy.com/comp/2H10KG3/five-population-infographic-icons-2H10KG3.jpg');">
           </div>
            <h3>Total Employees</h3>
            <p>{{ totalEmployees }}</p>
          </div>
          <div class="dashboard-card">
            <div class="image-container" style="background-image: url('https://www.shutterstock.com/image-vector/salary-payroll-system-online-income-260nw-2141983465.jpg');">
            </div>
            <h3>Payroll Processed</h3>
            <p>{{ totalPayrollProcessed }}</p>
          </div>
          <div class="dashboard-card">
           <div class="image-container" style="background-image: url('https://www.shutterstock.com/shutterstock/photos/1824958268/display_1500/stock-vector-online-leave-request-vs-leave-application-form-in-paper-vector-1824958268.jpg')">
           </div>
            <h3>Leave Requests Pending</h3>
            <p>{{ pendingLeaveRequests }}</p>
          </div>
          <div class="dashboard-card">
            <div class="image-container" style="background-image: url('https://hospitalityinsights.ehl.edu/hubfs/employee-performance-improvement.jpeg');">
            </div>
            <h3>Employee Performance</h3>
            <p>{{ performanceScore }}%</p>
          </div>
        </div>
      </section>

      <!-- Router View Section -->
      <router-view v-slot="{ Component }">
        <template v-if="Component">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </template>
      </router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'DashboardView',
  data() {
    return {
      menuItems: [
        { path: '/home/employee', label: 'Employees', icon: 'fa-solid fa-users' },
        { path: '/home/payroll', label: 'Payroll', icon: 'fa-solid fa-dollar-sign' },
        { path: '/home/performance-metrics', label: 'Performance', icon: 'fa-solid fa-chart-line' },
        { path: '/home/timeoff', label: 'Time Off', icon: 'fa-solid fa-clock' }
      ],
      totalEmployees: 250, // Example data
      totalPayrollProcessed: 50000, // Example data
      pendingLeaveRequests: 12, // Example data
      performanceScore: 88 // Example data
    }
  },
  computed: {
    // Check if we are on the home/dashboard page
    isHomePage() {
      return this.$route.path === '/home';
    }
  },
  methods: {
    isActive(path) {
      return this.$route.path === path;
    },
    logout() {
      // Implement logout logic
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: lightgray;
  border-right: 1px solid #e0e0e0;
  padding: 20px;
}

.logo {
  text-align: center;
  margin-bottom: 30px;
}

.logo-image {
  width: 150px;
  height: auto;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.sidebar nav ul {
  list-style: none;
  padding: 0;
}

.sidebar nav ul li {
  margin-bottom: 10px;
}

.sidebar nav ul li a {
  display: flex;
  align-items: center;
  padding: 10px;
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s;
}

.sidebar nav ul li a i {
  margin-right: 10px;
}

.sidebar nav ul li.active a,
.sidebar nav ul li a:hover {
  background-color: #e9ecef;
  border-radius: 5px;
}

.main-content {
  flex-grow: 1;
  padding: 20px;
  background-color: #ffffff;
  overflow-y: auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-info .avatar {
  border-radius: 50%;
  margin-right: 10px;
}

.logout-btn {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
}

.dashboard-summary {
  margin-bottom: 30px;
}

.stats-container {
  display: flex;
  justify-content: space-around;
}
.dashboard-container {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.dashboard-card {
  display: grid;
  background-color: lightblue;
  padding: 20px;
  border-radius: 8px;
  width: 20%;
  text-align: center;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  gap: 20px;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


.image-container {
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 150px; /* Fixed height for the images */
  border-radius: 10px;
  margin-bottom: 15px;
}

.dashboard-card h3 {
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
}

.dashboard-card p {
  font-size: 14px;
  color: #777;
}

@media screen and (max-width: 768px) {
  .dashboard-cards {
    grid-template-columns: 1fr 1fr; /* Two columns for smaller screens */
  }
}

@media screen and (max-width: 480px) {
  .dashboard-cards {
    grid-template-columns: 1fr; /* Single column for very small screens */
  }
}

</style>
