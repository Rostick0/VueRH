<template>
    <ul class="cart__products">
        <li v-for="product in parseLocalStorage('ProductCart')" v-bind:key="product.id" class="cart__product">
            <div class="cart__img">
                <img :src="require(`@/img/${product.path}`)" alt="">
            </div>

            <form class="cart__form" method="POST" onsubmit="return false;">
                <div class="cart__form_top">
                    <div class="cart__title">
                        {{ product.name }}
                    </div>

                    <div v-on:click="deleteProduct(product.id, 'ProductCart')" class="cart__delete">
                        <AppCloseButton></AppCloseButton>
                    </div>
                </div>

                <div class="cart__form_botom">
                    <div class="cart__form_left">
                        <div class="cart__weight">
                            <AppButtonRadio v-bind:styleSpan="styleButtonRadio" idAndFor="100" name="weight">100 гр.</AppButtonRadio>
                            <AppButtonRadio v-bind:styleSpan="styleButtonRadio" idAndFor="250" name="weight">250 гр.</AppButtonRadio>
                            <AppButtonRadio v-bind:styleSpan="styleButtonRadio" idAndFor="500" name="weight">500 гр.</AppButtonRadio>
                            <AppButtonRadio v-bind:styleSpan="styleButtonRadio" idAndFor="1,5" name="weight">1,5 кг.</AppButtonRadio>
                        </div>

                        <div class="cart__form_left_bottom">
                            <AppInputCounter></AppInputCounter>
                            <div class="cart__price">
                                {{product.ruble}} руб.
                            </div>
                        </div>
                    </div>

                    <div class="cart__form_right">
                        <div>
                            <AppInput v-bind:styleInput="styleInput" class="cart__promo" placeholder="Ввести промокод"></AppInput>
                            <AppButton class="cart__discount">
                                Получить скидку
                            </AppButton>
                        </div>

                        <router-link class="cart__to-shop" to="/catalog">
                            <svg width="23" height="7" viewBox="0 0 23 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23 3.5H1.5M1.5 3.5L6 0.5M1.5 3.5L6 6.5" stroke="#A5A3A3"/>
                            </svg>
                            <span>
                                К покупкам
                            </span>
                        </router-link>
                    </div>
                </div>
            </form>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'AppCartProduct',
    data() {
        return {
            styleButtonRadio: {
                fontSize: '0.75rem',
                padding: '0.25rem 0.5rem',
            },
            styleInput: {
                fontSize: '0.5rem',
                padding: '0.44rem 0.625rem'
            }
        }
    },
    methods: {
        parseLocalStorage(name) {
            let parse = localStorage.getItem(name);
            parse = parse ? JSON.parse(parse) : 0;
            return parse;
        },
        deleteProduct(id, name) {
            let data = this.parseLocalStorage(name);
            data = data.filter(elem => elem.id !== id);

            if (data) {
                data = JSON.stringify(data)
                localStorage.setItem(name, data)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.cart__product {
    background: #FEFEFE;
    border: 2px solid #00A23D;
    border-radius: 5px;

    display: flex;

    margin-bottom: 1.25rem;

    &:last-child {
        margin-bottom: 0;
    }
}

.cart__img {
    flex: 0 0 26%;

    img {
        width: 100%;
    }
}

.cart__form {
    flex: 1 1 100%;

    padding: 1.25rem;

    @media (max-width: 576px) {
        padding: 0.5rem;
    }
}

.cart__title {
    font-family: 'OrchideaPro-SemiBold';
}

.cart__form_top {
    display: flex;
    justify-content: space-between;

    margin-bottom: 0.625rem;
}

.cart__form_botom {
    display: flex;
    justify-content: space-between;

    @media (max-width: 576px) {
        & {
            flex-direction: column;
        }

        & > *:first-child {
            margin-bottom: 1rem;
        }
    }
}

.cart__form_center {
    margin-bottom: 0.652rem;
}

.cart__weight {
    grid-template-columns: repeat(3, 1fr);
    display: grid;
    grid-gap: 0.375rem;

    font-size: 0.75rem;

    margin-bottom: 1rem;
}

.cart__form_left_bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.cart__form_right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.cart__to-shop {
    color: #A5A3A3;

    font-size: 0.75rem;
}

.cart__promo {
    margin-bottom: 0.375rem;
}

.cart__discount {
    font-size: 0.5rem;

    padding: 0.44rem 0.625rem;

    width: 100%;
}
</style>