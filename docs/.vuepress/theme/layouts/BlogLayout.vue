<template>
  <div>
    <h1 class="text-3xl text-white pb-5 pt-5 ml-5">{{$page.frontmatter.title}}</h1>

    <div
      class="m-5 bg-white menu-button overflow-hidden"
      v-for="article in $page.frontmatter.articles"
    >
      <div class="flex px-6 py-6">
        <img
          class="block h-16 rounded-full"
          :src="'../../images/'+article.image"
          :alt="article.title"
        />
        <div class="text-left">
          <div class="ml-4">
            <p class="text-xl text-gray-800">{{article.title}}</p>
            <p class="text-base text-gray-700">{{article.date}} - {{ article.blurb }}</p>
          </div>
          <div class="m-4">
            <button
              @click="goToArticle(article.link)"
              class="px-4 py-1 border border-black yellow hover:bg-white hover:text-black"
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
    //todo fix for local articles
    goToArticle(link) {
      window.open(link, "_blank");
    }
  }
};
</script>
