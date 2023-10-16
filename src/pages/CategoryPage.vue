<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { getCategoryById } from '../api/categories';
import AppCategoryCard from '../components/AppCategoryCard.vue';

const route = useRoute();
const category = ref();

onMounted(() => {
  category.value = getCategoryById(Number(route.params.id));
});
</script>

<template>
  <div v-if="category">
    <AppCategoryCard v-bind="category" />
  </div>
</template>

<style module></style>
