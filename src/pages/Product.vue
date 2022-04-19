<template>
    <div class="product">
        <div class="container">
            <AppNavigation></AppNavigation>

            <div class="product__content">
                <div class="product__top">
                    <div class="product__images">
                        <div class="product__images_scroll">
                            <div class="product__arrow-top">
                                <svg width="28" height="19" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27 18L13.5806 2L1 18" stroke="#424242" stroke-width="2"/>
                                </svg>
                            </div>

                            <div class="">
                                <img src="@/img/product_honey.png" alt="">
                                <img src="@/img/product_honey.png" alt="">
                                <img src="@/img/product_honey.png" alt="">
                            </div>

                            <div class="product__arrow-bottom">
                                <svg width="28" height="19" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27 1L13.5806 17L1 1" stroke="#424242" stroke-width="2"/>
                                </svg>
                            </div>
                        </div>

                        <div class="product__image_main">
                            <img src="@/img/product_honey.png" alt="">
                        </div>
                    </div>

                    <div class="product__info">
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
                                <AppButton>100 гр.</AppButton>
                                <AppButton>250 гр.</AppButton>
                                <AppButton>500 гр.</AppButton>
                                <AppButton>800 гр.</AppButton>
                                <AppButton>1 кг.</AppButton>
                                <AppButton>1,5 кг.</AppButton>
                            </div>
                            <div class="product__count">
                                <div class="product__count_input">
                                    <input type="number">
                                </div>
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
                            <AppButton>Купить в 1 клик</AppButton>
                            <AppButton>В корзину</AppButton>
                        </div>
                    </div>
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
    }
}
</script>

<style lang="scss" scoped>
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