<template>
<div class="wrapper">  
    <div class="markdown-body m-10 rounded"> 
        <Nav/>            
        <component :is="layout"></component>
        <Footer/>  
    </div> 
    
</div>

</template>
<script>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
import HomeLayout from './layouts/HomeLayout.vue';
import BlogLayout from './layouts/BlogLayout.vue';

export default {
    components: { Nav, Footer, HomeLayout, BlogLayout },
    computed: {
        layout() {
        return this.$page.frontmatter.layout || 'HomeLayout'
        }
  },
}
</script>

<style lang="stylus">
@import './styles/theme.styl';
</style>