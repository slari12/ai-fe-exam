<template>
  <div>
    <div class="flex justify-between">
      <h2 class="">My Articles</h2>
      <button class="create-article">Create Article</button>
    </div>
    <div class="article-div">No Articles available at this moment</div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.article-div {
  margin: 10px 0px;
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
