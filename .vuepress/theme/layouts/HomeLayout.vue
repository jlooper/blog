<template>
<div class="text-center">
    <div class="flex flex-wrap pt-10 m-2 justify-center"> 
        <div class="lg:flex">
            <div class="h-48 lg:h-auto lg:w-48 md:h-auto flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center" style="background-image: url('./images/jenlooper.jpg')" title="Jen Looper">
            </div>
            <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-10 flex flex-col justify-between leading-normal">
                <div class="mb-10">
                <div class="text-blue-darkest font-bold text-5xl mb-2">Jen Looper</div>
                <p class="text-blue-darkest text-lg">{{ $page.frontmatter.tagline }}</p>
                </div>
                
            </div>
        </div>
    </div>
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