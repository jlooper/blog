<template>
  <div class="markdown-body article">
    <h1 class="text-3xl text-white pb-5 pt-5 ml-5 text-sans">{{$page.frontmatter.title}}</h1>
    <div class="text-gray-800 p-5">
      <Content />
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleLayout"
};
</script>
