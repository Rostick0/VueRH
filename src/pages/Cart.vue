<template>
    <div class="container">
        <AppNavigation v-bind:navigationItems="navigationItems"></AppNavigation>

        <div class="cart">
            <div class="cart__title">
                Корзина заказов:
            </div>

            <AppAlert class="cart__alert">
                <template v-slot:text>
                    <div class="cart__alert_title">
                        <strong>
                            Внимание!
                        </strong> 
                        Минимальная сумма заказа - 500 рублей, кроме самовывоза из наших магазинов по адресу:
                    </div>
                    <ul class="cart__alert_ul">
                        <li class="cart__alert_item">
                            г. Москва, Ярославское ш., д. 54, Гипермаркет "Лента», на 1 этаже в центре зала;
                        </li>
                    </ul>
                </template>
                
            </AppAlert>

            <div class="cart__subtitle">
                Вы можете отредактировать Ваш заказ, или сразу перейти к оформлению
            </div>

            <div class="cart__container">
                <div class="cart__container_left">

                    <div v-if="true" class="cart__no-products">
                        <div class="cart__no-products_img">
                            <svg width="54" height="53" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M51.4891 16.5538L42.532 0H38.468L47.4252 16.5538H6.57484L15.532 0H11.468L2.51089 16.5538H0V28.6934L4.8213 52.2752H49.1757L54 28.9239V16.5538H51.4891ZM50.4 28.5789L46.2243 48.7902H7.7787L3.6 28.3519V27.8801H50.4V28.5789ZM50.4 24.3951H3.6V20.0388H50.4V24.3951Z" fill="#00A23D"/>
                            </svg>
                        </div>
                        <router-link to="/catalog">
                            <AppButton class="cart__no-products_button">
                                Перейти в каталог
                            </AppButton>
                        </router-link>
                    </div>
                    <ul v-else class="cart__products">
                        <li class="cart__products_item"></li>
                    </ul>

                    <div class="cart__help">
                        <div class="cart__help_title">
                            Нужна помощь при оформлении заказа?
                        </div>

                        <div class="cart__help_text">
                            Позвоните нам, или оставьте комментарий в правом 
                            нижнем окне. И мы вам поможем! 
                        </div>

                        <div class="cart__help_num">
                            <AppGreyPhone></AppGreyPhone>
                        </div>
                    </div>
                </div>

                <div class="cart__container_right">
                    <form class="cart__form" action="#" method="POST" onsubmit="return false;">
                        <div class="cart__form_top">
                            <div class="cart__form_title">
                                Оформление заказа
                            </div>

                            <router-link to="/">
                                Войти или зарегестрироваться
                            </router-link>
                        </div>

                        <div class="cart__user">
                            <div class="cart__user_title">
                                Покупатель
                            </div>

                            <div class="cart__inputs">
                                <AppInput class="cart__input" v-model="val" important placeholder="Имя" type="text"></AppInput>
                                <AppInput class="cart__input" important placeholder="Фамилия" type="text"></AppInput>
                                <AppInput class="cart__input" important placeholder="+ 7 (000) - 000 - 00 - 00" type="number"></AppInput>
                                <AppInput class="cart__input" important placeholder="E-mail адрес" type="email"></AppInput>
                            </div>
                        </div>

                        <div class="cart__delivery">
                            <div class="cart__delivery_title">
                                Доставка
                            </div>

                            <div class="cart__delivery_subtitle">
                                <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.22245 4.2275L4.97245 3.5L6.18995 2.785C6.30648 2.72086 6.40461 2.6279 6.47495 2.515C6.5629 2.37212 6.6004 2.20387 6.58145 2.03716C6.5625 1.87045 6.4882 1.71491 6.37042 1.59541C6.25265 1.4759 6.09821 1.39935 5.93179 1.37797C5.76538 1.3566 5.5966 1.39164 5.45245 1.4775L4.24995 2.19V0.75C4.24995 0.551088 4.17093 0.360322 4.03028 0.21967C3.88963 0.0790177 3.69886 0 3.49995 0C3.30104 0 3.11027 0.0790177 2.96962 0.21967C2.82897 0.360322 2.74995 0.551088 2.74995 0.75V2.19L1.53745 1.4775C1.45221 1.42003 1.35607 1.38069 1.25499 1.36194C1.15391 1.34319 1.05006 1.34541 0.949878 1.36848C0.849697 1.39154 0.755328 1.43496 0.67263 1.49603C0.589933 1.5571 0.520673 1.63452 0.469152 1.72348C0.41763 1.81244 0.384948 1.91104 0.373133 2.01316C0.361319 2.11528 0.370625 2.21874 0.400474 2.31712C0.430322 2.41549 0.480076 2.50668 0.546646 2.58501C0.613215 2.66335 0.695179 2.72717 0.787447 2.7725L2.03745 3.5L0.799947 4.215C0.683415 4.27914 0.585287 4.3721 0.514947 4.485C0.428203 4.62788 0.391675 4.79564 0.411161 4.96165C0.430648 5.12766 0.505032 5.28241 0.622505 5.40132C0.739978 5.52023 0.893806 5.59649 1.05957 5.61799C1.22533 5.63949 1.39352 5.605 1.53745 5.52L2.74995 4.81V6.225C2.74404 6.38481 2.78937 6.54233 2.87932 6.67456C2.96927 6.80679 3.09913 6.9068 3.24995 6.96C3.3633 7.00008 3.48463 7.01232 3.60371 6.99568C3.72278 6.97905 3.83611 6.93404 3.93414 6.86443C4.03218 6.79483 4.11204 6.70268 4.167 6.59574C4.22196 6.48881 4.25041 6.37023 4.24995 6.25V4.81L5.46245 5.5225C5.54769 5.57997 5.64383 5.61931 5.7449 5.63806C5.84598 5.65682 5.94984 5.65459 6.05002 5.63152C6.1502 5.60846 6.24457 5.56504 6.32727 5.50397C6.40996 5.4429 6.47922 5.36548 6.53074 5.27652C6.58227 5.18756 6.61495 5.08896 6.62676 4.98684C6.63858 4.88472 6.62927 4.78126 6.59942 4.68288C6.56957 4.58451 6.51982 4.49332 6.45325 4.41499C6.38668 4.33665 6.30472 4.27283 6.21245 4.2275H6.22245Z" fill="#FAAF3A"/>
                                </svg>
                                <span>
                                    Для расчета стоимости и срока доставки заполните поля со звездочкой
                                </span>
                            </div>

                            <div class="cart__delivery_all-select">
                                <AppSelect v-bind:values="values" class="cart__delivery_select"></AppSelect>
                                <AppSelect v-bind:values="values" class="cart__delivery_select"></AppSelect>
                                <AppSelect v-bind:values="values" class="cart__delivery_select"></AppSelect>
                            </div>
                        </div>

                        <div class="cart__method">
                            <div class="cart__method_title">
                                Способ доставки:
                            </div>
                            <div class="cart__method_buttons">
                                <AppButtonRadio class="cart__method_button" idAndFor="courier" name="delivery" styleSpan="padding: 0.875rem 0; border-radius: 3px 0 0 3px;">Курьер</AppButtonRadio>
                                <AppButtonRadio class="cart__method_button" idAndFor="pickup" name="delivery" styleSpan="padding: 0.875rem 0; border-radius: 0 3px 3px 0;">Самовывоз</AppButtonRadio>
                            </div>
                            <ul class="cart__method_info">
                                <li class="cart__method_info_item">
                                    <span>
                                        Стоимость доставки:
                                    </span>
                                    <span>
                                        500 руб.
                                    </span>
                                </li>
                                <li class="cart__method_info_item">
                                    <span>
                                        Доставка:
                                    </span>
                                    <span>
                                        Курьер
                                    </span>
                                </li>
                                <li class="cart__method_info_item">
                                    <span>
                                        День доставки:
                                    </span>
                                    <span>
                                        9. 02. 2022
                                    </span>
                                </li>
                            </ul>
                            <div class="cart__method_address">
                                <AppInput class="cart__input"></AppInput>
                            </div>
                        </div>

                        <div class="cart__pay">
                            <div class="cart__pay_title">
                                Оплата:
                            </div>
                            <div class="cart__pay_buttons">
                                <AppButtonRadio class="cart__pay_button" idAndFor="card" name="pay" styleSpan="padding:0.75rem 1rem; border-radius: 3px 3px 0 0; justify-content: left;">
                                    Оплата картой на сайте
                                </AppButtonRadio>
                                <AppButtonRadio class="cart__pay_button" idAndFor="cash" name="pay" styleSpan="padding:0.75rem 1rem; border-radius: 0 0 3px 3px; justify-content: left;">
                                    Оплата наличными, при получении заказа
                                </AppButtonRadio>
                            </div>
                        </div>

                        <div class="cart__commet">
                            <div class="cart__commet_title">
                                Комментарий к заказу:
                            </div>
                            <AppInput class="cart__input"></AppInput>
                        </div>

                        <ul class="cart__result">
                            <li class="cart__result_item">
                                <span>
                                    Стоимость заказа:
                                </span>
                                <span>
                                    500 руб.
                                </span>
                            </li>
                            <li class="cart__result_item">
                                <span>
                                    Стоимость доставки:
                                </span>
                                <span>
                                    500 руб.
                                </span>
                            </li>
                            <li class="cart__result_item">
                                <span>
                                    Итого к оплате:
                                </span>
                                <span>
                                    1000 руб.
                                </span>
                            </li>
                        </ul>

                        <div class="cart__btn">
                            <AppButton class="cart__button">
                                Купить
                            </AppButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cart',
    data() {
        return {
            val: '',
            navigationItems: [
                {
                    id: 1,
                    text: 'Корзина',
                    link: '/cart',
                }
            ],
            values: [
                {
                    id: 1,
                    value: 1,
                    text: 'Страна'
                },
                {
                    id: 2,
                    value: 2,
                    text: '2'
                },
                {
                    id: 3,
                    value: 3,
                    text: '3'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.cart__title {
    font-family: 'OrchideaPro-ExtraBold';
    font-size: 1.5rem;

    margin-bottom: 1.875rem;
}

.cart__alert {
    color: #FF0000;

    font-size: 0.875rem;
    line-height: 0.875rem;

    padding: 0.875rem 0 1rem;
    margin-bottom: 1.875rem;
}

.cart__alert_item {
    display: flex;
    align-items: center;

    font-size: 0.75rem;
    line-height: 0.75rem;

    margin-top: 0.375rem;

    &::before {
        content: "";

        background: #FF0000;
        border-radius: 50%;

        display: block;

        margin-right: 0.31rem;

        width: 0.375rem;
        height: 0.375rem;
    }
}

.cart__subtitle {
    margin-bottom: 1.25rem;
}

.cart__no-products {
    background: #FEFEFE;
    border: 2px solid #00A23D;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 1.75rem;
    padding-bottom: 1.5rem;
}

.cart__no-products_img {
    display: flex;
    flex-direction: column;
    align-items: center;

    &::after {
        content: 'В Вашей корзине пусто';
        display: block;

        margin-top: 1rem;
    }
}

.cart__no-products_button {
    padding: 0.875rem 1.2rem;
    margin-top: 1.5rem;
}

.cart__container {
    display: flex;
}

.cart__container_left {
    flex: 1 1 45%;

    margin-right: 2rem;
}

.cart__help {
    margin-top: 1.875rem;

    & > * {
        margin-bottom: 1rem;
    }

    & > *:last-child  {
        margin-bottom: 0;
    }
}

.cart__help_title {
    font-family: 'OrchideaPro-Bold';
    font-size: 1.25rem;
}

.cart__help_text {
    line-height: 1.5rem;
}

.cart__container_right {
    background: #FEFEFE;
    border: 2px solid #00A23D;
    border-radius: 5px;

    flex: 1 1 40%;

    padding: 1.125rem 1.875rem 1.75rem;
}

.cart__form {
    font-family: 'OrchideaPro-SemiBold';
}

.cart__form_top {
    display: flex;
    justify-content: space-between;

    margin-bottom: 1.875rem;

    a {
        color: #00A23D;

        font-family: 'OrchideaPro-Medium';
        font-size: 0.875rem;
    }
}

.cart__form_title {
    font-family: 'OrchideaPro-Bold';
    font-size: 1.125rem;
}

.cart__user {
    margin-bottom: 1.25rem;
}

.cart__user_title {
    margin-bottom: 1rem;
}

.cart__inputs {
    display: flex;
    flex-wrap: wrap;

    margin-right: -1.5rem;
    margin-bottom: -1.25rem;
}

.cart__input {
    background: #FEFEFE;
    border: 1px solid #00A23D;
    border-radius: 3px;

    flex: 1 1 40%;

    padding: 0.625rem 1rem;
    margin-right: 1.5rem;
    margin-bottom: 1.25rem;

    width: 100%;
}

.cart__delivery {
    margin-bottom: 1rem;
}

.cart__delivery_title {
    margin-bottom: 1rem;
}

.cart__delivery_subtitle {
    display: flex;
    align-items: center;

    font-size: 0.625rem;

    margin-bottom: 0.625rem;

    svg {
        margin-right: 0.375rem;
    }
}

.cart__delivery_all-select {
    grid-template-columns: 1fr 1fr;
    display: grid;
    grid-gap: 1.5rem 1.25rem;
}

.cart__delivery_select {
    flex: 1 1 40%;
}

.cart__method {

}

.cart__method_title {
    margin-bottom: 1rem;
}

.cart__method_buttons {
    border-radius: 3px;
    
    display: flex;

    margin-bottom: 0.625rem;

    & > * {
        flex: 1 1 100%;
    }
}

// .cart__method_button {
//     border-radius: 0 3px 3px 0;

//     padding: 0.875rem 0;

//     &:first-child {
//         border-radius: 3px 0px 0px 3px;
//     }
// }

.cart__method_info {
    background: #FEFEFE;
    border: 1px solid #00A23D;
    border-radius: 3px;

    padding: 1.25rem;
    margin-bottom: 0.625rem;
}

.cart__method_info_item {
    display: flex;
    justify-content: space-between;

    margin-bottom: 0.625rem;

    &:last-child {
        margin-bottom: 0;
    }
}

.cart__pay {
    margin-bottom: 1rem;
}

.cart__pay_title {
    margin-bottom: 1rem;
}

.cart__pay_buttons {
    display: flex;
    flex-direction: column;
}

.cart__pay_button {
    display: flex;
    justify-content: flex-start;
}

.cart__commet_title {
    margin-bottom: 1rem;
}

.cart__result {
    margin-bottom: 1.875rem;
}

.cart__result_item {
    display: flex;
    justify-content: space-between;

    margin-bottom: 1rem;

    &:last-child {
        font-family: 'OrchideaPro-Bold';

        margin-bottom: 0;
    }
}

.cart__btn {
    display: flex;
    justify-content: center;
}

.cart__button {
    padding: 0.5rem 2.25rem;
}

@media (max-width: 1024px) {
    .cart__container {
        flex-wrap: wrap;

        & > * {
            flex: 1 1 100%;
        }
    }

    .cart__container_left {
        margin-right: 0;
        margin-bottom: 1rem;
    }
}
</style>