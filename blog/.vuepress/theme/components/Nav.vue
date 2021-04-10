<template>
  <nav
    class="sticky border-gray-300 border-b-2 flex items-center justify-between flex-wrap text-left pr-0 lg:pr-5 md:pr-3 sm:pr-0 bg-white z-20"
  >
    <div
      class="w-1/2 md:w-1/4 block"
    ></div>

    <div v-on:click="openNav()" class="lg:hidden">
      <button class="menu-button flex px-3 py-3 mt-3 mr-2 border">
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>

    <div class="w-full block justify-end lg:flex">
      <div class="nav-text text-med lg:flex-grow mt-4 mb-4 ">
        <span v-for="item in $site.themeConfig.nav">
          <span :class="hidden">
            <router-link
              class="font-sans uppercase font-normal tracking-wider text-gray-600 mr-0 lg:mr-5 md:mr-3 sm:mr-2 lg:mt-0 no-underline hover:text-gray-600 hover:underline"
              :to="$withBase(item.link)"
            >
              {{ item.text }}
              <span class="arrow"></span>
            </router-link>
          </span>
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      hidden: "lg:inline-block md:hidden sm:hidden hidden",
    };
  },
  methods: {
    openNav() {
      if (this.hidden == "lg:inline-block md:hidden sm:hidden hidden")
        this.hidden = "p-2 block";
      else {
        this.hidden = "lg:inline-block md:hidden sm:hidden hidden";
      }
    },
  },
};
</script>
