<script setup>
import { ref, onMounted } from 'vue';
import { getCategory } from '../api/categories';
import AppCategoryCard from '../components/AppCategoryCard.vue';

const categories = ref([]);
const textButton = ref('Show more');

onMounted(() => {
  categories.value = getCategory().filter((item) => item.id <= 6);
});
function showMore() {
  if (textButton.value === 'Show more') {
    categories.value = getCategory();
    textButton.value = 'Hide some';
    return;
  }

  if (textButton.value === 'Hide some') {
    categories.value = getCategory().filter((item) => item.id <= 6);
    textButton.value = 'Show more';
  }
}
</script>

<template>
  <div :class="$style.categories">
    <div :class="$style.container">
      <h2 :class="$style.categories__title">Categories</h2>
      <div :class="$style.categories__flex">
        <AppCategoryCard
          v-for="category in categories"
          :key="category.id"
          :class="$style.category"
          v-bind="category"
        />
        <button @click="showMore" :class="$style.categories__button">
          {{ textButton }}
        </button>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.categories {
  width: 100%;
  height: 100%;
  padding: 8rem 0;
  background-color: var(--color-black);

  &__title {
    box-sizing: border-box;
    font-size: 120px;
    color: var(--color-dark-beige);
    font-weight: 500;
    margin-bottom: 4rem;
  }
  &__flex {
    display: flex;
    flex-flow: row wrap;
    gap: 4rem;
  }

  &__button {
    display: flex;
    flex: 0 0 calc(((100% - 12rem) / 4) + 4rem);
    align-items: center;
    justify-content: center;
    height: 250px;
    border: none;
    outline: none;
    cursor: pointer;
    background: radial-gradient(
      73.15% 92.68% at 49.91% 50%,
      rgba(255, 245, 245, 0.08) 0%,
      rgba(255, 245, 245, 0.08) 42.2%,
      rgba(255, 245, 245, 0.05) 100%
    );
    border-radius: 8px;
    box-shadow: var(--shadow-medium-dark);
    font-size: 60px;
    font-family: Akshar, sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--color-dark-beige);
    transition: 0.15s;

    &:focus-visible {
      outline: none;
    }

    &:hover {
      color: #e9d2d2;
      // opacity: 0.8;
      filter: contrast(120%);
    }

    &:active {
      opacity: 0.6;
    }
  }
}

.container {
  max-width: 1600px;
  width: 100%;
  margin: auto;
  padding: 1rem;
}
.category {
  flex: 0 0 calc((100% - 12rem) / 4);
}
</style>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
