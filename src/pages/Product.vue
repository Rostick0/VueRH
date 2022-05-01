<template>
    <div class="product">
        <div class="container">
            <AppNavigation v-bind:navigationItems="navigationItems"></AppNavigation>

            <div class="product__content">
                <div class="product__top">
                    <AppProductSliderImg class="product__images" v-bind:imagesSliders="imagesSliders"></AppProductSliderImg>

                    <form class="product__info" method="POST" onsubmit="return false;">
                        <div class="product__evaluation">
                            <RatingStars></RatingStars>

                            <AppReviewsCount>12</AppReviewsCount>
                        </div>

                        <div class="product__title">
                            <div class="product__name">
                                Самый вкусный мед
                            </div>

                            <div class="product__availability">
                                Есть в наличии
                            </div>
                        </div>

                        <div class="product__weight">
                            <div class="product__weight_select">
                                <AppButtonRadio idAndFor="100" name="weight" styleSpan="padding: 0.5rem 0; border-radius: 2px;">100 гр.</AppButtonRadio>
                                <AppButtonRadio idAndFor="250" name="weight" styleSpan="padding: 0.5rem 0; border-radius: 2px;">250 гр.</AppButtonRadio>
                                <AppButtonRadio idAndFor="500" name="weight" styleSpan="padding: 0.5rem 0; border-radius: 2px;">500 гр.</AppButtonRadio>
                                <AppButtonRadio idAndFor="800" name="weight" styleSpan="padding: 0.5rem 0; border-radius: 2px;">800 гр.</AppButtonRadio>
                                <AppButtonRadio idAndFor="1" name="weight" styleSpan="padding: 0.5rem 0; border-radius: 2px;">1 кг.</AppButtonRadio>
                                <AppButtonRadio idAndFor="1,5" name="weight" styleSpan="padding: 0.5rem 0; border-radius: 2px;">1,5 кг.</AppButtonRadio>
                            </div>
                            <div class="product__count">
                                <AppInputCounter></AppInputCounter>
                                <div class="product__discount">
                                    Скидка!
                                </div>
                                <div class="product__price_sum">
                                    <div class="product__price_del">
                                        <del>300 руб.</del>
                                    </div>
                                    <div class="product__price_real">
                                        250 руб.
                                    </div>
                                </div>
                            </div>
                            <div class="product__weight_final">
                                Общий вес на 200гр, на сумму 500 рублей
                            </div>
                        </div>

                        <div class="product__info_buttons">
                            <AppButton class="product__info_button">Купить в 1 клик</AppButton>
                            <AppButton class="product__info_button">В корзину</AppButton>
                        </div>
                    </form>
                </div>

                <div class="product__bottom">
                    <ul class="product__switching">
                        <li class="product__switching_item">
                            Описание товара
                        </li>
                        <li class="product__switching_item _active">
                            Отзывы (12)
                        </li>
                    </ul>

                    <AppProductComments v-bind:comments="comments" class="product__comments"></AppProductComments>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Product',
    data() {
        return {
            count: 0,
            imagesSliders: [
                {
                    id: 1,
                    path: 'product_honey.png'
                },
                {
                    id: 2,
                    path: 'chat_avatar.png'
                },
                {
                    id: 3,
                    path: 'product_honey.png'
                },
                {
                    id: 4,
                    path: 'product_honey.png'
                },
                {
                    id: 5,
                    path: 'product_honey.png'
                }
            ],
            navigationItems: [
                {
                    id: 1,
                    text: 'Каталог',
                    link: '/catalog',
                },
                {
                    id: 2,
                    text: 'Башкирский мед',
                    link: '/catalog',
                },
                {
                    id: 3,
                    text: `Самый вкусный мед`,
                    link: '#',
                },
            ],
            comments: [
                {
                    id: 1,
                    userName: 'Руднева Екатерина',
                    avatar: 'avatar.png',
                    date: '20 февраля 2022  20:20',
                    title: 'Случайный текст похож на звон колоколов',
                    text: `Сложно сказать, почему представители современных социальных резервов формируют 
                            глобальную экономическую сеть и при этом - призваны к ответу! Независимые государства, 
                            которые представляют собой яркий пример континентально-европейского типа политической 
                            культуры, будут представлены в исключительно положительном свете. Приятно, граждане, 
                            наблюдать, как представители современных социальных резервов освещают чрезвычайно 
                            интересные особенности картины в целом, однако конкретные выводы, разумеется, в равной 
                            степени предоставлены сами себе. Следует отметить, что понимание сути ресурсосберегающих 
                            технологий позволяет выполнить важные задания по разработке вывода текущих активов.`,
                    likes: '1',
                    dislikes: '0'
                },
                {
                    id: 2,
                    userName: 'Руднева Екатерина',
                    avatar: 'avatar.png',
                    date: '20 февраля 2022  20:20',
                    title: 'Случайный текст похож на звон колоколов',
                    text: `Сложно сказать, почему представители современных социальных резервов формируют 
                            глобальную экономическую сеть и при этом - призваны к ответу! Независимые государства, 
                            которые представляют собой яркий пример континентально-европейского типа политической 
                            культуры, будут представлены в исключительно положительном свете. Приятно, граждане, 
                            наблюдать, как представители современных социальных резервов освещают чрезвычайно 
                            интересные особенности картины в целом, однако конкретные выводы, разумеется, в равной 
                            степени предоставлены сами себе. Следует отметить, что понимание сути ресурсосберегающих 
                            технологий позволяет выполнить важные задания по разработке вывода текущих активов.
                            Сложно сказать, почему представители современных социальных резервов формируют 
                            глобальную экономическую сеть и при этом - призваны к ответу! Независимые государства, 
                            которые представляют собой яркий пример континентально-европейского типа политической 
                            культуры, будут представлены в исключительно положительном свете. Приятно, граждане, 
                            наблюдать, как представители современных социальных резервов освещают чрезвычайно 
                            интересные особенности картины в целом, однако конкретные выводы, разумеется, в равной 
                            степени предоставлены сами себе. Следует отметить, что понимание сути ресурсосберегающих 
                            технологий позволяет выполнить важные задания по разработке вывода текущих активов.`,
                    likes: '1',
                    dislikes: '0'
                },
                {
                    id: 3,
                    userName: 'Руднева Екатерина',
                    avatar: 'avatar.png',
                    date: '20 февраля 2022  20:20',
                    title: 'Случайный текст похож на звон колоколов',
                    text: `Сложно сказать, почему представители современных социальных резервов формируют 
                            глобальную экономическую сеть и при этом - призваны к ответу! Независимые государства, 
                            которые представляют собой яркий пример континентально-европейского типа политической 
                            культуры, будут представлены в исключительно положительном свете. Приятно, граждане, 
                            наблюдать`,
                    likes: '1',
                    dislikes: '0'
                }
            ]
        }
    },
    methods: {
        incrementCount() {
            return this.count++;
        },
        decrementCount() {
            if (this.count > 0) {
                return this.count--;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.product__top {
    display: flex;

    @media (max-width: 1024px) {
        & {
            flex-direction: column;
            align-items: center;
        }

        &:first-child {
            margin-bottom: 1rem;
        }
    }
}

.product__images {
    display: flex;

    flex: 1 1 100%;
}

.product__info {
    display: flex;
    flex-direction: column;

    flex: 1 1 100%;
}

.product__evaluation {
    display: flex;
    justify-content: end;

    margin-bottom: 1.75rem;
}

.product__title {
    display: flex;
    justify-content: space-between;

    margin-bottom: 2.25rem;
}

.product__name {
    font-family: 'OrchideaPro-Bold';
    font-size: 1.5rem;

    @media (max-width: 576px) {
        & {
            font-size: 1.25rem;
        }
    }
}

.product__availability {
    background: #FAAF3A;
    border-radius: 5px;

    color: #000000;

    font-family: 'OrchideaPro-Bold';

    padding: 0.375rem 0.75rem;
}

.product__weight {
    display: inline-block;

    margin: 0 auto;
}

.product__weight_select {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    & > * {
        flex: 0 1 26%;

        margin-bottom: 1.25rem;
    }
}

.product__count {
    display: flex;
    align-items: center;

    margin-bottom: 1.5rem;
}

.product__discount {
    background: #FAAF3A;
    border-radius: 5px;

    color: #000000;

    font-family: 'OrchideaPro-Bold';

    padding: 0.25rem 0.5rem;

    margin-right: 1rem;
}

.product__price_del {
    margin-right: 1rem;
}

.product__price_sum {
    display: flex;
}

.product__weight_final {
    border: 2px solid #00A23D;
    border-radius: 5px;

    display: inline-block;

    padding: 0.75rem 2.5rem;
    margin-bottom: 1.75rem;
}

.product__info_buttons {
    @media (max-width: 576px) {
        & {
            grid-template-columns: repeat(2, 1fr);
            display: grid;
            grid-gap: 1rem;
        }

    }
}

.product__info_button {
    padding: 0.75rem 1.875rem;
    margin-left: 2rem;

    &:first-child {
        margin-right: 2.125rem;
    }

    @media (max-width: 576px) {
        &:nth-child(1n) {
            margin: 0;
            padding: 0.5rem 1rem;
        }
    }
}

.product__switching {
    border-bottom: 0.5px solid #BDBDBD;

    display: flex;

    padding-bottom: 0.625rem;
}

.product__switching_item {
    font-family: 'OrchideaPro-Bold';
    font-size: 1.25rem;

    margin-right: 3.75rem;

    &:last-child {
        margin-right: 0;
    }

    &._active {
        color: #00A23D;
    }
}

.product__bottom {
    margin-top: 3.75rem;
}

.product__comments {
    margin-top: 1.25rem;
}
</style>