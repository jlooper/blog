<template>
  <div class="m-6">
    <h2
      class="tracking-widest pt-4 pb-4 uppercase font-sans font-semibold text-gray-700 text-3xl"
    >
      {{ $page.frontmatter.title }}
    </h2>
    
      <div class="text-gray-600 pt-3 pb-5 text-xl">
        <Content />
      </div>
    
  </div>
</template>

<script>
export default {
  name: "ArticleLayout",
};
</script>
