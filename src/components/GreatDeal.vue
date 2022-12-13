<template>
  <section class="great-deal__section">
    <div class="container">
        <div class="row">

            <div class="deal__content">
                <h2 class="deal__content-title">{{ title }}</h2>

                <p class="deal__content-text">{{ text }}</p>

                <JoinBtn/>
            </div>

            <span class="bg-filter"></span>
            <img :src="dealImg" alt="" class="deal-bg-img">
        </div>
    </div>
  </section>
</template>

<script>
import JoinBtn from './JoinBtn.vue'

export default {
    name: 'Great Deal',
    data() {
        return {
            title: 'a great deal for this summer',
            text: '50% off',
            dealImg: require('@/assets/images/main/great-deal/great-deal-img.png')
        }
    },
    components: {
        JoinBtn
    }
}

</script>

<style lang="scss" scoped>

.great-deal__section {
    width: 100%;
    position: relative;
    padding: 100px 0 80px;

    .deal__content {
        max-width: 470px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 50px;

        &-title {
            font-size: calc(30px + 34 * (100vw / 1920));
            color: var(--main-white);
            text-transform: uppercase;
        }

        &-text {
            font-size: calc(30px + 34 * (100vw / 1920));
            color: var(--main-cyan);
            font-weight: 700;
            margin-left: auto;
        }

        .join-btn {
            margin-left: auto;
        }
    }

    .bg-filter {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(89.88deg, #000000 0.12%, rgba(0, 0, 0, 0.621619) 38.34%, rgba(0, 0, 0, 0) 134.42%);
        z-index: -1;
    }

    .deal-bg-img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
        object-position: top;
        z-index: -2;
    }
}

</style>