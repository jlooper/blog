<template>
  <div class="container mx-auto w-full lg:w-2/3">
    <div class="px-2">
      <div class="flex flex-wrap -mx-2">
        <div class="w-full lg:w-2/3 px-2">
          <div
            class="bg-center bg-cover bg-no-repeat rounded-lg rounded-tr-none shadow"
            style="background-image:url('/images/ba.jpg')"
          >
            <div
              class="inline-block align-top cursor-pointer"
              @click="goToSite('http://vuevixens.org')"
            >
              <p class="text-white text-3xl p-2 font-bold">Vue Vixens</p>

              <p class="text-white inline-block text-2xl lg:w-1/2 p-2">
                Vue Vixens offers free workshops and meetups for
                foxy people who identify as women.
              </p>
              <p class="inline-block text-center">
                <img height="170px" width="166px" src="/images/vuevixens_logo.png">
              </p>
            </div>
          </div>
        </div>

        <div
          class="w-full lg:w-1/3 px-2 mt-2 lg:mt-0 cursor-pointer"
          @click="goToSite('https://www.quicknoms.com')"
        >
          <div class="rounded-lg rounded-tr-none shadow">
            <div class="text-white bg-green-800 rounded-lg rounded-tr-none shadow">
              <p class="text-3xl p-2 font-bold">QuickNoms</p>
              <p class="text-2xl p-2">
                5 Ingredients, 15 Minutes: QuickNoms! Fast recipes for students.
                <br>🍳
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--next row-->
      <div class="flex flex-wrap -mx-2 mt-2">
        <div
          class="w-full lg:w-1/3 px-2 lg:mt-2 cursor-pointer"
          @click="goToSite('http://yomamaisa.dev')"
        >
          <div class="rounded-lg rounded-tr-none shadow">
            <div class="text-white bg-blue-800 rounded-lg rounded-tr-none">
              <p class="text-3xl p-1 font-bold">Yo, Mama is a Dev!</p>
              <p class="text-2xl p-2">
                Celebrating awesome developer moms.
                <br>👩‍💻
              </p>
            </div>
          </div>
        </div>

        <div
          class="w-full lg:w-2/3 px-2 mt-2 cursor-pointer"
          @click="goToSite('http://thinglearn.com')"
        >
          <div
            class="bg-center bg-cover bg-no-repeat rounded-lg rounded-tr-none shadow"
            style="background-image:url('/images/plant.jpg')"
          >
            <div class="inline-block align-top">
              <p class="text-white text-3xl p-2 font-bold">ThingLearn</p>
              <p
                class="inline-block text-white text-2xl lg:w-1/2 p-2"
              >ThingLearn is a suite of activities designed to teach kids about the internet of things.</p>
              <p class="inline-block">
                <img src="/images/thinglearn_logo.png">
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--last row-->
      <div class="flex flex-wrap -mx-2 mt-4">
        <div
          class="w-full lg:w-2/3 px-2 cursor-pointer"
          @click="goToSite('http://practicebuddyapp.com')"
        >
          <div
            class="bg-center bg-cover bg-no-repeat rounded-lg rounded-tr-none shadow"
            style="background-image:url('/images/piano.jpg')"
          >
            <div class="inline-block align-top">
              <p class="text-white text-3xl p-2 font-bold">PracticeBuddy</p>
              <p
                class="inline-block text-white text-2xl lg:w-1/2 p-2"
              >Practice Buddy is a mobile app for music teachers and students. Communicate, Incentivize!</p>
              <p class="inline-block text-center">
                <img src="/images/practicebuddy_logo.png">
              </p>
            </div>
          </div>
        </div>

        <div
          class="w-full lg:w-1/3 px-2 mt-2 lg:mt-0 cursor-pointer"
          @click="goToSite('http://mandala-me.netlify.com')"
        >
          <div class="rounded-lg rounded-tr-none shadow">
            <div class="text-white bg-blue-900 rounded-lg rounded-tr-none">
              <p class="text-3xl p-2 font-bold">MandalaMe</p>
              <p class="text-2xl p-2">
                Apps for making beautiful online mandalas.
                <br>🎨
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
  name: "Cards",
  methods: {
    goToSite(link) {
      window.open(link, "_blank");
    }
  }
};
</script>
