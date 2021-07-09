<template>
  <div>
    <ul class="divide-y divide-gray-100">
      <article class="p-4 flex space-x-4">
        <img
          src="images/ff-logo.png"
          alt="Front-End Foxes"
          class="w-16 md:w-32 lg:w-48 sm:hidden flex-none w-18 h-18 rounded-lg object-cover bg-gray-100"
          width="144"
          height="144"
        />
        <div class="min-w-0 relative flex-auto">
          <h2
            class="uppercase tracking-wide text-2xl font-semibold text-gray-700 mb-0.5"
          >
            Front-End Foxes School
          </h2>
          <h3 class="text-gray-600 pt-3 pb-5 text-xl">
            A new kind of boot camp, for women by women. Learn front-end
            technologies and build your portfolio in our professional
            instructor-led cohorts.
          </h3>
          <p
            @click="goToSite('https://frontendfoxes.school')"
            class="text-gray-600 cursor-pointer text-xl text-semibold underline pb-4"
          >
            learn more
          </p>
          <hr class="text-gray-400" />
        </div>
      </article>

      <article class="p-4 flex space-x-4">
        <img
          src="images/ada.png"
          alt="Ada Lovelace graphic"
          class="w-16 md:w-32 lg:w-48 sm:hidden flex-none w-18 h-18 rounded-lg object-cover bg-gray-100"
          width="144"
          height="144"
        />
        <div class="min-w-0 relative flex-auto">
          <h2
            class="uppercase tracking-wide text-2xl font-semibold text-gray-700 mb-0.5"
          >
            Web Development for Beginners: A Curriculum
          </h2>
          <h3 class="text-gray-600 pt-3 pb-5 text-xl">
            24 lessons, 12 weeks, web development for all. Built by a
            cross-company team at Microsoft that I led, free for all.
          </h3>
          <p
            @click="goToSite('https://aka.ms/webdev-beginners')"
            class="text-gray-600 cursor-pointer text-xl text-semibold underline pb-4"
          >
            learn more
          </p>

          <hr class="text-gray-400" />
        </div>
      </article>

      <article class="p-4 flex space-x-4">
        <img
          src="images/turing.png"
          alt="Turing graphic"
          class="w-16 md:w-32 lg:w-48 sm:hidden flex-none w-18 h-18 rounded-lg object-cover bg-gray-100"
          width="144"
          height="144"
        />
        <div class="min-w-0 relative flex-auto">
          <h2
            class="uppercase tracking-wide text-2xl font-semibold text-gray-700 mb-0.5"
          >
            Machine Learning for Beginners: A Curriculum
          </h2>
          <h3 class="text-gray-600 pt-3 pb-5 text-xl">
            25 lessons, 12 weeks, web development for all. Built by a
            cross-company team at Microsoft that I led, free for all.
          </h3>
          <p
            @click="goToSite('https://aka.ms/ml-beginners')"
            class="text-gray-600 cursor-pointer text-xl text-semibold underline pb-4"
          >
            learn more
          </p>

          <hr class="text-gray-400" />
        </div>
      </article>

      <article class="p-4 flex space-x-4">
        <img
          src="images/mazine_logo.png"
          alt="Professor Puff graphic"
          class="w-16 md:w-32 lg:w-48 sm:hidden flex-none w-18 h-18 rounded-lg object-cover bg-gray-100"
          width="144"
          height="144"
        />
        <div class="min-w-0 relative flex-auto">
          <h2
            class="uppercase tracking-wide text-2xl font-semibold text-gray-700 mb-0.5"
          >
            MaZine Learning
          </h2>
          <h3 class="text-gray-600 pt-3 pb-5 text-xl">
            Free printable zines to learn about machine learning with Professor
            Puff!
          </h3>
          <p
            @click="goToSite('https://zines.jenlooper.com')"
            class="text-gray-600 cursor-pointer text-xl text-semibold underline pb-4"
          >
            learn more
          </p>

          <hr class="text-gray-400" />
        </div>
      </article>

      <article class="p-4 flex space-x-4">
        <img
          src="images/ombro.png"
          alt="Ombromanie hand shadows graphic"
          class="w-16 md:w-32 lg:w-48 sm:hidden flex-none w-18 h-18 rounded-lg object-cover bg-gray-100"
          width="144"
          height="144"
        />
        <div class="min-w-0 relative flex-auto">
          <h2
            class="uppercase tracking-wide text-2xl font-semibold text-gray-700 mb-0.5"
          >
            Ombromanie: Hand Shadows
          </h2>
          <h3 class="text-gray-600 pt-3 pb-5 text-xl">
            Tell stories with your hands using Tensorflow.js in an Azure Static
            Web App with Azure Speech
          </h3>
          <p
            @click="goToSite('https://aka.ms/ombromanie')"
            class="text-gray-600 cursor-pointer text-xl text-semibold underline pb-4"
          >
            learn more
          </p>

          <hr class="text-gray-400" />
        </div>
      </article>
      <article class="p-4 flex space-x-4">
        <img
          src="images/snappy_logo.png"
          alt="Snappy Squirrel graphic"
          class="w-16 md:w-32 lg:w-48 sm:hidden flex-none w-18 h-18 rounded-lg object-cover bg-gray-100"
          width="144"
          height="144"
        />
        <div class="min-w-0 relative flex-auto">
          <h2
            class="uppercase tracking-wide text-2xl font-semibold text-gray-700 mb-0.5"
          >
            Snappy Squirrel
          </h2>
          <h3 class="text-gray-600 pt-3 pb-5 text-xl">
            Learn about personal finance for kids and parents with Snappy and
            friends!
          </h3>
          <p
            @click="goToSite('https://snappysquirrel.com')"
            class="text-gray-600 cursor-pointer text-xl text-semibold underline pb-4"
          >
            learn more
          </p>

          <hr class="text-gray-400" />
        </div>
      </article>
      <article class="p-4 flex space-x-4">
        <img
          src="images/practicebuddy_logo.png"
          alt="Practice Buddy graphic"
          class="w-16 md:w-32 lg:w-48 sm:hidden flex-none w-18 h-18 rounded-lg object-cover bg-gray-100"
          width="144"
          height="144"
        />
        <div class="min-w-0 relative flex-auto">
          <h2
            class="uppercase tracking-wide text-2xl font-semibold text-gray-700 mb-0.5"
          >
            Practice Buddy
          </h2>
          <h3 class="text-gray-600 pt-3 pb-5 text-xl">
            A web app for teachers and music students - track your practice
            time, record and email music snippets, improve your skills
          </h3>
          <p
            @click="goToSite('https://practicebuddyapp.com')"
            class="text-gray-600 cursor-pointer text-xl text-semibold underline pb-4"
          >
            learn more
          </p>

          <hr class="text-gray-400" />
        </div>
      </article>
      <article class="p-4 flex space-x-4">
        <img
          src="images/thinglearn_logo.png"
          alt="ThingLearn graphic"
          class="w-16 md:w-32 lg:w-48 sm:hidden flex-none w-18 h-18 rounded-lg object-cover bg-gray-100"
          width="144"
          height="144"
        />
        <div class="min-w-0 relative flex-auto">
          <h2
            class="uppercase tracking-wide text-2xl font-semibold text-gray-700 mb-0.5"
          >
            ThingLearn
          </h2>
          <h3 class="text-gray-600 pt-3 pb-5 text-xl">
            Learn about the internet of things with articles, projects, and cool
            maker ideas
          </h3>
          <p
            @click="goToSite('http://thinglearn.com')"
            class="text-gray-600 cursor-pointer text-xl text-semibold underline pb-4"
          >
            learn more
          </p>

          <hr class="text-gray-400" />
        </div>
      </article>
      <article class="p-4 flex space-x-4">
        <img
          src="images/quicknoms_logo.png"
          alt="QuickNoms graphic"
          class="w-16 md:w-32 lg:w-48 sm:hidden flex-none w-18 h-18 rounded-lg object-cover bg-gray-100"
          width="144"
          height="144"
        />
        <div class="min-w-0 relative flex-auto">
          <h2
            class="uppercase tracking-wide text-2xl font-semibold text-gray-700 mb-0.5"
          >
            QuickNoms
          </h2>
          <h3 class="text-gray-600 pt-3 pb-5 text-xl">
            Delicious recipes for students - 5 ingredients, 15 minutes, dinner
            is ready!
          </h3>
          <p
            @click="goToSite('https://quicknoms.com')"
            class="text-gray-600 cursor-pointer text-xl text-semibold underline pb-4"
          >
            learn more
          </p>

          <hr class="text-gray-400" />
        </div>
      </article>
    </ul>
  </div>
</template>
<script>
export default {
  name: "List",
  methods: {
    goToSite(link) {
      window.open(link, "_blank");
    },
  },
};
</script>

