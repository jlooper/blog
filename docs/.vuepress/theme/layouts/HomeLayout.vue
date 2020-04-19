<template>
  <div>
    <div class="mt-0 lg:mt-2 md:mt-0 sm:mt-0">
      <div class="flex">
        <div class="w-full lg:w-1/2 px-2">
          <div class="float-right">
            <div class="pt-5">
              <Img src="./images/jen-bg.png" />
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 px-2">
          <h1 class="pt-5 text-white text-left">Hi, I'm Jen</h1>
          <p
            class="text-2xl lg:text-2xl md:text-xl sm:text-base p-2 text-white text-left"
          >Developer Advocate</p>
          <p
            class="text-2xl lg:text-2xl md:text-xl sm:text-base p-2 text-white text-left"
          >Speaker and Author</p>

          <p
            class="text-2xl lg:text-2xl md:text-xl sm:text-base p-2 text-white text-left"
          >Builder of Interesting Things</p>
        </div>
      </div>
    </div>

    <Cards class="m-10" />
  </div>
</template>

<script>
import Cards from "../components/Cards.vue";

export default {
  components: { Cards },
  name: "HomeLayout"
};
</script>
