<template>
 <nav class="nav rounded-t flex items-center justify-between flex-wrap p-6 text-right">
  <router-link class="border text-lg no-underline cursor-pointer p-2 text-white block m-4" :to="$withBase('/')">
      JL
  </router-link>
      
  <div v-on:click="openNav()" class="lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-orange hover:border-orange">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="nav-text text-med lg:flex-grow">
          <span v-for="item in $site.themeConfig.nav">
            <span :class="hidden">
              <router-link class="m-4 lg:mt-0 no-underline text-white hover:text-orange uppercase" :to="$withBase(item.link)">
                {{ item.text }}
                <span class="arrow"></span>
              </router-link>
            
            </span>
          </span>
          
          <a class="m-4 no-underline text-white" href="http://github.com/jlooper">
            <svg class="fill-current w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>GitHub</title><path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path></svg>
          </a>
          <a class="m-4 no-underline text-white" href="http://twitter.com/jenlooper">
            <svg class="fill-current w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Twitter</title><path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path></svg>
          </a>  
        </div>  
    </div>
</nav> 
</template>
<script>
export default {
  name: 'Nav',
  data() {                                   
      return {
        hidden: 'lg:inline-block md:hidden sm:hidden hidden'
      }
    },
  methods: {
    openNav() {
      if (this.hidden == 'lg:inline-block md:hidden sm:hidden hidden')
        this.hidden = 'p-2 block'
      else {
        this.hidden = 'lg:inline-block md:hidden sm:hidden hidden'
      }
    }
  },
  created() {
    /*seems to break prod
    document.title = this.$site.title;
    document.description = this.$site.description;
    */
  }
}
</script>
