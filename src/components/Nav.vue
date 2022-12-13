<template>
  <nav class="nav">
    <div class="container">
        <div class="row">

            <router-link to="/" class="logo">
                <img :src="logo" alt="" class="logo-img">
            </router-link>

            <ul class="nav__list">
                <li class="nav__list-item" v-for="(link, idx) in navLinks" :key="idx">
                    <router-link :to="link.url" class="nav__list-link" active-class="active">
                        {{ link.name }}
                    </router-link>
                </li>
            </ul>
            
            <JoinBtn/>

        </div>
    </div>
  </nav>
</template>

<script>
import JoinBtn from './JoinBtn.vue'

export default {
    name: 'Nav',
    data() {
        return {
            navLinks: [
                {
                    name: 'home',
                    url: '/home'
                },
                {
                    name: 'trainers',
                    url: '/trainers'
                },
                {
                    name: 'products',
                    url: '/products'
                },
                {
                    name: 'lessons',
                    url: '/lessons'
                },
                {
                    name: 'contact',
                    url: '/contact'
                }
            ],
            logo: require('@/assets/icons/logo.svg')
        }
    },
    components: {
        JoinBtn
    }
}

</script>

<style lang="scss" scoped>

.nav {
    width: 100%;
    background: var(--main-cyan);
    padding: 15px 0;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 2022;

    .row {
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        max-width: 175px;
        width: 100%;

        &-img {
            width: 100%;
        }
    }

    &__list {
        max-width: 550px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &-link {
            font-size: calc(14px + 10 * (100vw / 1920));
            color: var(--main-white);
            font-weight: 400;
            text-transform: capitalize;
            transition: .4s;
            
            &:hover {
                color: var(--main-yellow);
            }
            
            &.router-link-exact-active {
                color: var(--main-yellow);
            }
        }
    }
}

@media (min-width: 1920px) {
    .nav__list-link {
        font-size: 24px !important; 
    }
}

</style>