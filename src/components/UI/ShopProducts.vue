<template>
    <ul class="shop-products">
        <li v-for="product in products" v-bind:key="product.id" class="shop-product">
            <div class="shop-product__img">
                <div v-show="product.isHitSales" class="shop-product__ribbon">
                    Хит продаж!
                </div>

                <ul class="shop-product__stocks">
                    <li v-show="product.isNovelty" class="shop-product__stocks_novelty">
                        Новинка
                    </li>
                    <li v-show="product.isDiscount" class="shop-product__stocks_discount">
                        Скидка
                    </li>
                    <li v-show="product.isHit" class="shop-product__stocks_hit">
                        Хит
                    </li>
                </ul>

                <img v-if="isFavourite" class="shop-product__check-favourite" src="@/img/like-active.svg" alt="">
                <img v-else class="shop-product__check-favourite" src="@/img/like_no-active.svg" alt="">

                <img :src="require(`@/img/${product.path}`)" alt="">
            </div>

            <div class="shop-product__content">
                <div class="shop-product__info">
                    <h5 class="shop-product__name">
                        {{ product.name }}
                    </h5>

                    <div class="shop-product__rating">
                        <RatingStars></RatingStars>

                        <span class="shop-product__count-reviews">
                            (12 отзывов)
                        </span>
                    </div>

                    <div class="shop-product__price">
                        <span v-if="product.delPrice" class="shop-product__price_strikeout">
                            <del>
                                {{ product.delPrice }}
                            </del>
                        </span>
                        <span class="shop-product__price_ruble">
                            {{ product.ruble }} р
                        </span>
                        /
                        <span class="shop-product__price_hryvnia">
                            {{ product.hryvnia }} гр
                        </span>
                    </div>
                </div>

                <AppButton class="shop-product__button">
                    В корзину
                </AppButton>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'ShopProducts',
    data() {
        return {
            // products: [
            //     {
            //         id: 1,
            //         name: 'Самый вкусный мед',
            //         delPrice: 0,
            //         ruble: 150,
            //         hryvnia: 100,
            //         isHitSales: null,
            //         isNovelty: null,
            //         isDiscount: null,
            //         isHit: null
            //     },
            //     {
            //         id: 2,
            //         name: 'Самый вкусный мед',
            //         delPrice: 300,
            //         ruble: 150,
            //         hryvnia: 100,
            //         isHitSales: true,
            //         isNovelty: null,
            //         isDiscount: null,
            //         isHit: null
            //     },
            //     {
            //         id: 3,
            //         name: 'Самый вкусный мед',
            //         delPrice: 0,
            //         ruble: 150,
            //         hryvnia: 100,
            //         isHitSales: null,
            //         isNovelty: true,
            //         isDiscount: true,
            //         isHit: true
            //     },
            //     {
            //         id: 4,
            //         name: 'Самый вкусный мед',
            //         delPrice: 0,
            //         ruble: 150,
            //         hryvnia: 100,
            //         isHitSales: null,
            //         isNovelty: null,
            //         isDiscount: null,
            //         isHit: null
            //     },
            //     {
            //         id: 5,
            //         name: 'Самый вкусный мед',
            //         delPrice: 200,
            //         ruble: 150,
            //         hryvnia: 100,
            //         isHitSales: null,
            //         isNovelty: true,
            //         isDiscount: true,
            //         isHit: null
            //     },
            //     {
            //         id: 6,
            //         name: 'Самый вкусный мед',
            //         delPrice: 0,
            //         ruble: 150,
            //         hryvnia: 100,
            //         isHitSales: null,
            //         isNovelty: null,
            //         isDiscount: null,
            //         isHit: null
            //     },
            //     {
            //         id: 7,
            //         name: 'Самый вкусный мед',
            //         delPrice: 0,
            //         ruble: 150,
            //         hryvnia: 100,
            //         isHitSales: null,
            //         isNovelty: null,
            //         isDiscount: null,
            //         isHit: null
            //     },
            //     {
            //         id: 8,
            //         name: 'Самый вкусный мед',
            //         delPrice: 0,
            //         ruble: 300,
            //         hryvnia: 200,
            //         isHitSales: null,
            //         isNovelty: null,
            //         isDiscount: null,
            //         isHit: null
            //     },
            // ]
        }
    },
    props: {
        products: {
            type: Array,
            required: true
        },
        isFavourite: {
            type: Boolean,
            default: false
        }
    },
}
</script>

<style lang="scss" scoped>
.shop-products {
    display: flex;
    flex-wrap: wrap;
}

.shop-product {
    border: 1px solid #424242;
    border-radius: 3px;

    flex: 1 1 20%;

    text-align: center;

    max-width: 300px;

    margin-right: 1.875rem;
    margin-bottom: 3.25rem;

    &:nth-child(4n) {
        margin-right: 0;
    }

    &:last-child {
        margin-right: 0;
    }

    &:nth-last-child(-n + 4) {
        margin-bottom: 0;
    }

    &:hover {
        border: 1px solid #00A23D;
        outline: 2px solid #00A23D;
        box-shadow: 6px 6px 6px rgba(163, 163, 163, 0.25);
    }
}

.shop-product__img {
    background: linear-gradient(90deg, #ECE9E6 0%, #FFFFFF 100%);

    position: relative;

    .shop-product__check-favourite {
        position: absolute;

        top: 1.5rem;
        left: 80%;
        

        width: 1.75rem;

        z-index: 100;
    }
}

.shop-product__ribbon {
    background: url('../../img/hit_sales.svg') no-repeat;

    font-family: 'OrchideaPro-Bold';
    font-size: 1.25rem;

    left: -0.5rem;
    top: -2rem;

    padding: 1.125rem 2rem 2rem 1.06rem;

    position: absolute;
}

.shop-product__stocks {
    display: flex;

    font-size: 0.75rem;

    top: 1.25rem;

    position: absolute;

    & > * {
        padding-top: 0.32rem;
        padding-bottom: 0.32rem;

        margin-right: 0.32rem;
    }

    & > *:last-child {
        margin-right: 0;
    }
}

.shop-product__stocks_novelty {
    background: #FAAF3A;

    padding-left: 0.625rem;
    padding-right: 0.625rem;
}

.shop-product__stocks_discount {
    background: #FEC66E;

    padding-left: 0.875rem;
    padding-right: 0.875rem;
}

.shop-product__stocks_hit {
    background: #FFDDA7;
    border-radius: 0px 5px 5px 0px;
    
    padding-left: 1rem;
    padding-right: 1rem;
}

.shop-product__content {
    padding: 0 1.75rem 1.5rem;
}

.shop-product__info {
    color: #424242;

    font-family: 'OrchideaPro-Bold';

    & > * {
        margin-bottom: 1.5rem;
    }
}

.shop-product__button {
    padding: 0.75rem 3rem;
}

.shop-product__name {
    margin-top: 1rem;
}

.shop-product__rating {
    display: flex;
    justify-content: center;
}

.shop-product__count-reviews {
    color: #BDBDBD;
}

.shop-product__price {
    font-family: 'OrchideaPro-SemiBold';
}

.shop-product__price_strikeout {
    margin-right: 0.625rem;
}

.shop-product__img {
    img {
        width: 100%;
    }
}
</style>