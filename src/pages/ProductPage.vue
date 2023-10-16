<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { getSaleItemById } from '../api/sale';
import AppProductCard from '../components/AppProductCard.vue';

const route = useRoute();
const product = ref();

onMounted(() => {
  product.value = getSaleItemById(Number(route.params.id));
});
</script>

<template>
  <div v-if="product" :class="$style.host">
    <AppProductCard v-bind="product" />
  </div>
</template>

<style module></style>
