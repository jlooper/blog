<template>
  <div class="markdown-body flex flex-col">
    <div class="flex content-start yellow flex-wrap mt-5">
      <div class="w-1/4"></div>

      <div class="w-1/2 m-2 border rounded shadow bg-white">
        <div class="max-w-sm w-full lg:max-w-full lg:flex">
          <div
            class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style="background-image: url('/images/jenlooper.jpg')"
            title="Jen Looper"
          ></div>
          <div class="bg-white rounded p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
              <div class="font-bold text-5xl mb-2">hi, I'm Jen</div>
              <div v-for="item in $page.frontmatter.tagline">
                <h2 class="text-2xl">{{item.title}}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/4 yellow"></div>
    </div>

    <div class="pt-10">
      <p class="text-4xl text-center">Featured Projects and Initiatives</p>
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