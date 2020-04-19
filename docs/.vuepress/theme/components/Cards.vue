<template>
  <div class="container flex-wrap mx-auto w-full lg:w-full">
    <div class="px-2 mt-0 lg:mt-2 md:mt-0 sm:mt-0">
      <div class="flex flex-wrap -mx-2">
        <div class="w-full lg:w-1/2 px-2">
          <div class="h-56 lg:h-56 md:h-56 sm:h-auto bg-gray-100 card">
            <div
              class="inline-block align-top cursor-pointer"
              @click="goToSite('https://frontendfoxes.org')"
            >
              <p
                class="text-4xl lg:text-4xl md:text-2xl sm:text-xl p-2 text-center font-bold underline"
              >Front-End Foxes</p>

              <p
                class="inline-block text-2xl lg:text-2xl md:text-lg sm:text-lg p-2 align-top"
              >An international 501(c)(3) nonprofit offering workshops on front-end technologies for women.</p>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 px-2">
          <div class="h-56 lg:h-56 md:h-56 sm:h-auto bg-gray-100 card">
            <div
              class="inline-block align-top cursor-pointer"
              @click="goToSite('https://practicebuddyapp.com')"
            >
              <p
                class="text-4xl lg:text-4xl md:text-2xl sm:text-xl p-2 text-center font-bold underline"
              >Practice Buddy</p>

              <p
                class="inline-block text-2xl lg:text-2xl md:text-lg sm:text-lg p-2 align-top"
              >An app for music teachers and students. Monitor, record progress, get feedback.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--row 1-->
    <div class="px-2 mt-0 lg:mt-2 md:mt-0 sm:mt-0">
      <div class="flex flex-wrap -mx-2">
        <div class="w-full lg:w-1/2 px-2">
          <div class="h-56 lg:h-56 md:h-56 sm:h-auto bg-gray-100 card">
            <div class="cursor-pointer" @click="goToSite('https://yomamaisa.dev')">
              <div class>
                <p
                  class="text-4xl lg:text-4xl md:text-2xl sm:text-xl p-2 font-bold text-center underline"
                >Yo, Mama is a Dev!</p>
                <p
                  class="inline-block text-2xl lg:text-2xl md:text-lg sm:text-lg p-2 align-top"
                >Celebrating developer moms.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 px-2">
          <div class="h-56 lg:h-56 md:h-56 sm:h-auto bg-gray-100 card">
            <div class="cursor-pointer" @click="goToSite('https://www.quicknoms.com')">
              <div class="inline-block align-top">
                <p
                  class="underline text-4xl lg:text-4xl md:text-2xl sm:text-xl p-2 font-bold text-center"
                >QuickNoms</p>
                <p
                  class="inline-block text-2xl lg:text-2xl md:text-lg sm:text-lg p-2 align-top"
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
          <div class="h-56 lg:h-56 md:h-56 sm:h-auto bg-gray-100 card">
            <div class="cursor-pointer" @click="goToSite('https://www.snappysquirrel.com')">
              <div class>
                <p
                  class="text-4xl lg:text-4xl md:text-2xl sm:text-xl p-2 font-bold text-center underline"
                >Snappy Squirrel</p>
                <p
                  class="inline-block text-2xl lg:text-2xl md:text-lg sm:text-lg p-2 align-top"
                >Apps teaching personal finance for kids.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 px-2">
          <div class="h-56 lg:h-56 md:h-56 sm:h-auto bg-gray-100 card">
            <div class="cursor-pointer" @click="goToSite('https://www.thinglearn.com')">
              <div class="inline-block align-top">
                <p
                  class="text-4xl lg:text-4xl md:text-2xl sm:text-xl p-2 font-bold text-center underline"
                >ThingLearn</p>
                <p
                  class="inline-block text-2xl lg:text-2xl md:text-lg sm:text-lg p-2 align-top"
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

