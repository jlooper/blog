<template>
  <div class="m-6">
    <h2
      class="hidden lg:block md:block sm:hidden tracking-widest pt-4 pb-4 uppercase font-sans font-semibold text-gray-700 text-3xl"
    >
      Featured Projects
    </h2>
    <List />
  </div>
</template>

<script>
import List from "../components/List.vue";

export default {
  components: { List },
  name: "HomeLayout",
};
</script>
