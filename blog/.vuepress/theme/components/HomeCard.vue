<template>
  <div class="logo-title border-gray-300 border-r-2 sm:border-none grid sm:block sm:m-auto justify-items-center">
    <div class="title">
      <img
        @click="goHome()"
        class="rounded-full shadow-sm cursor-pointer m-auto"
        src="/images/profile.jpg"
        alt="Jen Looper"
      />
    </div>
    <div
      class="
        tracking-widest
        pt-4
        uppercase
        font-sans font-semibold
        text-gray-700 text-4xl
        sm:text-2xl
      "
    >
      Hello, I'm Jen
    </div>
    <div class="tracking-wide pt-2 font-sans text-gray-600 text-lg">
      Principal Education Developer Advocate Lead, Microsoft
    </div>

    <div class="grid grid-cols-2 sm:hidden">
      <a class="m-2 no-underline" href="http://github.com/jlooper">
        <svg
          class="fill-current text-gray-600 w-8 h-8 sm:w-4 sm:h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>GitHub</title>
          <path
            d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"
          />
        </svg>
      </a>
      <a class="m-2 no-underline" href="http://twitter.com/jenlooper">
        <svg
          class="fill-current text-gray-600 w-8 h-8 sm:w-4 sm:h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Twitter</title>
          <path
            d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    goHome() {
      window.location.href = "/";
    },
  },
};
</script>
