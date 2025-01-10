<template>
  <div class="main-card">
    <h2 class="text-center">Create Article</h2>
    <form @submit.prevent="submitArticle">
      <div>
        <label for="thumbnail">Thumbnail (Image URL):</label>
        <input type="text" id="thumbnail" v-model="thumbnail" required />
      </div>
      <div>
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="title" required />
      </div>
      <div>
        <label for="content">Content:</label>
        <textarea
          cols="30"
          rows="10"
          id="content"
          v-model="content"
          required
        ></textarea>
      </div>
      <button type="submit" class="submit">Save Draft</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thumbnail: "",
      title: "",
      content: "",
      currentUser: "user_writer",
    };
  },
  methods: {
    submitArticle() {
      const articles = JSON.parse(localStorage.getItem("articles")) || [];
      const newArticle = {
        user: this.currentUser,
        thumbnail: this.thumbnail,
        title: this.title,
        content: this.content,
      };
      articles.push(newArticle);
      localStorage.setItem("articles", JSON.stringify(articles));

      this.thumbnail = "";
      this.title = "";
      this.content = "";
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style scoped>
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
.submit {
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 0.5em;
  background-color: #1b8a2a;
  width: 100%;
}
.submit:hover {
  background-color: #155724;
}
input,
textarea {
  border: 1px solid #cccccc;
  background: transparent;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 10px;
}
</style>
