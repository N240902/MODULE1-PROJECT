<template>
  <div class="login-container flex h-screen">
    <!-- Left Side - Logo and Background -->
    <div class="login-background">
      <div class="absolute w-full h-full flex justify-center items-center">
        <img 
          src="@/assets/image.png"
          alt="Company Logo" 
          class="company-logo"
        />
      </div>
    </div>
    
    <!-- Right Side - Login Form -->
    <div class="login-form">
      <div class="w-full max-w-md">
        <div v-if="!isForgotPassword">
          <h3 class="text-2xl font-bold mb-8 text-center">Login</h3>
          <form @submit.prevent="login" class="space-y-6">
            <div>
              <label class="block mb-2 text-gray-700">Username</label>
              <input 
                v-model="username" 
                type="text" 
                required
                class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
              />
            </div>
            
            <div>
              <label class="block mb-2 text-gray-700">Password</label>
              <input 
                v-model="password" 
                type="password" 
                required
                class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            
            <div v-if="errorMessage" class="text-red-500 text-center">
              {{ errorMessage }}
            </div>
            
            <button 
              type="submit" 
              class="btn btn-primary"
            >
              Sign In
            </button>
            
            <div class="text-center mt-4">
              <button 
                type="button" 
                class="btn btn-secondary" 
                @click="toggleForgotPassword"
              >
                Forgot Password?
              </button>
            </div>
          </form>
        </div>
        
        <div v-else>
          <h3 class="text-2xl font-bold mb-8 text-center">Reset Password</h3>
          <form @submit.prevent="resetPassword" class="space-y-6">
            <div>
              <label class="block mb-2 text-gray-700">Email Address</label>
              <input 
                v-model="resetEmail" 
                type="email" 
                required
                class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            
            <button 
              type="submit" 
              class="btn btn-primary"
            >
              Send Reset Link
            </button>
            
            <div class="text-center mt-4">
              <button 
                type="button" 
                class="btn btn-primary"
                @click="toggleForgotPassword"
              >
                Back to Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        resetEmail: '',
        errorMessage: '',
        isForgotPassword: false
      }
    },
    methods: {
      login() {
        // Correct password authentication
        if (this.username === 'user1' && this.password === 'password123') {
          this.$emit('login', { username: this.username })
        } else {
          this.errorMessage = 'Invalid username or password'
        }
      },
      resetPassword() {
        // Mock password reset
        alert(`Password reset link sent to ${this.resetEmail}`)
        this.toggleForgotPassword()
      },
      toggleForgotPassword() {
        this.isForgotPassword = !this.isForgotPassword
        this.errorMessage = ''
      }
    }
  }
</script>

<style scoped>
  .login-container {
    display: flex;
    height: 100vh;
  }
  
  .login-background {
    position: relative;
    background-color: gray;
    color: white;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Flex container to center the logo */
  .login-background .absolute {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200%;
    height: 200%;
  }
  
  /* Make sure the logo fills the space without distorting */
  .company-logo {
    width: auto;
    height: 80%;  /* Adjust the height to your preference */
    object-fit: contain;  /* Maintain aspect ratio */
  }
  
  .login-form {
    background-color: lightgray;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  
  input, button {
    width: 100%;
  }
  
  input {
    padding: 12px;
    border-radius: 6px;
    border: 1px solid #ddd;
    margin-bottom: 12px;
  }
  
  button {
    padding: 12px;
    border-radius: 6px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: #0056b3;
  }
  
  button[type="button"]:hover {
    text-decoration: underline;
  }
  
  .text-center {
    text-align: center;
  }
  
  .error-message {
    color: red;
  }
</style>
