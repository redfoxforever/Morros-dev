<template>
    <section class="prices__section">
        <div class="container">
            <div class="row">

                <h2 class="prices__title">{{ title }}</h2>

                <div class="prices__cards">
                    <div class="prices__card" v-for="(card, idx) in cards" :key="idx">
                        <h3 class="prices__card-title">{{ card.title }}</h3>

                        <p class="prices__card-price">${{ card.price }}</p>

                        <ul class="limits__list">
                            <li class="limits__list-item" v-for="(item, idd) in card.limits" :key="idd">
                                {{ item.name }}
                            </li>
                        </ul>

                        <button class="buy-btn">offer now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'Prices',
    data() {
        return {
            title: 'our prices',
            cards: [
                {
                    title: 'basic plan',
                    price: 20,
                    limits: [
                        {
                            name: 'Unlimited access 24h'
                        },
                        {
                            name: 'Personal trainer'
                        },
                        {
                            name: 'Locker + Bathroom'
                        }
                    ]
                },
                {
                    title: 'medium plan',
                    price: 28,
                    limits: [
                        {
                            name: 'Unlimited access 24h'
                        },
                        {
                            name: 'Personal trainer'
                        },
                        {
                            name: 'Locker + Bathroom'
                        },
                        {
                            name: 'Massage once a month'
                        }
                    ]
                },
                {
                    title: 'pro plan',
                    price: 35,
                    limits: [
                        {
                            name: 'Unlimited access 24h'
                        },
                        {
                            name: 'Personal trainer'
                        },
                        {
                            name: 'Locker + Bathroom'
                        },
                        {
                            name: 'Massage once a month'
                        },
                        {
                            name: '1 Spa Session'
                        }
                    ]
                },
            ]
        }
    }
}

</script>

<style lang="scss" scoped>

.prices__section {
    width: 100%;
    padding: 35px 0;

    .row {
        flex-direction: column;
        align-items: center;
        text-align: center;
        row-gap: 25px;
    }

    .prices__title {
        font-size: calc(24px + 24 * (100vw / 1920));
        text-transform: uppercase;
    }

    .prices__cards {
        width: 100%;
        display: flex;
        gap: 30px;
        flex-wrap: wrap;

        .prices__card {
            max-width: 385px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            row-gap: 15px;
            background: #272727;
            padding: 50px 0 55px;
            border-radius: 4px;

            &-title {
                font-size: 30px;
                text-transform: uppercase;
            }

            &-price {
                font-size: 70px;
                font-weight: 700;
                color: var(--main-cyan);
            }

            .limits__list {
                max-width: max-content;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                margin-bottom: 40px;

                &-item {
                    color: var(--main-white);
                    font-weight: 700;
                    font-size: 18px;
                }
            }

            .buy-btn {
                display: block;
                max-width: max-content;
                width: 100%;
                padding: 7px 30px;
                border: 0;
                background: var(--main-cyan);
                color: var(--main-white);
                font-size: calc(14px + 10 * (100vw / 1920));
                cursor: pointer;
                border-radius: 4px;
                text-transform: uppercase;
                transition: .4s;
                margin-top: auto;

                &:hover {
                    color: var(--main-cyan);
                    background: var(--main-yellow);
                }
            }
        }
    }
}

</style>