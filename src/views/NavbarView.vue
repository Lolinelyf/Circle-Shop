<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div :class="$style.navbar">
    <router-link to="/" :class="$style.navbar__logo">
      <img src="../assets/logo-m.svg" alt="logo" />
    </router-link>
    <button :class="$style.navbar__button"><div></div></button>
    <h3 :class="$style.navbar__signature">Made by circle</h3>
  </div>
</template>

<style module lang="scss">
.navbar {
  position: fixed;
  top: 0;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  min-height: 1000px;
  height: 100vh;
  max-height: 1200px;
  width: 4rem;
  padding: 4rem 1rem;
  border-right: 1px solid #beb8b87e;
  backdrop-filter: brightness(80%);
  // transform: translateX(-64px);

  &__logo {
    width: 22px;
    height: 22px;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__button {
    display: flex;
    flex-flow: column wrap;
    gap: 8px;
    border: none;
    align-items: center;
    width: 22px;
    height: 25px;
    padding: 0;
    margin: 0;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0);

    &::after,
    &::before {
      content: '';
      display: block;
      width: 3px;
      height: 3px;
      border-radius: 100%;
      background-color: var(--color-beige);
    }
    & > div {
      width: 3px;
      height: 3px;
      border-radius: 100%;
      background-color: var(--color-beige);
    }
  }

  &__signature {
    color: var(--color-beige);
    font-size: 0.7rem;
    writing-mode: vertical-rl;
  }

  // & .show {
  //   transform: translateX(0);
  // }
}
</style>
