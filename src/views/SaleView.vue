<script setup>
import { ref, onMounted } from 'vue';
import { getSaleItems } from '../api/sale';
import AppProductCard from '../components/AppProductCard.vue';

const products = ref([]);

onMounted(() => {
  products.value = getSaleItems();
});
</script>

<template>
  <section :class="$style.host">
    <div :class="$style.container">
      <section :class="$style.title">
        <h2 :class="$style.title__left">Sale</h2>
        <div :class="$style.title__right">
          <div :class="$style.title__slice">
            <p>Enhance</p>
            <p>your styling</p>
          </div>
          <div :class="$style.title__slice">
            <p>with</p>
            <p>Circle's carefully</p>
          </div>
          <p>selected collections</p>
        </div>
      </section>
      <h3 :class="$style.sale">30% discount until 20.09.23</h3>

      <div :class="$style.flex">
        <AppProductCard
          v-for="product in products"
          :key="product.id"
          :class="$style.product"
          v-bind="product"
        />
      </div>
    </div>
  </section>
</template>

<style module lang="scss">
.host {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    #353535 0%,
    #353535 2.96%,
    #3e3e3e 28.89%,
    rgba(85, 85, 85, 0.93) 51.11%,
    rgba(104, 104, 104, 0.81) 70.93%,
    #fbf1f1 100%
  );
  padding: 8rem 0;
}

.container {
  max-width: 1600px;
  width: 100%;
  margin: auto;
  padding: 1rem;
}

.title {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  color: var(--color-dark-beige);
  margin-bottom: 4rem;

  &__left {
    width: max-content;
    font-size: 120px;
    font-weight: 500;
  }

  &__right {
    width: calc((100% - 4rem) / 2);
    font-size: 60px;
    font-family: Akshar, sans-serif;
    text-transform: uppercase;
    font-weight: 600;

    & > p {
      margin: 0;
      padding: 0;
    }
  }

  &__slice {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin: 0;
    padding: 0;

    & > p {
      width: max-content;
      margin: 0;
      padding: 0;
    }
  }
}

.sale {
  color: var(--color-dark-beige);
  margin-bottom: 4rem;
  font-size: 60px;
  font-weight: 600;
}

.flex {
  display: flex;
  gap: 4rem;
}

.product {
  flex: 0 0 calc((100% - 12rem) / 4);
}
</style>
