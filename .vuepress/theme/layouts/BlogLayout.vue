<template>
    <div class="blog-body m-10 text-blue-darkest">
        <h1 class="pb-5">{{$page.frontmatter.title}}</h1>
        <Content/>
    </div>
</template>

<script>
export default {
    name: 'BlogLayout'
}
</script>
