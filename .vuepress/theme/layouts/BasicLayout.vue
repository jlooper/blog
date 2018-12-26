<template>
    <div class="blog-body bg-white rounded p-5 m-5 text-blue-darkest">
        <h1 class="pb-5 text-blue-darkest">{{$page.frontmatter.title}}</h1>
            <Content/>
    </div>
</template>

<script>
export default {
    name: 'BasicLayout'
}
</script>
