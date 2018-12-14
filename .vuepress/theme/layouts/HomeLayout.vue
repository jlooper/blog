<template>
<div class="text-center">
    <img class="mt-8" src="../assets/name.png"/>
    <p class="text-center pt-5 text-3l italic text-blue-darkest">{{ $page.frontmatter.tagline }}</p>
    <Cards/>
</div>
</template>

<script>
import Cards from '../components/Cards.vue';

export default {
    components: { Cards },
    name: 'HomeLayout'
}
</script>