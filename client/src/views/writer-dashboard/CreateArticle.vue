<template>
  <div>
    <h3>Create an Article</h3>
    <form @submit.prevent="createArticle">
      <div>
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="title" required />
      </div>
      <div>
        <label for="content">Content:</label>
        <textarea id="content" v-model="content" required></textarea>
      </div>
      <button type="submit" class="submit">Submit Article</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    createArticle() {
      console.log("Article Created:", {
        title: this.title,
        content: this.content,
      });
      this.title = "";
      this.content = "";
    },
  },
};
</script>

<style scoped>
button {
  padding: 0.5em;
  color: white;
  width: 100%;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #1b8a2a;
}
.submit:hover {
  background-color: #187c25;
}
</style>
