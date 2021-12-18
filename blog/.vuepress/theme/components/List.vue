<template>
  <div>
    <ul class="divide-y divide-gray-100">
      <article class="p-4 flex space-x-4">
        <img
          src="images/ff-logo.png"
          alt="Front-End Foxes"
          width="144"
          height="144"
        />
        <div class="min-w-0 relative flex-auto">
          <h2>Front-End Foxes School</h2>
          <h3>
            A new kind of boot camp, for women by women. Learn front-end
            technologies and build your portfolio in our professional
            instructor-led cohorts.
          </h3>
          <p @click="goToSite('https://frontendfoxes.school')" class="link">
            learn more
          </p>
          <hr />
        </div>
      </article>

      <article class="p-4 flex space-x-4">
        <img
          src="images/ada.png"
          alt="Ada Lovelace graphic"
          width="144"
          height="144"
        />
        <div class="min-w-0 relative flex-auto">
          <h2>Web Development for Beginners: A Curriculum</h2>
          <h3>
            24 lessons, 12 weeks, web development for all. Built by a
            cross-company team at Microsoft that I led, free for all.
          </h3>
          <p @click="goToSite('https://aka.ms/webdev-beginners')" class="link">
            learn more
          </p>

          <hr />
        </div>
      </article>

      <article class="p-4 flex space-x-4">
        <img
          src="images/turing.png"
          alt="Turing graphic"
          width="144"
          height="144"
        />
        <div class="min-w-0 relative flex-auto">
          <h2>Machine Learning for Beginners: A Curriculum</h2>
          <h3>
            25 lessons, 12 weeks, machine learning for all. Built by a
            cross-company team at Microsoft that I led, free for all.
          </h3>
          <p @click="goToSite('https://aka.ms/ml-beginners')" class="link">
            learn more
          </p>

          <hr />
        </div>
      </article>

      <article class="p-4 flex space-x-4">
        <img
          src="images/mazine_logo.png"
          alt="Professor Puff graphic"
          width="144"
          height="144"
        />
        <div class="min-w-0 relative flex-auto">
          <h2>MaZine Learning</h2>
          <h3>
            Free printable zines to learn about machine learning with Professor
            Puff!
          </h3>
          <p @click="goToSite('https://zines.jenlooper.com')" class="link">
            learn more
          </p>

          <hr class="text-gray-400" />
        </div>
      </article>

      <article class="p-4 flex space-x-4">
        <img
          src="images/snappy_logo.png"
          alt="Snappy Squirrel graphic"
          width="144"
          height="144"
        />
        <div class="min-w-0 relative flex-auto">
          <h2>Snappy Squirrel</h2>
          <h3>
            Learn about personal finance for kids and parents with Snappy and
            friends!
          </h3>
          <p @click="goToSite('https://snappysquirrel.com')" class="link">
            learn more
          </p>

          <hr />
        </div>
      </article>
      <article class="p-4 flex space-x-4">
        <img
          src="images/practicebuddy_logo.png"
          alt="Practice Buddy graphic"
          width="144"
          height="144"
        />
        <div class="min-w-0 relative flex-auto">
          <h2>Practice Buddy</h2>
          <h3>
            A web app for teachers and music students - track your practice
            time, record and email music snippets, improve your skills
          </h3>
          <p @click="goToSite('https://practicebuddyapp.com')" class="link">
            learn more
          </p>

          <hr class="text-gray-400" />
        </div>
      </article>
      <article class="p-4 flex space-x-4">
        <img
          src="images/thinglearn_logo.png"
          alt="ThingLearn graphic"
          width="144"
          height="144"
        />
        <div class="min-w-0 relative flex-auto">
          <h2>ThingLearn</h2>
          <h3>
            Learn about the internet of things with articles, projects, and cool
            maker ideas
          </h3>
          <p @click="goToSite('http://thinglearn.jenlooper.com')" class="link">
            learn more
          </p>

          <hr />
        </div>
      </article>
      <article class="p-4 flex space-x-4">
        <img
          src="images/quicknoms_logo.png"
          alt="QuickNoms graphic"
          width="144"
          height="144"
        />
        <div class="min-w-0 relative flex-auto">
          <h2>QuickNoms</h2>
          <h3>
            Delicious recipes for students - 5 ingredients, 15 minutes, dinner
            is ready!
          </h3>
          <p @click="goToSite('https://quicknoms.jenlooper.com')" class="link">
            learn more
          </p>

          <hr />
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

<style scoped>
hr {
  @apply text-gray-400;
}
img {
  @apply object-scale-down w-16
            md:w-32
            lg:w-48
            sm:hidden
            
            ;
}
h2 {
  @apply uppercase
              tracking-wide
              text-2xl
              sm:text-lg
              font-semibold
              text-gray-700
              mb-1;
}

h3 {
  @apply text-gray-600 pt-3 pb-5 text-xl sm:text-lg;
}

.link {
  @apply text-gray-600
              cursor-pointer
              text-xl
              sm:text-lg
              font-semibold
              underline
              pb-4;
}
</style>

