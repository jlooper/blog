<template>
    <div class="blog-body  bg-white rounded lg:p-10 lg:m-10 p-2 m-2 text-blue-darkest">
        <h1 class="pb-5 text-blue-darkest">{{$page.frontmatter.title}}</h1>
            <Content/>
    </div>
</template>

<script>
export default {
    name: 'BasicLayout'
}
</script>
