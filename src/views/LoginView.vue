<template>
  <div id="app" v-if="!isLoggedIn">
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
      <button type="submit" class="login">Login</button>
      <div v-if="message" class="text-center">{{ message }}</div>
    </form>
  </div>

  <div v-if="isLoggedIn" class="main-card">
    <div class="flex justify-between justify-items-center">
      <h2 class="text-center">Welcome, {{ username }}!</h2>
      <div class="upper-right">
        <button v-if="isEditor" @click="addUser" class="add_user">
          Manage Users
        </button>
        <button @click="logout" class="logout">Logout</button>
      </div>
    </div>

    <CreateArticle v-if="isLoggedIn" />
    <WriterDashboard />
  </div>
</template>

<script>
import WriterDashboard from "./writer-dashboard/WriterDashboard.vue";

export default {
  components: {
    WriterDashboard,
  },
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
    addUser() {
      this.$router.push("/user-management");
    },
    handleSubmit() {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (u) => u.username === this.username && u.password === this.password
      );

      // Check if the user is the predefined "user_editor"
      const user_editor = {
        username: "user_editor",
        password: "editor12345",
        role: "editor",
      };
      const user_writer = {
        username: "user_writer",
        password: "writer12345",
        role: "writer",
      };
      if (
        this.username === user_editor.username &&
        this.password === user_editor.password
      ) {
        this.isLoggedIn = true;
        this.isEditor = true;
        localStorage.setItem("loggedInUser", this.username);
        localStorage.setItem("userRole", user_editor.role);
      } else if (
        this.username === user_writer.username &&
        this.password === user_writer.password
      ) {
        this.isLoggedIn = true;
        this.isEditor = false;
        localStorage.setItem("loggedInUser", this.username);
        localStorage.setItem("userRole", user_writer.role);
      } else if (user) {
        this.isLoggedIn = true;
        this.isEditor = user.role === "editor";
        localStorage.setItem("loggedInUser", this.username);
        localStorage.setItem("userRole", user.role);
      } else {
        this.message = "Invalid credentials. Please try again.";
      }
    },
    logout() {
      this.isLoggedIn = false;
      this.isEditor = false;
      this.username = "";
      this.password = "";
      localStorage.removeItem("loggedInUser");
      localStorage.removeItem("userRole");
      this.message = "You have logged out.";
      setTimeout(() => {
        this.message = "";
      }, 3000);
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
.main-card {
  max-width: 700px;
  margin: auto;
  padding: 16px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
h2 {
  margin-bottom: 10px;
  font-size: 25px;
}
div {
  margin-bottom: 1em;
}
label {
  margin-bottom: 0.5em;
  color: #ccc;
  display: block;
}
button {
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.login {
  padding: 0.5em;
  background-color: #007bff;
  width: 100%;
}
input {
  border: 1px solid #cccccc;
  background: transparent;
  border-radius: 5px;
  width: 100%;
}
@media only screen and (min-width: 768px) {
  .upper-right {
    display: flex;
  }
  .logout,
  .add_user {
    width: 150px;
  }
  .add_user {
    background-color: #1b8a2a;
    margin-right: 10px;
  }
  .logout {
    background-color: #a5281f;
  }
  button {
    padding: 0.5em;
  }
}
@media only screen and (max-width: 768px) {
  .add_user {
    color: #1b8a2a;
    margin-right: 10px;
  }
  .logout {
    color: #a5281f;
  }
}
.login:hover {
  background-color: #0056b3;
}
.logout:hover {
  background: #8f231b;
}
.add_user:hover {
  background-color: #155724;
}
</style>
