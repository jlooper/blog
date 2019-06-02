<template>
  <div class="markdown-body">
    <h1 class="text-3xl pb-5 pt-5 ml-5">{{$page.frontmatter.title}}</h1>

    <div
      class="m-5 bg-white shadow-lg rounded-lg overflow-hidden"
      v-for="article in $page.frontmatter.articles"
    >
      <div class="sm:flex sm:items-center px-6 py-4">
        <img
          class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
          :src="'../../images/'+article.image"
          :alt="article.title"
        >
        <div class="text-center sm:text-left sm:flex-grow">
          <div class="mb-4">
            <p class="text-xl leading-tight text-gray-800">{{article.title}}</p>
            <p class="text-base leading-tight text-gray-700">{{article.date}} - {{ article.blurb }}</p>
          </div>
          <div>
            <button
              @click="goToArticle(article.link)"
              class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white"
            >Read More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogLayout",
  methods: {
    goToArticle(link) {
      window.open(link, "_blank");
    }
  }
};
</script>
