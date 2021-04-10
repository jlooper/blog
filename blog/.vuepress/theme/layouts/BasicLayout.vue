<template>
  <div class="m-6 ">
    <h2 class="hidden lg:block md:block sm:hidden tracking-widest pt-4 pb-4 uppercase font-sans font-semibold text-gray-700 text-3xl">
      {{ $page.frontmatter.title }}
    </h2>

    <div class="font-sans text-gray-600 text-xl">
      <Content />
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicLayout",
};
</script>
