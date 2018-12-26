<template>
    <div class="blog-body bg-white rounded p-5 m-5 text-blue-darkest">
        <h1 class="pb-5 text-blue-darkest">{{$page.frontmatter.title}}</h1>
        
            <div class="lg:flex m-5 bg-purple-lightest rounded" v-for="article in $page.frontmatter.articles">
                <div class="m-5">
                    <p class="text-blue-darkest font-bold text-lg">{{article.title}}</p>
                    <p class="text-blue-darkest text-sm">{{article.date}}</p>
                    <p class="text-blue-darkest text-lg">{{ article.blurb }}</p>
                    <p><a :href="article.link" target="_blank">Read more</a></p>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name: 'BlogLayout'
}
</script>
