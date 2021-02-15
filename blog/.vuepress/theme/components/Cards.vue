<template>
  <div class="p-5 flex-wrap mx-auto w-full">
    <p class="header-text -mx-5" />
    <div class="pt-10">
      <p class="text-4xl text-center text-white">
        Featured Projects and Initiatives
      </p>
    </div>

    <div class="px-2 mt-0 lg:mt-2 md:mt-0 sm:mt-0">
      <div class="flex flex-wrap -mx-2">
        <div class="w-full lg:w-1/2 px-2">
          <div
            class="flex p-6 bg-white card cursor-pointer"
            @click="goToSite('https://frontendfoxes.org')"
          >
            <div class="w-full">
              <img
                src="/images/ff-logo.png"
                alt="Front-End Foxes"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="inline-block align-top">
              <p
                class="text-4xl lg:text-4xl md:text-2xl sm:text-xl p-2 font-bold text-center underline"
              >
                Front-End Foxes School
              </p>
              <p
                class="inline-block text-2xl lg:text-2xl md:text-lg sm:text-lg p-2 align-top"
              >
                A new kind of boot camp, for women developers by women
                developers.
              </p>
            </div>
          </div>
        </div>

        <div class="w-full lg:w-1/2 px-2">
          <div
            class="flex p-6 bg-white card cursor-pointer"
            @click="goToSite('https://vuevixens.org')"
          >
            <div class="w-full">
              <img
                src="/images/vv-logo.png"
                alt="Vue Vixens"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="inline-block align-top">
              <p
                class="text-4xl lg:text-4xl md:text-2xl sm:text-xl p-2 font-bold text-center underline"
              >
                Front-End Foxes
              </p>
              <p
                class="inline-block text-2xl lg:text-2xl md:text-lg sm:text-lg p-2 align-top"
              >
                An international 501(c)(3) nonprofit for women developers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--row 1-->
    <div class="px-2 mt-0 lg:mt-2 md:mt-0 sm:mt-0">
      <div class="flex flex-wrap -mx-2">
        <div class="w-full lg:w-1/2 px-2">
          <div
            class="flex p-6 bg-white card cursor-pointer"
            @click="goToSite('https://aka.ms/webdev-beginners')"
          >
            <div class="w-40">
              <img
                src="/images/ada.png"
                alt="Web Dev for Beginners"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="inline-block align-top">
              <p
                class="text-4xl lg:text-4xl md:text-2xl sm:text-xl p-2 font-bold text-center underline"
              >
               Web Dev for Beginners
              </p>
              <p
                class="inline-block text-2xl lg:text-2xl md:text-lg sm:text-lg p-2 align-top"
              >
                A curriculum built by our team at Microsoft
              </p>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 px-2">
          <div
            class="flex p-6 bg-white card cursor-pointer"
            @click="goToSite('https://aka.ms/ombromanie-code')"
          >
            <div class="w-40">
              <img
                src="/images/ombro.png"
                alt="Ombromanie"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="inline-block align-top">
              <p
                class="text-4xl lg:text-4xl md:text-2xl sm:text-xl p-2 font-bold text-center underline"
              >
               Ombromanie: Hand Shadows
              </p>
              <p
                class="inline-block text-2xl lg:text-2xl md:text-lg sm:text-lg p-2 align-top"
              >
                Telling stories with your hands, on the web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--row 2-->
    <div class="px-2 mt-0 lg:mt-2 md:mt-0 sm:mt-0">
      <div class="flex flex-wrap -mx-2">
        <div class="w-full lg:w-1/2 px-2">
          <div
            class="flex p-6 bg-white card cursor-pointer"
            @click="goToSite('https://practicebuddyapp.com')"
          >
            <div class="w-40">
              <img
                src="/images/practicebuddy_logo.png"
                alt="Practice Buddy"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="inline-block align-top">
              <p
                class="text-4xl lg:text-4xl md:text-2xl sm:text-xl p-2 font-bold text-center underline"
              >
                Practice Buddy
              </p>
              <p
                class="inline-block text-2xl lg:text-2xl md:text-lg sm:text-lg p-2 align-top"
              >
                An app for music teachers and students.
              </p>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 px-2">
          <div
            class="flex p-6 bg-white card cursor-pointer"
            @click="goToSite('https://snappysquirrel.com')"
          >
            <div class="w-40">
              <img
                src="/images/snappy_logo.png"
                alt="Snappy Squirrel"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="inline-block align-top">
              <p
                class="text-4xl lg:text-4xl md:text-2xl sm:text-xl p-2 font-bold text-center underline"
              >
                Snappy Squirrel
              </p>
              <p
                class="inline-block text-2xl lg:text-2xl md:text-lg sm:text-lg p-2 align-top"
              >
                E-Books teaching personal finance for kids.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--row 3-->
    <div class="px-2 mt-0 lg:mt-2 md:mt-0 sm:mt-0">
      <div class="flex flex-wrap -mx-2">
        <div class="w-full lg:w-1/2 px-2">
          <div
            class="flex p-6 bg-white card cursor-pointer"
            @click="goToSite('https://zines.jenlooper.com')"
          >
            <div class="w-40">
              <img
                src="/images/mazine_logo.png"
                alt="Mazines"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="inline-block align-top">
              <p
                class="text-4xl lg:text-4xl md:text-2xl sm:text-xl p-2 font-bold text-center underline"
              >
                MaZine Learning
              </p>
              <p
                class="inline-block text-2xl lg:text-2xl md:text-lg sm:text-lg p-2 align-top"
              >
                Learn about Machine Learning with Free Printable Zines.
              </p>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 px-2">
          <div
            class="flex p-6 bg-white card cursor-pointer"
            @click="goToSite('https://thinglearn.com')"
          >
            <div class="w-40">
              <img
                src="/images/thinglearn_logo.png"
                alt="Thing Learn"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="inline-block align-top">
              <p
                class="text-4xl lg:text-4xl md:text-2xl sm:text-xl p-2 font-bold text-center underline"
              >
                ThingLearn
              </p>
              <p
                class="inline-block text-2xl lg:text-2xl md:text-lg sm:text-lg p-2 align-top"
              >
                Activities teaching kids about the internet of things.
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
    },
  },
};
</script>

