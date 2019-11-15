<template>
  <div class="container flex-wrap mx-auto w-full lg:w-2/3">
    <div class="flex flex-wrap px-2">
      <div class="w-full">
        <div
          class="bg-center bg-cover bg-no-repeat rounded-lg shadow"
          style="background-image:url('/images/ba.jpg')"
        >
          <div
            class="inline-block align-top cursor-pointer"
            @click="goToSite('http://vuevixens.org')"
          >
            <p class="text-white text-4xl p-2 text-center font-bold underline">Vue Vixens</p>

            <p class="text-white inline-block text-2xl lg:w-1/2 p-2 align-top">
              Vue Vixens offers free workshops and meetups for
              foxy people who identify as women. Join us at a conference or meetup near you! We are a 501(c)(3) organization with chapters worldwide.
            </p>
            <p class="inline-block text-center">
              <img height="170px" width="166px" src="/images/vuevixens_logo.png">
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--row 1-->
    <div class="px-2 mt-0 lg:mt-2 md:mt-0 sm:mt-0">
      <div class="flex flex-wrap -mx-2">
        <div class="w-full lg:w-1/2 px-2">
          <div class="h-56 rounded-lg rounded-tr-none border bg-gray-100 shadow">
            <div class="cursor-pointer" @click="goToSite('https://yomamaisa.dev')">
              <div class>
                <p class="text-3xl p-2 font-bold text-center underline">Yo, Mama is a Dev!</p>
                <p class="text-2xl p-2 text-center">Celebrating developer moms.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 px-2">
          <div class="h-56 rounded-lg rounded-tr-none border bg-gray-100 shadow">
            <div class="cursor-pointer" @click="goToSite('https://www.quicknoms.com')">
              <div class="inline-block align-top">
                <p class="underline text-3xl p-2 font-bold text-center">QuickNoms</p>
                <p
                  class="text-2xl p-2 text-center"
                >5 Ingredients, 15 Minutes: QuickNoms! Recipes for busy people.</p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    <!--row 2-->
    <div class="px-2 mt-0 lg:mt-2 md:mt-0 sm:mt-0">
      <div class="flex flex-wrap -mx-2">
        <div class="w-full lg:w-1/2 px-2">
          <div class="h-56 rounded-lg rounded-tr-none border bg-gray-100 shadow">
            <div class="cursor-pointer" @click="goToSite('https://www.snappysquirrel.com')">
              <div class>
                <p class="text-3xl p-2 font-bold text-center underline">Snappy Squirrel</p>
                <p class="text-2xl p-2 text-center">Apps teaching personal finance for kids.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 px-2">
          <div class="h-56 rounded-lg rounded-tr-none border bg-gray-100 shadow">
            <div class="cursor-pointer" @click="goToSite('https://www.thinglearn.com')">
              <div class="inline-block align-top">
                <p class="text-3xl p-2 font-bold text-center underline">ThingLearn</p>
                <p
                  class="text-2xl p-2 text-center"
                >Activities teaching kids about the internet of things.</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>
</template>
<script>
export default {
  name: "Cards",
  methods: {
    goToSite(link) {
      window.open(link, "_blank");
    }
  }
};
</script>
