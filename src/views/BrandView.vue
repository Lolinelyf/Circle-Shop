<script setup>
const BASE_URL = import.meta.env.BASE_URL;
</script>

<template>
  <div :class="$style.brand">
    <div :class="$style.container">
      <div :class="$style.brand__top">
        <img :src="BASE_URL + 'images/brand/s2-1.png'" alt="" :class="$style.brand__img" />
        <h2 :class="$style.brand__word">Branding</h2>
        <img :src="BASE_URL + 'images/brand/s2-2.png'" alt="" :class="$style.brand__img" />
      </div>
      <hr :class="$style.brand__line" />
      <div :class="$style.brand__center">
        <h2 :class="$style.brand__word">Digital</h2>
        <img :src="BASE_URL + 'images/brand/s2-3.png'" alt="" :class="$style.brand__img" />
        <h2 :class="$style.brand__word">Design</h2>
      </div>
      <hr :class="$style.brand__line" />
      <div :class="$style.brand__bottom">
        <img :src="BASE_URL + 'images/brand/s2-4.png'" alt="" :class="$style.brand__img" />
        <h2 :class="$style.brand__word">Storytelling</h2>
        <img :src="BASE_URL + 'images/brand/s2-5.png'" alt="" :class="$style.brand__img" />
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.brand {
  width: 100%;
  height: 100%;
  background-color: var(--color-beige);
  padding: 8rem 0;

  .container {
    display: flex;
    flex-flow: column wrap;
    gap: 4rem;
    max-width: 1600px;
    width: 100%;
    margin: auto;
    padding: 1rem;
  }

  &__top,
  &__center,
  &__bottom {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    flex: 0 0 100%;
    padding: 0 2rem;
    gap: 2rem;
    height: calc((100% - 16rem - 4px) / 3);
  }

  &__line {
    width: 100%;
    height: 1px;
    border: 1px solid var(--color-dark-beige);
    margin: 0;
    padding: 0;
  }

  &__word {
    font-size: 280px;
    letter-spacing: -1px;
    font-weight: 500;
    font-family: 'League Gothic', sans-serif;
    color: var(--color-dark-beige);
    line-height: 0;
    margin: 0;
    padding: 0;
  }

  &__img {
    width: 100%;
    height: 206px;
    object-fit: cover;
    border-radius: 8px;
    overflow: hidden;
  }
}
</style>
