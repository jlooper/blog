<template>
  <div class="markdown-body flex flex-col justify-start">
    <div class="flex flex-wrap py-4">
      <div class="w-1/3 ml-auto">
        <h1 class="text-3xl lg:text-5xl pt-5 pb-5">Jen Looper</h1>
        <div v-for="item in $page.frontmatter.tagline">
          <h2 class="text-2xl lg:text-3xl text-green-900">{{item.title}}</h2>
        </div>
      </div>

      <div class="w-1/3 ml-auto">
        <div
          class="bg-cover bg-no-repeat rounded-lg mt-8 rounded-tr-none lg:w-1/2 h-64 p-2 bg-gray shadow"
          style="background-image:url('/images/jenlooper.jpg')"
        ></div>
      </div>
    </div>
    <div class="pt-10">
      <p class="text-4xl text-center text-green-800">Featured Projects and Initiatives</p>
    </div>
    <Cards class="m-10"/>
  </div>
</template>

<script>
import Cards from "../components/Cards.vue";

export default {
  components: { Cards },
  name: "HomeLayout"
};
</script>