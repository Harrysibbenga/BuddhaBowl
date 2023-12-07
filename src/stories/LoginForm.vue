
<template>
  <div class="login-container">
    <div class="login-form">
      <h1>Log In to Your Blissful Bowl Journey</h1>
      <form @submit.prevent="onLogin">
        <div class="form-group">
          <input type="text" v-model="loginDetails.username" placeholder="Username" required>
        </div>
        <div class="form-group">
          <input type="password" v-model="loginDetails.password" placeholder="Password" required>
        </div>
        <button type="submit" class="login-button">Log In</button>
      </form>
      <p>Don’t have an account? <a href="#" @click="toggleForm">Sign Up</a></p>
    </div>
    <div class="signup-form" v-if="isSignupFormVisible">
      <h1>Join the Blissful Bowl Family</h1>
      <form @submit.prevent="onSignup">
        <div class="form-group">
          <input type="text" v-model="signupDetails.username" placeholder="Username" required>
        </div>
        <div class="form-group">
          <input type="email" v-model="signupDetails.email" placeholder="Email" required>
        </div>
        <div class="form-group">
          <input type="password" v-model="signupDetails.password" placeholder="Password" required>
        </div>
        <button type="submit" class="signup-button">Sign Up</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      loginDetails: {
        username: '',
        password: ''
      },
      signupDetails: {
        username: '',
        email: '',
        password: ''
      },
      isSignupFormVisible: false
    };
  },
  emits: ['toggle-form'],

  methods: {
    onLogin() {
      // Handle login logic here
      console.log('Logging in with:', this.loginDetails);
    },
    onSignup() {
      // Handle signup logic here
      console.log('Signing up with:', this.signupDetails);
    },
    toggleForm() {
      this.isSignupFormVisible = !this.isSignupFormVisible;
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.login-form, .signup-form {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin: 10px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 16px;
}

.login-button, .signup-button {
  width: 100%;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #5cb85c;
  color: white;
  font-size: 18px;
  cursor: pointer;
}

.login-button:hover, .signup-button:hover {
  background-color: #4cae4c;
}

a {
  color: #5cb85c;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
