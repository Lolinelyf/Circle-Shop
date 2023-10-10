<template>
  <footer :class="$style.footer">
    <div :class="$style.container">
      <div :class="$style.background">
        <div :class="$style.background__slice">
          <p>Discover</p>
          <p>the beauty</p>
        </div>

        <div :class="$style.background__slice">
          <p>of</p>
          <p>simplicity,</p>
        </div>

        <div :class="$style.background__slice">
          <p>the power of</p>
          <p>confidence</p>
        </div>

        <div :class="$style.background__slice">
          <p>and the appeal of</p>
          <p>timeless</p>
        </div>

        <div :class="$style.background__slice">
          <p>fashion</p>
          <p :class="$style.background__brand">Circle</p>
        </div>
      </div>
      <div :class="$style.links">
        <div :class="$style.links__item">
          <h2>COMPANY INFO</h2>
          <ul>
            <li>Подарочные карты</li>
            <li>Личный кабинет</li>
            <li>Акции</li>
            <li>Блог</li>
          </ul>
        </div>
        <div :class="$style.links__item">
          <h2>HELP & SUPPORT</h2>
          <ul>
            <li>Доставка и оплата</li>
            <li>Обмен и возврат</li>
            <li>Клубная карта</li>
            <li>Гарантийное обслуживание</li>
            <li>Сервисные услуги</li>
          </ul>
        </div>
        <div :class="$style.links__item">
          <h2>CUSTOMER CARE</h2>
          <ul>
            <li>Связаться с нами</li>
            <li>Оплата и налоги</li>
            <li>Бонусные баллы</li>
          </ul>
        </div>
        <div :class="$style.links__item">
          <h2>FIND US ON</h2>
          <ul>
            <li>ВКонтакте</li>
            <li>Instagram</li>
            <li>Telegram</li>
            <li>Youtube</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style module lang="scss">
.footer {
  width: 100%;
  min-height: 1080px;
  height: 100vh;
  max-height: 1200px;
  background: linear-gradient(122deg, #3d3d3d 0%, #2e2e2e 70%);
  padding: 8rem 0 4rem;
}

.container {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  max-width: 1600px;
  height: 100%;
  width: 100%;
  margin: auto;
  padding: 1rem;
}

.background {
  width: 50%;

  &__slice {
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
    font-size: 60px;
    font-family: Akshar, sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    color: #2e2e2e;

    & > p {
      width: max-content;
      margin: 0;
      padding: 0;
      filter: drop-shadow(2px 1px 0 rgba(0, 0, 0, 0.35));
    }
  }

  &__brand {
    font-size: 40px;
    text-transform: none;
  }
}

.links {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  &__item {
    width: max-content;
    font-size: 16px;
    color: var(--color-beige);

    & > h2 {
      font-size: 36px;
      font-weight: 600;
      color: var(--color-dark-beige);
      margin-bottom: 2rem;
    }

    & > ul {
      margin: 0;
      padding: 0;
      list-style: none;

      & > li {
        margin: 0;
        padding: 0 0 1rem 0;
        font-weight: 300;
      }
    }
  }
}
</style>
