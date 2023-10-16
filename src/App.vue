<script setup>
import { RouterView } from 'vue-router';

import HeaderView from './views/HeaderView.vue';
import FooterView from './views/FooterView.vue';
import ToastsView from './views/ToastsView.vue';
import BrandView from './views/BrandView.vue';
import CategoriesView from './views/CategoriesView.vue';
// import NavbarView from './views/NavbarView.vue';
import SaleView from './views/SaleView.vue';
</script>

<template>
  <HeaderView />
  <main>
    <!-- <NavbarView /> -->
    <BrandView />
    <CategoriesView />
    <SaleView />
    <RouterView />
  </main>
  <FooterView />
  <ToastsView />
</template>

<style module lang="scss"></style>
