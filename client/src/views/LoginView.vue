<template>
  <div id="app">
    <h2 class="text-center mb-[10px]">Login Form</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <!-- <label for="username">Username:</label> -->
        <input
          type="text"
          id="username"
          v-model="username"
          placeholder="Username"
          required
        />
      </div>
      <div>
        <!-- <label for="password">Password:</label> -->
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Password"
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
    <div v-if="message">{{ message }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      message: "",
    };
  },
  methods: {
    handleSubmit() {
      // Simulated authentication logic
      if (
        this.username === "user_writer" &&
        this.password === "writer_password"
      ) {
        this.message = `Welcome Writer ${this.username}!`;
        // Add writer-specific logic here
      } else if (
        this.username === "user_editor" &&
        this.password === "editor_password"
      ) {
        this.message = `Welcome Editor ${this.username}!`;
        // Add editor-specific logic here
      } else {
        this.message = "Invalid credentials. Please try again.";
      }
      console.log("Username:", this.username);
      console.log("Password:", this.password);
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

div {
  margin-bottom: 1em;
}

label {
  margin-bottom: 0.5em;
  color: #333333;
  display: block;
}

input {
  border: 1px solid #cccccc;
  background: transparent;
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
