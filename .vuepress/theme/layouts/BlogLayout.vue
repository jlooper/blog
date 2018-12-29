<template>
    <div class="blog-body bg-white rounded p-5 m-5 text-blue-darkest">
        <h1 class="pb-5 text-blue-darkest">{{$page.frontmatter.title}}</h1>
        
            <div class="m-5 bg-white shadow-lg rounded-lg overflow-hidden" v-for="article in $page.frontmatter.articles">
                <div class="sm:flex sm:items-center px-6 py-4">
                    <img class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" :src="'../../images/'+article.image" :alt="article.title">
                    <div class="text-center sm:text-left sm:flex-grow">
                    <div class="mb-4">
                        <p class="text-xl leading-tight">{{article.title}}</p>
                        <p class="text-base leading-tight text-grey-dark">{{article.date}} - {{ article.blurb }}</p>
                    </div>
                    <div>
                        <button @click="goToArticle(article.link)" class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white">Read More</button>
                    </div>
                </div>        
            </div>
      
    </div>
</div>
</template>

<script>
export default {
    name: 'BlogLayout',
    methods: {
        goToArticle(link){
            window.open(link,'_blank');
        }
    }
}
</script>
