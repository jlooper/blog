<template>
  <div class="m-10">
    <h1 class="text-white">Contact Me</h1>

    <div class="text-xs-center font-sans  text-white" v-if="submitted">
      <p>Thank you for your email, I will get back to you as soon as I can.</p>
    </div>

    <form
      class="w-full max-w-lg"
      @submit.prevent="handleSubmit"
      netlify
      name="contact-me"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      v-else
      v-model="valid"
    >
      <div class="flex flex-wrap -mx-3 mt-6 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="text-white font-sans font-bold mb-2" for="grid-first-name">First Name</label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
            :rules="rules"
            v-model="firstName"
            name="firstName"
            required
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="text-white font-sans font-bold mb-2" for="grid-last-name">Last Name</label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
            :rules="rules"
            v-model="lastName"
            name="lastName"
            required
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="text-white font-sans font-bold mb-2" for="grid-email">Email</label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="email"
            placeholder="my@email.com"
            :rules="rules"
            v-model="email"
            name="email"
            required
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full px-3 mb-6">
          <label class="text-white font-sans font-bold mb-2" for="grid-message">Message</label>
          <textarea
            cols="50"
            rows="10"
            class="appearance-none block w-full bg-gray-200 border text-gray-700 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-message"
            type="text"
            placeholder="My message to you"
            :rules="rules"
            v-model="message"
            name="message"
            required
          ></textarea>
        </div>
      </div>

      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button
            type="submit"
            :disabled="!valid"
            class="shadow font-sans  bg-purple-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          >Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactLayout",
  data() {
    return {
      firstName: "",
      lastName: "",
      message: "",
      email: "",
      submitted: false,
      valid: true,
      rules: [
        (firstName) => !!firstName,
        (lastName) => !!lastName,
        (message) => !!message,
        (email) => !!email,
        (v) => !!v || "This field is required",
      ],
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      this.submitted = true;
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": "contact-me",
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          message: this.message,
        }),
      })
        .then(() => {
          alert("Thank you for your email! I will reply as soon as I can.");
        })
        .catch(() => {
          alert("Sorry, there seems to have been an error.");
        });
    },
  },
};
</script>
