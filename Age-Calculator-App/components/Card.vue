<template>
  <div
    class="bg-White p7 md:p10 rounded-[1.5rem_1.5rem_10rem_1.5rem] max-w40rem w90%">
    <div class="grid grid-cols-3 w100% md:w80%">
      <div class="flex flex-col gap2">
        <label
          for="day"
          class="font-PoppinsBold uppercase tracking-0.6 c-OffBlack text-3 md:text-3.3 <md:pl3"
          :class="{ 'c-LightRed': dayError }"
          >Day
        </label>
        <input
          type="text"
          id="day"
          v-model="day"
          maxlength="2"
          placeholder="DD"
          @input="dayError = ''"
          @keyup="handleKeyDown($event, 'month')"
          :class="{ 'border-LightRed': dayError }" />
      </div>
      <div class="flex flex-col gap2">
        <label
          for="month"
          class="font-PoppinsBold uppercase tracking-0.6 c-OffBlack text-3 md:text-3.3 <md:pl3"
          :class="{ 'c-LightRed': monthError }"
          >Month
        </label>
        <input
          type="text"
          id="month"
          v-model="month"
          maxlength="2"
          placeholder="MM"
          @input="monthError = ''"
          @keyup="handleKeyDown($event, 'year', 'day')"
          :class="{ 'border-LightRed': monthError }" />
      </div>
      <div class="flex flex-col gap2">
        <label
          for="year"
          class="font-PoppinsBold uppercase tracking-0.6 c-OffBlack text-3 md:text-3.3 <md:pl3"
          :class="{ 'c-LightRed': yearError }"
          >Year
        </label>
        <input
          type="text"
          id="year"
          v-model="year"
          maxlength="4"
          placeholder="YYYY"
          @input="yearError = ''"
          @keyup="handleKeyDown($event, 'submit', 'month')"
          @keydown.enter="calculateAge"
          :class="{ 'border-LightRed': yearError }" />
      </div>
    </div>
    <div
      class="h1.5rem grid grid-cols-3 w100% md:w80% text-2.3 md:text-3.8 gap1 py1 md:py2 font-PoppinsItalic">
      <small class="c-LightRed">{{ dayError }}</small>
      <small class="c-LightRed">{{ monthError }}</small>
      <small class="c-LightRed">{{ yearError }}</small>
    </div>
    <div class="pt6 relative">
      <hr class="c-SmokeyGrey w100% md:w95%" />
      <button
        id="submit"
        type="submit"
        aria-label="false"
        @click="calculateAge"
        class="rounded-full absolute right-50% translate-x-40% md:right-12 top-0 md:top--4 outline-none">
        <Arrow
          class="w12 h12 md:w20 md:h20 p2.5 lg:p4 bg-Purple stroke-OffWhite rounded-full" />
      </button>
    </div>
    <main
      class="flex flex-col text-left my4 md:my4 ml4 wmax pt6 text-11 md:text-20 font-PoppinsXBold c-OffBlack leading-14 md:leading-24">
      <p>
        <span class="c-Purple">{{ age.years }}</span> years
      </p>
      <p>
        <span class="c-Purple">{{ age.months }}</span> months
      </p>
      <p>
        <span class="c-Purple">{{ age.days }}</span> days
      </p>
    </main>
  </div>
</template>

<script setup lang="ts">
const day = ref<number>();
const month = ref<number>();
const year = ref<number>();
const age = ref<any>({ years: "--", months: "--", days: "--" });
const dayError = ref<string>("");
const monthError = ref<string>("");
const yearError = ref<string>("");
const daysInMonth = [
  31,
  isLeapYear(Number(year.value)) ? 29 : 28,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31,
];

const validateInputs = (): Promise<boolean> => {
  return new Promise((resolve) => {
    let isValid = true;

    if (!day.value || !month.value || !year.value) {
      dayError.value = "This Field is Required";
      monthError.value = "This Field is Required";
      yearError.value = "This Field is Required";
      age.value = { years: "--", months: "--", days: "--" };
      isValid = false;
    }

    const maxDaysInMonth = daysInMonth[Number(month.value) - 1];

    if (Number(day.value) < 1 || Number(day.value) > maxDaysInMonth) {
      dayError.value = "Must be a valid day";
      age.value = { years: "--", months: "--", days: "--" };
      isValid = false;
    }

    if (Number(month.value) < 1 || Number(month.value) > 12) {
      monthError.value = "Must be a valid month";

      if (Number(day.value) < 1 || Number(day.value) > 31) {
        dayError.value = "Must be a valid day";
        monthError.value = "Must be a valid month";
        isValid = false;
      }

      age.value = { years: "--", months: "--", days: "--" };
      isValid = false;
    }

    const today = new Date();
    const inputDate = new Date(
      Number(year.value),
      Number(month.value) - 1,
      Number(day.value)
    );

    if (inputDate > today) {
      dayError.value = "Can't be Future Date";
      monthError.value = "Can't be Future Date";
      yearError.value = "Can't be Future Date";
      age.value = { years: "--", months: "--", days: "--" };
      isValid = false;
    }

    resolve(isValid);
  });
};

const calculateAge = async () => {
  if (!(await validateInputs())) {
    return;
  }

  const today = new Date();
  const birthDate = new Date(`${year.value}-${month.value}-${day.value}`);

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
    years--;
    months += 12;
  }

  if (days < 0) {
    months--;
    days += daysInMonth[today.getMonth() - 1];
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  age.value = { years, months, days };
  dayError.value = "";
  monthError.value = "";
  yearError.value = "";
};
function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const handleKeyDown = (
  event: KeyboardEvent,
  nextInputId: string,
  previousInputId?: string
) => {
  const inputElement = event.target as HTMLInputElement;
  const maxLength = parseInt(inputElement.getAttribute("maxlength") || "");
  const nextInputElement = document.getElementById(nextInputId);
  const previousInputElement = previousInputId
    ? document.getElementById(previousInputId)
    : null;

  if (inputElement.value.length === maxLength && event.key !== "Backspace") {
    if (nextInputElement) {
      nextInputElement.focus();
    }
  } else if (event.key === "ArrowRight" && nextInputElement) {
    nextInputElement.focus();
  } else if (event.key === "ArrowLeft" && previousInputElement) {
    previousInputElement.focus();
  }
};
</script>

<style lang="scss" scoped>
input {
  padding: 0.3125em;
  max-width: 6.25rem;
  width: 85%;
  letter-spacing: 0.1em;
  text-align: center;
  border-radius: 0.25rem;
  border-width: 2px;
  font-size: 1.5rem;
  font-family: PoppinsBold;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.3125em;
    border-width: 1px;
  }
}
</style>

