<template>
    <div class="blog-body sm:p-2 sm:m-2 bg-white rounded lg:p-5 lg:m-5 text-blue-darkest">
        <h1 class="pb-5 text-blue-darkest">{{$page.frontmatter.title}}</h1>
            <Content/>
    </div>
</template>

<script>
export default {
    name: 'BasicLayout'
}
</script>
