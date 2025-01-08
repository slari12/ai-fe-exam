<template>
  <div id="app">
    <h2 class="text-center">Login Form</h2>
    <form @submit.prevent="handleSubmit" v-if="!isLoggedIn">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>

    <div v-if="isLoggedIn">
      <h3>Welcome, {{ username }}!</h3>
      <button v-if="isEditor" @click="addUser">Add User</button>
      <button @click="logout">Logout</button>
    </div>

    <div v-if="message">{{ message }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      isLoggedIn: false,
      isEditor: false,
      message: "",
    };
  },
  created() {
    const storedUser = localStorage.getItem("loggedInUser");
    const storedRole = localStorage.getItem("userRole");
    if (storedUser) {
      this.username = storedUser;
      this.isLoggedIn = true;
      this.isEditor = storedRole === "editor";
    }
  },
  methods: {
    handleSubmit() {
      if (this.username === "user_writer" && this.password === "writer12345") {
        this.isLoggedIn = true;
        this.isEditor = false;
        localStorage.setItem("loggedInUser", this.username);
        localStorage.setItem("userRole", "writer");
      } else if (
        this.username === "user_editor" &&
        this.password === "editor12345"
      ) {
        this.isLoggedIn = true;
        this.isEditor = true;
        localStorage.setItem("loggedInUser", this.username);
        localStorage.setItem("userRole", "editor");
      } else {
        this.message = "Invalid credentials. Please try again.";
      }
      console.log("Username:", this.username);
      console.log("Password:", this.password);
    },
    addUser() {
      alert("User added successfully!");
    },
    logout() {
      this.isLoggedIn = false;
      this.isEditor = false;
      this.username = "";
      this.password = "";
      localStorage.removeItem("loggedInUser");
      localStorage.removeItem("userRole");
      this.message = "You have logged out.";
    },
  },
};
</script>

<style scoped>
#app {
  max-width: 300px;
  margin: auto;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
}
h2 {
  margin-bottom: 10px;
}

div {
  margin-bottom: 1em;
}

label {
  margin-bottom: 0.5em;
  color: #ccc;
  display: block;
}

input {
  border: 1px solid #cccccc;
  background: transparent;
  border-radius: 5px;
  width: 100%;
}

button {
  padding: 0.5em;
  color: white;
  background-color: #007bff;
  width: 100%;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
