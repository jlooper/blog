<template>
  <div class="markdown-body text-gray-800">
    <h1 class="text-3xl pb-5 pt-5 ml-5 text-gray-800">{{$page.frontmatter.title}}</h1>
    <div class="pl-5 text-gray-700">
      <p>Here are a few of my talks from 2018 - 2019. Click the link below for more.</p>
      <div v-for="video in ytvideos" :key="video.id" class="m-10 text-center">
        <iframe
          class="video"
          :src="'https://www.youtube.com/embed/'+video+''"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div v-for="video in othervideos" :key="video.id" class="m-10 text-center">
        <iframe
          class="video"
          :src="video"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <p class="text-center pb-5">
        <a
          class="underline"
          href="https://www.youtube.com/playlist?list=PL8bLS57CI8i2idWqYbsvu9IOwjTGqReaa"
        >View my playlist for more talks</a>. If you're interested in booking me to speak at your conference or meetup, please use the
        <a
          class="underline"
          href="/docs/contact"
        >contact form</a>. Thanks!
      </p>
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
        "dJTRjBHFLFU"
      ],
      othervideos: ["https://halfstackconf.streameventlive.com/embed/53"]
    };
  }
};
</script>
