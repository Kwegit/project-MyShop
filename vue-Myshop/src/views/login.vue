<!-- <template>
  <div class="login-container">
    <h1>Connexion</h1>
    <form v-on:submit.prevent="login">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Mot de passe:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Se connecter</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("http://localhost/authentification_token", {
          username: this.email,
          password: this.password,
        });
        localStorage.setItem("token", response.data.token);
        if (response.status === 200) {
          this.$router.push("/admin");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  padding: 10px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
}

button {
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
}

button:hover {
  background-color: #0069d9;
}
</style> -->

<template>
  <div class="mx-auto flex w-full max-w-sm flex-col gap-6 mt-48">
    <div class="flex flex-col items-center">
      <h1 class="text-3xl font-semibold">Sign In</h1>
      <p class="text-sm">Sign in to access your account</p>
    </div>
    <div class="form-field">
      <label class="form-label">Email address</label>
      <input ref="email" placeholder="Type here" type="email" class="input max-w-full" />
      <label class="form-label">
        <span class="form-label-alt">Please enter a valid email.</span>
      </label>
    </div>
    <div class="form-field">
      <label class="form-label">Password</label>
      <div class="form-control">
        <input ref="password" placeholder="Type here" type="password" class="input max-w-full" />
      </div>
    </div>
    <div class="form-field">
      <div class="form-control justify-between">
        <div class="flex gap-2">
          <input type="checkbox" class="checkbox" />
          <a href="#" class="link link-primary link-underline-hover text-sm">Remember me</a>
        </div>
        <label class="form-label">
          <a class="link link-underline-hover link-primary text-sm">Forgot your password?</a>
        </label>
      </div>
    </div>
    <div class="form-field pt-5">
      <div class="form-control justify-between">
        <button @click="signIn" type="button" class="btn btn-primary w-full">Sign in</button>
      </div>
    </div>
    <div class="form-field">
      <div class="form-control justify-center">
        <router-link to="/register" class="link link-primary link-underline-hover text-sm">Don't have an account yet? Register.</router-link>
      </div>
    </div>
  </div>
</template>
    <script>
    import axios from 'axios';
    import router from '@/router';
   
    export default {
            data() {
                return {};
        },
      methods: {
        async signIn() {
          try {
            const email = this.$refs.email.value;
            const password = this.$refs.password.value;
   
            const response = await axios.post('http://localhost/authentication_token', {
              email: email,
              password: password,
            });
   
            if (response.status === 200) {
              console.log('Login successful');
              router.push({ path: '/' })
            } else {
              console.error('Login failed:', response.data);
   
            }
          } catch (error) {
            console.error('Error during login:', error.message);
          }
        },
      },
    };
    </script>

<style>
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.gap-6 > * + * {
  margin-top: 1.5rem;
}

.mt-48 {
  margin-top: 12rem;
}

.items-center {
  align-items: center;
}

.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.font-semibold {
  font-weight: 600;
  font-family: "Avenir", sans-serif;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-family: "Avenir", sans-serif;
}

.form-field {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-family: "Avenir", sans-serif;
}

.input {
  padding: 0.75rem 1rem;
  font-size: 1rem;
  line-height: 1.5rem;
  border-radius: 0.375rem;
  border: 1px solid #e5e7eb;
  background-color: #fff;
  width: 100%;
}

.form-label-alt {
  font-size: 0.75rem;
  line-height: 1rem;
  color: #9ca3af;
}

.form-control {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.checkbox {
  appearance: none;
  border-radius: 0.25rem;
  border: 1px solid #e5e7eb;
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
}

.checkbox:checked {
  background-color: #2563eb;
  border-color: #2563eb;
}

.checkbox:checked::before {
  content: "";
  display: block;
  width: 0.5rem;
  height: 0.25rem;
  border-bottom: 2px solid #fff;
  border-right: 2px solid #fff;
  transform: rotate(45deg);
}

.link {
  color: #2563eb;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

.link-underline-hover:hover {
  text-decoration: underline;
}

.link-primary {
  color: #2563eb;
}

.btn {
  display: inline-block;
  font-weight: 600;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  line-height: 1.5rem;
  border-radius: 0.375rem;
  transition: all 0.2s ease-in-out;
}

.btn-primary {
  color: #fff;
  background-color: #2563eb;
  border-color: #2563eb;
}

.btn-primary:hover {
  background-color: #1d4ed8;
  border-color: #1d4ed8;
}

.w-full {
  width: 100%;
}

.link-underline-hover:hover {
  text-decoration: underline;
}</style>
 

<!-- code en composition -->