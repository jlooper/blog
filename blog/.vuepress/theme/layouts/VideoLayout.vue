<template>
  <div class="m-6">
    <h2
      class="tracking-widest pt-4 pb-4 uppercase font-sans font-semibold text-gray-700 text-3xl"
    >
      {{ $page.frontmatter.title }}
    </h2>
    <div>
      <p class="text-gray-600 pt-3 pb-3 text-xl">
        Here are a few of my talks from 2018 - 2020.
        <a
          class="underline"
          href="https://www.youtube.com/playlist?list=PL8bLS57CI8i2idWqYbsvu9IOwjTGqReaa"
          >View my playlist for more</a
        >.
      </p>

      <div class="grid grid-cols-2 grid-rows-3 gap-2">
        <div class="m-3 bg-gray-200" v-for="video in ytvideos" :key="video.id">
          <iframe
            class="w-full h-64"
            :src="'https://www.youtube.com/embed/' + video + ''"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoLayout",
  data() {
    return {
      ytvideos: [
        "ToHsJPcgKdI",
        "4Zhjy3Mdtbc",
        "SgBDEydZb4A",
        "wCU-kDlXY58",
        "ZG7GtgfUS6g",
        "1Kqtg1Mw2wc",
        "H4Rnh01ywJk",
        "dJTRjBHFLFU",
      ],
    };
  },
};
</script>
