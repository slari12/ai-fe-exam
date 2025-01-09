<template>
  <div>
    <div class="flex justify-between" style="margin-bottom: 5px">
      <h2>My Articles</h2>
      <router-link to="/create-article" class="create-article"
        >Create Article</router-link
      >
    </div>
    <div class="article-div" v-if="userArticles.length === 0">
      No Articles available at this moment
    </div>
    <div v-else>
      <div
        class="article-container flex"
        v-for="(article, index) in userArticles"
        :key="index"
        style="margin-bottom: 5px"
      >
        <img
          :src="article.thumbnail"
          alt="Article Thumbnail"
          class="news-thumbnail"
        />
        <div>
          <h3 class="news-title">{{ article.title }}</h3>
          <p class="news-content">{{ article.content }}</p>
          <div>
            <button @click="deleteArticle(index)" class="edit-button">
              Edit
            </button>
            <button @click="deleteArticle(index)" class="delete-button">
              Delete
            </button>
          </div>
        </div>
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
}
.article-div,
.article-container {
  background-color: #4242428a;
  color: white;
  border-radius: 5px;
  padding: 15px;
}
.create-article:hover {
  text-decoration: underline;
  background-color: transparent;
}
.create-article {
  color: #007bff;
}
.news-thumbnail {
  max-width: 200px;
  margin-right: 20px;
}
.news-title {
  font-size: 20px;
}
.news-content {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  margin-bottom: 5px;
  font-weight: 100;
}
.delete-button {
  background-color: #a5281f;
}
.delete-button:hover {
  background: #8f231b;
}
.edit-button:hover {
  background: #3e4246;
}
.edit-button {
  background-color: #494d52;
  margin-right: 5px;
}
.delete-button,
.edit-button {
  padding: 0.5em;
  width: 120px;

  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
