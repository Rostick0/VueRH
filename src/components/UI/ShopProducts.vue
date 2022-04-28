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

                <button v-on:click="setFavorite(product)">
                    <img v-if="checkFavorite(product.id)" class="shop-product__check-favourite" src="@/img/like-active.svg" alt="">
                    <img v-else class="shop-product__check-favourite" src="@/img/like_no-active.svg" alt="">
                </button>

                <img :src="require(`@/img/${product.path}`)" alt="">
            </div>

            <div class="shop-product__content">
                <div class="shop-product__info">
                    <h5 class="shop-product__name">
                        {{ product.name }}
                    </h5>

                    <div class="shop-product__rating">
                        <RatingStars></RatingStars>

                        <AppReviewsCount>
                            12
                        </AppReviewsCount>
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
        },
        styleFlex: {
            type: String,
            default: 'flex: 1 1 20%'
        }
    },
    methods: {
        filterFavorite(data, id) {
            if (data) {
                data = data.filter(elem => id === elem.id);
                data = data.length
                return data;
            }

            return false
        },
        localStorageSet(name, data) {
            data = JSON.stringify(data);
            localStorage.setItem(name, data)
        },
        checkFavorite(id) {
            let data = localStorage.getItem('Favorite');
            if (data) {
                data = JSON.parse(data);
                return this.filterFavorite(data, id);
            }
            return false;
        },
        setFavorite(product) {
            console.log({...product})
            let data = localStorage.getItem('Favorite');
            data = data ? JSON.parse(data) : [];

            if (this.filterFavorite(data, product.id)) {
                data = data.filter(elem => product.id !== elem.id);
                this.localStorageSet('Favorite', data);
            } else {
                data.push({...product});
                this.localStorageSet('Favorite', data);
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.shop-products {
    grid-template-columns: 1fr 1fr 1fr;
    display: grid;
    flex-wrap: wrap;
    grid-gap: 3.25rem 1.875rem;

    @media (max-width: 1024px) {
        & {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (max-width: 576px) {
        & {
            grid-template-columns: 1fr;
        }
    }
}

.shop-product {
    border: 1px solid #424242;
    border-radius: 3px;

    flex: 1 1 20%;

    transition: 50ms;
    text-align: center;


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

    width: 100%;
}

.shop-product__name {
    margin-top: 1rem;
}

.shop-product__rating {
    display: flex;
    justify-content: center;
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