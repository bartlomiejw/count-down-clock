<script setup lang="ts">
import {useDateCounter} from '@/composables/useDateCounter';

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const options = {year: 'numeric' as const, month: 'short' as const, day: '2-digit' as const};
  return date.toLocaleDateString('en-US', options);
}
const inputDate = ref(new Date("Aug 2, 2023 00:00:00").getTime());
const {remainingTime} = useDateCounter(new Date(inputDate.value));
</script>
<template>
  <div class="counter">
    <div class="counter__elements">
      <div class="element"><a class="btn" href="#">Sign up to enter</a></div>
      <div class="element">
        <p class="element__caption">Follow</p>
        <a class="element__body" href="https://www.instagram.com/sentione/" target="_blank">@sentione</a>
      </div>
      <div class="element">
        <p class="element__caption">Giveaway Ends In</p>
        <p class="element__body">
          {{ remainingTime.days }} : {{ remainingTime.hours }} : {{ remainingTime.minutes }} :
          {{ remainingTime.seconds }}
        </p>
      </div>
      <div class="element">
        <p class="element__caption">ENDS</p>
        <p class="element__body">{{ formatDate(inputDate) }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.counter {
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 23px 85px -23px rgba(49, 96, 167, 0.10);
  padding: 45px 0;
  margin-left: 106px;

  .btn {
    position: relative;
    left: -106px;
  }

  &__elements {
    display: flex;
    align-items: center;

    div {
      width: 100%;
    }
  }

  .element {
    &__caption {
      color: #20334F;
      text-align: center;
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    &__body {
      color: #20334F;
      text-align: center;
      font-family: 'Open Sans', sans-serif;
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-top: 8px;
      display: block;
    }
  }
}
</style>
