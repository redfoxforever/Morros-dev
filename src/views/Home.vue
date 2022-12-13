<template>
  <header class="header">
    <div class="container">
      <div class="row">

        <div class="header__content">
          <h1 class="header__content-title">{{ title }}</h1>

          <join-btn/>
        </div>
        
        <img :src="headerImg" alt="" class="header-img">

      </div>
    </div>
  </header>

  <main class="main">
    <FreeGym/>

    <GreatDeal/>

    <Prices/>
  </main>

</template>

<script>
import JoinBtn from '@/components/JoinBtn.vue'
import FreeGym from '@/components/FreeGym.vue'
import GreatDeal from '@/components/GreatDeal.vue'
import Prices from '@/components/Prices.vue'

export default {
  name: 'Home',
  data() {
    return {
      headerImg: require('@/assets/images/header/header-img.png'),
      title: 'come strengthen your body and fitness with professionals'
    }
  },
  components: {
    JoinBtn,
    FreeGym,
    GreatDeal,
    Prices
  }
}
</script>

<style lang="scss" scoped>

.header {
  width: 100%;
  padding: 150px 0;
  position: relative;

  &__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 90px;
    align-items: flex-start;

    &-title {
      max-width: 755px;
      width: 100%;
      font-size: calc(26px + 54 * (100vw / 1920));
      color: var(--main-white);
      text-transform: uppercase;
    }
  }

  &-img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    object-position: top;
    z-index: -1;
  }
}

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
}

@media (min-width: 1920px) {
  .header__content-title {
    font-size: 80px !important;
  }
}



</style>
