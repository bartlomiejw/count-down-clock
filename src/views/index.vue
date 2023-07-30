<script lang="ts" setup>
import render from '@/assets/images/render.png'
</script>
<template>
  <section class="section section--hero">
    <div class="container mx-auto px-5 md:px-36">
      <div class="relative max-w-screen-xl mx-auto grid grid-cols-12 overflow-hidden">
        <div class="col-span-12 lg:col-span-5 text-center sm:text-left">
          <h1 class="text-heading mb-4">Enter to get free SentiOne premium account</h1>
          <p class="text-description">
            This contest is open worldwide, please be sure to read the terms and conditions before
            entering.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="section section--counter">
    <img class="render" :src="render" alt="Mac in background of website.">
    <div class="container ml-auto mr-0">
      <Counter/>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.section {
  &--hero {
    padding-top: 169px;
    padding-bottom: 156px;
  }

  &--counter {
    position: relative;

    .container {
      padding-left: 72px;
    }
  }
}

.render {
  position: absolute;
  left: 90%;
  transform: translateX(-90%);
  bottom: 1px;
  z-index: -1;
}
</style>
