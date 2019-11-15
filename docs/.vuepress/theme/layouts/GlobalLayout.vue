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
import Nav from "@theme/components/Nav.vue";
import Footer from "@theme/components/Footer.vue";
import HomeLayout from "@theme/layouts/HomeLayout.vue";
import ArticleLayout from "@theme/layouts/ArticleLayout.vue";
import BlogLayout from "@theme/layouts/BlogLayout.vue";
import BasicLayout from "@theme/layouts/BasicLayout.vue";
import ContactLayout from "@theme/layouts/ContactLayout.vue";
import VideoLayout from "@theme/layouts/VideoLayout.vue";

export default {
  components: {
    Nav,
    Footer,
    HomeLayout,
    BlogLayout,
    BasicLayout,
    ContactLayout,
    VideoLayout,
    ArticleLayout
  },
  computed: {
    layout() {
      return this.$page.frontmatter.layout || "HomeLayout";
    }
  }
};
</script>

<style lang="stylus">
  @import '../styles/style.styl';
</style>