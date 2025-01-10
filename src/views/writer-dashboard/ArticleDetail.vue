<template>
  <div style="max-width: 700px; margin: auto">
    <button @click="goBack" class="back-button">Back to Dashboard</button>
    <div class="article-detail">
      <div class="flex justify-between items-center">
        <h2 class="article-title">{{ article.title }}</h2>
        <h2 @click="editArticle" class="edit-article">Edit Article</h2>
      </div>
      <img
        :src="article.thumbnail"
        alt="Article Thumbnail"
        class="article-img"
      />
      <p>{{ article.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {},
    };
  },
  created() {
    const articleId = this.$route.params.id;
    const articles = JSON.parse(localStorage.getItem("articles")) || [];
    this.article = articles[articleId];
  },
  methods: {
    goBack() {
      this.$router.push({ name: "login" });
    },
    editArticle() {
      this.$router.push({
        name: "EditArticle",
        params: { id: this.$route.params.id },
      });
    },
  },
};
</script>

<style scoped>
.article-detail {
  max-width: 800px;
  margin: auto;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.edit-article {
  color: #007bff;
  cursor: pointer;
}
.edit-article:hover {
  text-decoration: underline;
}
.article-img {
  margin-bottom: 20px;
}
.article-title {
  font-size: 30px;
  margin-bottom: 15px;
}
.back-button {
  margin-bottom: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 0.5em 1em;
}
.back-button:hover {
  background-color: #0056b3;
}
</style>
