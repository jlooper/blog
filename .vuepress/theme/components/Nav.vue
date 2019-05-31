<template>
  <nav
    class="nav rounded-t flex items-center justify-between flex-wrap text-center border-b border-pink-100"
  >
    <router-link
      class="text-sans border border-green-800 text-2xl no-underline cursor-pointer text-pink-800 block m-4"
      :to="$withBase('/')"
    >
      <img src="/images/jl.jpg" width="50px" height="50px">
    </router-link>

    <div v-on:click="openNav()" class="lg:hidden">
      <button
        class="flex items-center m-5 px-3 py-2 border rounded text-gray-800 border-white hover:text-orange hover:border-orange"
      >
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>
    </div>

    <div class="w-full block justify-end lg:flex lg:w-auto">
      <div class="nav-text text-med lg:flex-grow">
        <span v-for="item in $site.themeConfig.nav">
          <span :class="hidden">
            <router-link
              class="text-sans mr-10 lg:mt-0 no-underline text-green-900 hover:text-blue-900 hover:underline uppercase"
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
      hidden: "lg:inline-block md:hidden sm:hidden hidden"
    };
  },
  methods: {
    openNav() {
      if (this.hidden == "lg:inline-block md:hidden sm:hidden hidden")
        this.hidden = "p-2 block";
      else {
        this.hidden = "lg:inline-block md:hidden sm:hidden hidden";
      }
    }
  }
};
</script>
