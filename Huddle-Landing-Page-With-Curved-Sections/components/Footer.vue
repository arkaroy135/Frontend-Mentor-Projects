<template>
  <div>
    <IconsFooterTopDesktop class="<md:hidden" />
    <IconsFooterTopMobile class="md:hidden" />
  </div>
  <section
    class="grid lg:grid-cols-2 bg-VeryDarkCyan c-VeryPaleBlue px5 py15 md:px20 md:py6 -mt0.7 <lg:gap20">
    <div class="<lg:order-last flex flex-col p2 spacey7">
      <NuxtIcon
        name="logo"
        color="VeryPaleBlue"
        class="text-54 md:text-64 h10 md:h16" />
      <p class="md:w50% lg:w61% <md:text-3.8 fw400 font-OpenSans">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla
        quam, hendrerit lacinia vestibulum a, ultrices quis sem.
      </p>
      <div class="flex flex-col spacey3">
        <a
          href="tel:+1-543-123-4567"
          class="flex items-center wmax @hover:(underline underline-VeryPaleBlue)"
          ><IconsPhone class="w8 h5 mr2" /> Phone: +1-543-123-4567</a
        >
        <a
          href="mailto:example@huddle.com"
          class="flex items-center wmax @hover:(underline underline-VeryPaleBlue)"
          ><IconsEmail class="w8 h4 mr2" /> example@huddle.com</a
        >
      </div>
      <div class="spacex5">
        <Icon
          name="uil:facebook"
          size="32"
          class="@hover:c-blue-600 transition-all-200 cursor-pointer" />
        <Icon
          name="jam:instagram"
          size="32"
          class="@hover:c-purple transition-all-200 cursor-pointer" />
        <Icon
          name="ant-design:twitter-square-filled"
          size="32"
          class="@hover:c-blue-400 transition-all-200 cursor-pointer" />
      </div>
    </div>
    <div class="<lg:order-first p2 spacey9">
      <div class="md:w60% spacey3">
        <h2 class="fw700 text-6 tracking-0.2 font-OpenSans uppercase">
          Newsletter
        </h2>
        <p class="<md:text-3.8 fw400 font-OpenSans">
          To recieve tips on how to grow your community, sign up to our weekly
          newsletter. We’ll never send you spam or pass on your email address
        </p>
      </div>
      <form
        action="#"
        method="post"
        @submit.prevent="submitForm"
        class="flex flex-col md:flex-row gap5 md:gap15 relative">
        <input
          id="email"
          v-model="email"
          class="md:w70% lg:w60% rounded px2 h10 text-VeryDarkCyan fw600 outline-blue"
          :class="[
            { 'outline-3 outline-LightRed': emailError },
            { 'outline-3 outline-green-6': isEmailValid(email) },
          ]" />
        <button
          type="submit"
          aria-label="false"
          class="bg-Pink px6 py2 font-OpenSans fw600 rounded @hover:bg-LightPink transition-all-200 ease-linear self-end">
          Subscribe
        </button>
        <p
          v-if="emailError"
          class="absolute text-LightRed top-11 fw400 font-OpenSans pl1">
          <small>{{ emailError }}</small>
        </p>
      </form>
    </div>
  </section>
  <div
    class="text-center text-0.6875rem fw400 bg-VeryDarkCyan c-VeryPaleBlue py2 -my1">
    Challenge by
    <a
      href="https://www.frontendmentor.io?ref=challenge"
      target="_blank"
      class="c-VeryPaleBlue no-underline fw800"
      >Frontend Mentor</a
    >. Coded by <a href="#" class="c-VeryPaleBlue no-underline fw800">Roy</a>.
  </div>
</template>

<script lang="ts" setup>
const email = ref("");
const emailError = ref("");

let emailInput: HTMLInputElement;
onMounted(() => {
  emailInput = document.getElementById("email") as HTMLInputElement;
});

function submitForm() {
  // submit form logic here
  if (email.value === "") {
    emailError.value = "Please enter an email";
    emailInput.focus();
  } else if (!isEmailValid(email.value)) {
    emailError.value = "Check your email please";
    emailInput.focus();
  } else {
    emailError.value = "";
    alert("Form submitted with email: " + email.value);
    email.value = "";
  }
}

function isEmailValid(email: string): boolean {
  // email regex validation
  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailFormat.test(email);
}
</script>

