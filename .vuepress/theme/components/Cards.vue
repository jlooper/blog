<template>

<div class="flex flex-wrap pt-10 m-2 justify-center"> 
    <div v-for="item in $page.frontmatter.cards" class="w-1/4 m-4 bg-white max-w-sm rounded shadow-lg text-center" @click="goToRoute(item.link)">
        <img class="pt-5" :src="'./images/'+item.image+''" :alt="item.title">
        <div class="px-6 py-2">
            
                <div class="text-blue-darkest font-bold text-xl mb-2">{{item.title}}</div>
                    <p class="text-blue-darker">
                        {{item.blurb}}
                    </p>
                </div>  
    </div>   
</div>
</template>
<script>
export default {
    name: 'Cards',
    methods: {
        goToRoute(link) {
            window.open(link,'_blank');
        }
    }
}
</script>
