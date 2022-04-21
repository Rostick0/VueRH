<template>
    <div class="container">
        <AppNavigation></AppNavigation>

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
                        <AppButton class="cart__no-products_button">
                            Перейти в каталог
                        </AppButton>
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
                    <form class="cart__form" action="#" method="POST">
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

                            <div class="cart__user_inputs">
                                <input placeholder="Имя" type="text" class="cart__user_input">
                                <input placeholder="Фамилия" type="text" class="cart__user_input">
                                <input placeholder="+ 7 (000) - 000 - 00 - 00" type="number" class="cart__user_input">
                                <input placeholder="E-mail адрес" type="email" class="cart__user_input">
                            </div>
                        </div>

                        <div class="cart__delivery">
                            <div class="cart__delivery_title">
                                Доставка
                            </div>

                            <div class="cart__delivery_select">
                                <select class="cart__delivery_select"></select>
                                <select class="cart__delivery_select"></select>
                                <select class="cart__delivery_select"></select>
                            </div>
                        </div>

                        <div class="cart__method">
                            <div class="cart__method_title">
                                Способ доставки:
                            </div>
                            <div class="cart__method_buttons">
                                 <AppButton class="cart__method_button">
                                    Курьер
                                 </AppButton>
                                 <AppButton class="cart__method_button">
                                    Самовывоз
                                 </AppButton>
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
                                <input type="text">
                            </div>
                        </div>

                        <div class="cart__pay">
                            <AppButton>
                                Оплата картой на сайте
                            </AppButton>
                            <AppButton>
                                Оплата наличными, при получении заказа
                            </AppButton>
                        </div>

                        <div class="cart__commet"></div>

                        <div class="cart__result">
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cart'
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
    flex: 1 1 40%;
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

.cart__user_inputs {
    display: flex;
    flex-wrap: wrap;

    margin-right: -1.5rem;
    margin-bottom: -1.25rem;
}

.cart__user_input {
    background: #FEFEFE;
    border: 1px solid #00A23D;
    border-radius: 3px;

    flex: 1 1 40%;

    padding: 0.625rem 1rem;
    margin-right: 1.5rem;
    margin-bottom: 1.25rem;
}
</style>