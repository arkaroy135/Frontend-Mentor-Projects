<script setup lang="ts">
  const email = ref("");
  const isValid = ref();

  const exp = /^[\w-]+([._+][\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

  const validateEmail = () => {
    isValid.value = exp.test(email.value);
  };

  const resetForm = () => {
    email.value = "";
    isValid.value = null;
  };
</script>

<template>
  <div
    class="flex flex-col <md:(min-h100dvh min-w100dvw rd-0) md:flex-row-reverse w90dvw max-w50rem bg-White rd-4 overflow-hidden"
    :class="{ '!hidden': isValid == true }">
    <div class="flex-1">
      <NuxtImg
        src="/illustration-sign-up-mobile.svg"
        class="md:hidden"
        alt="Sign-Up Illustration for Mobile" />
      <NuxtImg
        src="/illustration-sign-up-desktop.svg"
        class="<md:hidden p4"
        alt="Sign-Up Illustration for Desktop" />
    </div>
    <div class="flex-1 px5 md:(p6 ml8) self-center">
      <div class="font-RR gap4.5 md:gap5 flex flex-col justify-center">
        <h1 class="text-10 md:text-11 c-DarkSlateGrey font-RB">
          Stay updated!
        </h1>
        <p class="p0">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul class="spacey1 font-RR">
          <li class="flex gap4">
            <IconsIconList class="w5 <md:-mt6" />Product discovery and building
            what matters
          </li>
          <li class="flex gap4">
            <IconsIconList class="w5 <md:-mt6" />Measuring to ensure updates are
            a success
          </li>
          <li class="flex gap4">
            <IconsIconList class="w5 <md:-mt1" />And much more!
          </li>
        </ul>
      </div>
      <div class="flex flex-col my gap2.5">
        <div class="flex justify-between">
          <label
            for="email"
            class="c-DarkSlateGrey font-RB text-3">
            Email address
          </label>
          <span
            v-show="isValid == false"
            class="c-Tomato text-3 font-RB"
            >Valid Email Required</span
          >
        </div>
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="email@company.com"
          class="b b-Grey px3.5 py3 rd-2 text-para c-CharcoalGrey font-RR outline-none"
          :class="{
            '!b-Tomato !c-Tomato bg-Tomato/15 placeholder-c-transparent':
              isValid == false,
          }" />
        <button
          type="submit"
          @click.prevent="validateEmail"
          class="py3 mt3 rd-2 !bg-DarkSlateGrey c-White font-RB transition-all-250 @hover:!bg-Tomato">
          Subscribe to monthly newsletter
        </button>
      </div>
    </div>
  </div>

  <!-- Confirmation of Sucessfull Subscription -->

  <div
    v-show="isValid == true"
    class="flex flex-col <md:(min-h100dvh min-w100dvw rd-0) max-w23rem bg-White rd-4 overflow-hidden p6 md:p8 gap4">
    <div class="flex flex-col gap7 mya">
      <NuxtImg
        src="/icon-success.svg"
        width="64"
        alt=""
        aria-hidden="true" />
      <h2 class="text-10 md:text-11 c-DarkSlateGrey font-RB leading-10">
        Thanks for subscribing!
      </h2>
      <p class="text-3.6 font-RR leading-6 p0">
        A confirmation email has been sent to <b>{{ email }}</b
        >. Please open it and click the button inside to confirm your
        subscription.
      </p>
    </div>
    <button
      type="reset"
      @click.prevent="resetForm"
      class="<md:mta py3 mt2 rd-2 !bg-DarkSlateGrey c-White font-RB transition-all-250 @hover:!bg-Tomato">
      Dismiss message
    </button>
  </div>
</template>
