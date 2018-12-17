<template>
    <div class="blog-body bg-white rounded m-10 text-blue-darkest">
        <div class="p-10"> 
            <h1 class="pb-5 text-blue-darkest">{{$page.frontmatter.title}}</h1>
            <Content/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogLayout'
}
</script>
