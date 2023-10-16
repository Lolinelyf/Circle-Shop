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
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  sale: {
    type: Number,
    required: true,
  },
});

function formatPrice(price) {
  return price
    .toLocaleString('ru', {
      style: 'currency',
      currency: 'RUB',
      currencyDisplay: 'symbol',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace('RUB', '₽');
}
</script>

<template>
  <RouterLink :to="`/product/${props.id}`" :class="$style.host">
    <img :class="$style.image" :src="props.image" alt="" />
    <section :class="$style.info">
      <h3 :class="$style.name">
        {{ props.name }}
      </h3>
      <div :class="$style.price">
        {{ formatPrice(props.price) }}
      </div>
    </section>
  </RouterLink>
</template>

<style module>
.host {
  color: #fff;
}

.image {
  display: block;
  width: 100%;
  height: 400px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: var(--shadow-medium-default);
}

.info {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 4rem;
  font-family: Manrope, sans-serif;
  color: var(--color-black);
}

.price {
  font-size: 2rem;
}

.name {
  font-size: 1.6rem;
  font-family: Manrope, sans-serif;
  text-transform: none;
  font-weight: 500;
}
</style>
