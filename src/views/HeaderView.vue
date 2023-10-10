<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header :class="$style.host">
    <div :class="$style.container">
      <div :class="$style.flex">
        <div :class="$style.anchors">
          <a href="" :class="$style.anchors__link">Categories</a>
          <a href="" :class="$style.anchors__link">Sale</a>
          <a href="" :class="$style.anchors__link">About</a>
        </div>
        <nav :class="$style.navigation">
          <RouterLink to="/search" :class="$style.link">
            <svg fill="none" viewBox="0 0 50 50">
              <path
                stroke="#FBF1F1"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M23 40a17 17 0 1 0 0-34 17 17 0 0 0 0 34Zm21 4-9-9"
              />
            </svg>
          </RouterLink>
          <RouterLink to="/notifications" :class="$style.link">
            <svg fill="none" viewBox="0 0 50 50">
              <path
                stroke="#FBF1F1"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M25 46a21 21 0 1 0 0-42 21 21 0 0 0 0 42Zm0-29v8m0 8h0"
              />
            </svg>
          </RouterLink>
          <RouterLink to="/cart" :class="$style.link">
            <svg fill="none" viewBox="0 0 50 50">
              <path
                stroke="#FBF1F1"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="m13 4-7 9v29a4 4 0 0 0 4 4h30a4 4 0 0 0 4-4V13l-6-9H13Zm-7 9h38"
              />
              <path
                stroke="#FBF1F1"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M33 21a8 8 0 0 1-16 0"
              />
            </svg>
          </RouterLink>
          <RouterLink to="/profile" :class="$style.link">
            <svg fill="none" viewBox="0 0 50 50">
              <path
                stroke="#FBF1F1"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M42 44v-4a8 8 0 0 0-9-9H17a8 8 0 0 0-9 9v4m17-21a8 8 0 1 0 0-17 8 8 0 0 0 0 17Z"
              />
            </svg>
          </RouterLink>
        </nav>
      </div>

      <router-link to="/" :class="$style.logo">
        <img src="../assets/logo.svg" alt="logo" :class="$style.logo__img" />
        <h1 :class="$style.logo__text">brand and clothing shop</h1>
      </router-link>

      <p :class="$style.signature">Circle-shop</p>
    </div>
  </header>
</template>

<style module lang="scss">
.host {
  width: 100%;
  min-height: 1080px;
  height: 100vh;
  max-height: 1200px;
  background: center / cover no-repeat url('images/header/bg-header.png');
}

.container {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  max-width: 1820px;
  width: 100%;
  min-height: 1080px;
  height: 100%;
  margin: auto;
  padding: 4rem 1rem;
}

.flex {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}

.anchors {
  font-family: Akshar, sans-serif;
  text-transform: uppercase;
  font-size: 36px;

  &__link {
    color: #fbf1f1;

    &:not(:last-child) {
      margin-right: 2rem;
    }
  }
}

.link {
  display: inline-block;
  width: 25px;
  height: 25px;
  object-fit: contain;

  &:not(:last-child) {
    margin-right: 2rem;
  }
}

.logo {
  display: flex;
  flex-flow: row nowrap;
  align-self: center;
  align-items: center;
  width: 630px;

  &__img {
    width: 100%;
    margin-right: 2rem;
  }

  &__text {
    font-size: 70px;
    color: #fbf1f1;
  }
}

.signature {
  font-size: 1rem;
  color: #fbf1f1;
  opacity: 0.1;
  margin: 0;
  padding: 0;
}
</style>
