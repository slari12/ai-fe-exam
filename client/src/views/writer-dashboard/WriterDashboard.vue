<template>
  <div>
    <div class="flex justify-between">
      <h2>My Articles</h2>
      <router-link to="/create-article" class="create-article"
        >Create Article</router-link
      >
    </div>
    <div class="article-div" v-if="userArticles.length === 0">
      No Articles available at this moment
    </div>
    <div v-else>
      <div v-for="(article, index) in userArticles" :key="index">
        <img :src="article.thumbnail" alt="Article Thumbnail" />
        <h3>{{ article.title }}</h3>
        <p>{{ article.content }}</p>
        <button @click="deleteArticle(index)" class="delete-button">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
      currentUser: "user_writer",
    };
  },
  computed: {
    userArticles() {
      return this.articles.filter(
        (article) => article.user === this.currentUser
      );
    },
  },
  created() {
    this.loadArticles();
  },
  methods: {
    loadArticles() {
      this.articles = JSON.parse(localStorage.getItem("articles")) || [];
    },
    deleteArticle(index) {
      this.articles.splice(index, 1);
      localStorage.setItem("articles", JSON.stringify(this.articles));
      alert("Article deleted successfully!");
    },
  },
};
</script>

<style>
.article-div {
  margin: 10px 0;
  padding: 0.5rem;
  text-align: center;
  border-radius: 5px;
  background-color: #4242428a;
}
.create-article:hover {
  text-decoration: underline;
}
.create-article {
  color: #007bff;
}
</style>
