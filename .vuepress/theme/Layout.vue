<template>
  <div class="wrapper">
    <div
      class="markdown-body font-serif bg-white m-2 sm:m-3 md:m-6 lg:m-12 text-lg rounded-lg shadow-lg"
    >
      <Nav/>
      <component :is="layout"></component>
      <Footer/>
    </div>
  </div>
</template>
<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
import HomeLayout from "./layouts/HomeLayout.vue";
import BlogLayout from "./layouts/BlogLayout.vue";
import BasicLayout from "./layouts/BasicLayout.vue";
import ContactLayout from "./layouts/ContactLayout.vue";
import VideoLayout from "./layouts/VideoLayout.vue";

export default {
  components: {
    Nav,
    Footer,
    HomeLayout,
    BlogLayout,
    BasicLayout,
    ContactLayout,
    VideoLayout
  },
  computed: {
    layout() {
      return this.$page.frontmatter.layout || "HomeLayout";
    }
  }
};
</script>

<style lang="stylus">
@import './styles/theme2.styl';
</style>