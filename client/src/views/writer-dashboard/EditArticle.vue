<template>
  <div class="edit-article">
    <h2 class="text-center">Edit Article</h2>
    <form @submit.prevent="saveDraft">
      <div>
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="article.title" required />
      </div>
      <div>
        <label for="thumbnail">Thumbnail URL:</label>
        <input
          type="text"
          id="thumbnail"
          v-model="article.thumbnail"
          required
        />
      </div>
      <div>
        <label for="content">Content:</label>
        <textarea
          cols="30"
          rows="10"
          id="content"
          v-model="article.content"
          required
        ></textarea>
      </div>
      <button type="submit" class="save-draft">Save Draft</button>
      <button @click="publishArticle" class="publish-article">
        Publish Article
      </button>
    </form>
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
    this.article = { ...articles[articleId] };
  },
  methods: {
    saveDraft() {
      const articleId = this.$route.params.id;
      const articles = JSON.parse(localStorage.getItem("articles")) || [];
      articles[articleId] = this.article;
      localStorage.setItem("articles", JSON.stringify(articles));
      alert("Draft saved successfully!");
      this.$router.push({ name: "login" });
    },
    publishArticle() {
      const articleId = this.$route.params.id;
      const articles = JSON.parse(localStorage.getItem("articles")) || [];
      const publishedArticles =
        JSON.parse(localStorage.getItem("publishedArticles")) || [];

      publishedArticles.push(articles[articleId]);
      localStorage.setItem(
        "publishedArticles",
        JSON.stringify(publishedArticles)
      );

      articles.splice(articleId, 1);
      localStorage.setItem("articles", JSON.stringify(articles));

      alert("Article published successfully!");
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style scoped>
.edit-article {
  max-width: 600px;
  margin: auto;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.save-draft,
.publish-article {
  margin-top: 10px;
}
.save-draft,
.publish-article {
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 0.5em;
  background-color: #1b8a2a;
  width: 100%;
}
.save-draft:hover,
.publish-article:hover {
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
