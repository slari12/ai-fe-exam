<template>
  <div class="main-card">
    <h2>User Management</h2>
    <div v-if="users.length === 0">No users available.</div>
    <div v-else>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ user.username }}</td>
            <td>{{ user.role }}</td>
            <td>
              <button @click="deleteUser(index)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Add New User</h2>
    <form @submit.prevent="addUser">
      <div>
        <label for="username">Username:</label>
        <input
          class="transparent-input"
          type="text"
          id="username"
          v-model="newUser.username"
          required
        />
      </div>
      <div>
        <label for="password">Password:</label>
        <input
          type="password"
          class="transparent-input"
          id="password"
          v-model="newUser.password"
          required
        />
      </div>
      <div>
        <label for="role">Role:</label>
        <select
          id="role"
          v-model="newUser.role"
          required
          class="transparent-dropdown"
        >
          <option value="writer">Writer</option>
          <option value="editor">Editor</option>
        </select>
      </div>
      <button class="add" type="submit">Add User</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      newUser: {
        username: "",
        password: "",
        role: "writer",
      },
    };
  },
  created() {
    this.loadUsers();
  },
  methods: {
    loadUsers() {
      this.users = JSON.parse(localStorage.getItem("users")) || [];
    },
    addUser() {
      if (this.users.some((user) => user.username === this.newUser.username)) {
        alert("Username already exists. Please choose a different username.");
        return;
      }

      this.users.push(this.newUser);
      localStorage.setItem("users", JSON.stringify(this.users));
      this.newUser = {
        username: "",
        password: "",
        role: "writer",
      };
      this.$router.push("/user-management");
      alert("User added successfully!");
    },
    deleteUser(index) {
      this.users.splice(index, 1);
      localStorage.setItem("users", JSON.stringify(this.users));
      alert("User deleted successfully!");
    },
  },
};
</script>

<style>
.main-card {
  max-width: 600px;
  margin: auto;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
}
label {
  margin-bottom: 0.5em;
  color: #ccc;
  display: block;
}
.add {
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 0.5em;
  background-color: #1b8a2a;
  width: 100%;
  margin-top: 20px;
}
.add:hover {
  background-color: #155724;
}
input {
  border: 1px solid #cccccc;
  background-color: transparent;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 10px;
}
table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
}
th,
td {
  text-align: left;
  padding: 8px;
}
th {
  background-color: #4caf50;
  color: white;
}
.transparent-input {
  background-color: transparent;
  border: 1px solid #ccc;
  padding: 8px;
}

.transparent-dropdown {
  background-color: transparent;
  border: 1px solid #ccc;
  padding: 8px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
</style>
