<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <RouterLink :to="`/category/${props.id}`" :class="$style.item">
    <img :src="props.image" :alt="props.name" :class="$style.img" />
    <p :class="$style.name">{{ props.name }}</p>
  </RouterLink>
</template>

<style module>
.item {
  height: auto;
}
.img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: var(--shadow-medium-dark);
}
.name {
  font-size: 32px;
  color: var(--color-dark-beige);
  font-weight: 300;
  padding: 0;
  margin: 0;
}
</style>
