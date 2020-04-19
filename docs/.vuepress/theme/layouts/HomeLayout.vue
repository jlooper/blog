<template>
  <div>
    <div class="mt-0 lg:mt-2 md:mt-0 sm:mt-0">
      <div class="flex -mx-2">
        <div class="w-full lg:w-1/2 px-2">
          <div class="h-56 float-right">
            <div class="cursor-pointer" @click="goToSite('https://yomamaisa.dev')">
              <div class>
                <Img src="./images/jen-bg.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 px-2">
          <div class="h-56">
            <div class="cursor-pointer" @click="goToSite('https://www.quicknoms.com')">
              <div class="inline-block align-top">
                <h2
                  class="text-3xl lg:text-3xl md:text-2xl sm:xl p-2 text-white text-left"
                >Hi, I'm Jen</h2>
                <p
                  class="text-2xl lg:text-2xl md:text-xl sm:text-base p-2 text-white text-left"
                >Developer Advocate</p>
                <p
                  class="text-2xl lg:text-2xl md:text-xl sm:text-base p-2 text-white text-left"
                >Speaker</p>
                <p
                  class="text-2xl lg:text-2xl md:text-xl sm:text-base p-2 text-white text-left"
                >Author</p>
                <p
                  class="text-2xl lg:text-2xl md:text-xl sm:text-base p-2 text-white text-left"
                >Builder of Interesting Things</p>
              </div>
            </div>
          </div>
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
