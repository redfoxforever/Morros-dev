<template>
  <section class="free-gym__section">
      <div class="container">
        <div class="row">

            <h2 class="free-gym__title">
                {{ title }}
            </h2>

            <join-btn :btnText="btnValue"/>

        </div>
      </div>
    </section>
</template>

<script>
import JoinBtn from './JoinBtn.vue'

export default {
    name: 'Free Gym',
    data() {
        return {
            title: 'GET UP TO 3 DAYS OF FREE GYM',
            btnValue: 'here'
        }
    },
    components: {
        JoinBtn
    }
}

</script>

<style lang="scss" scoped>

.free-gym__section {
    width: 100%;
    background: var(--main-cyan);
    padding: 15px 0;

    .row {
        column-gap: 90px;
        justify-content: center;
        align-items: center;
    }

    .free-gym__title {
        font-size: calc(14px + 34 * (100vw / 1920));
        color: var(--main-white);
    }
}

@media (min-width: 1920px) {
    .free-gym__title {
        font-size: 48px !important;
    }
}

</style>