<template>
  <div class="m-6 ">
    <h2
      class="hidden lg:block md:block sm:hidden tracking-widest pt-4 pb-4 uppercase font-sans font-semibold text-gray-700 text-3xl"
    >
      {{ $page.frontmatter.title }}
    </h2>

    <div class="cursor-pointer">
      <div
        class="m-5 bg-white menu-button overflow-hidden"
        v-for="article in $page.frontmatter.articles"
      >
        <div class="flex font-sans px-6 py-6 border-gray-300 border-b-2">
          <img
            class="block h-16 rounded-full shadow-default"
            :src="'../../images/' + article.image"
            :alt="article.title"
          />
          <div class="text-left">
            <div class="ml-4" @click="goToArticle(article.link)">
              <p class="text-2xl text-gray-700">{{ article.title }}</p>
              <p class="text-gray-600 pt-3 pb-5 text-xl">
                {{ article.date }} - {{ article.blurb }}
              </p>
            </div>
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
    },
  },
};
</script>
