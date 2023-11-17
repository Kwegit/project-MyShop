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
[14:27] Alexandre Sammaciccia
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
                            <a href="#">Remember me</a>
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
                        <router-link to="/register" class="link link-underline-hover link-primary text-sm">Don't have an account yet? Register.</router-link>
                    </div>
                </div>
      </div>
    </template>
    <script>
    import axios from 'axios';
    import router from '@/router';
   
    export default {
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

<!-- code en composition -->