<template>
    <div v-if="show" class="header-menu">
        <div class="header-menu__top">
            <ul class="header-menu__links">
                <li class="header-menu__link">
                    <a href="">
                        О нас
                    </a>
                </li>
                <li class="header-menu__link">
                    <a href="">
                        Службы доставки
                    </a>
                </li>
                <li class="header-menu__link">
                    <a href="">
                        Способы оплаты
                    </a>
                </li>
                <li class="header-menu__link">
                    <a href="">
                        Возврат товара
                    </a>
                </li>
                <li class="header-menu__link">
                    <a href="">
                        Вопрос-ответ
                    </a>
                </li>
            </ul>
        </div>

       <div class="header-menu__bottom">
           <div class="header-menu__bottom-title">
               Партнёрам
            </div>
            <ul class="header-menu__socials">
                <li class="header-menu__social">
                    <a href="">
                        <img src="@/img/footer_instagram.svg" alt="">
                    </a>
                </li>
                <li class="header-menu__social">
                    <a href="">
                        <img src="@/img/footer_pinterest.svg" alt="">
                    </a>
                </li>
                <li class="header-menu__social">
                    <a href="">
                        <img src="@/img/footer_odnoklassniki.svg" alt="">
                    </a>
                </li>
                <li class="header-menu__social">
                    <a href="">
                        <img src="@/img/footer_vk.svg" alt="">
                    </a>
                </li>
            </ul>
       </div>
    </div>
</template>

<script>
export default {
    name: 'AppHeaderMenu',
    props: {
        show: {
            type: Boolean,
            default: false,
        }
    }
    // methods: {
    //     setShow() {
    //         return this.show !== this.show
    //     }
    // }
}
</script>

<style lang="scss" scoped>
.header-menu {
    background: #FFFFFF;
    border-radius: 5px;
    outline: 2px solid #00A23D;

    font-family: 'OrchideaPro-SemiBold';
    font-size: 1rem;

    top: -1rem;
    left: -200%;

    text-align: left;

    padding: 2.25rem 3.25rem;

    position: absolute;

    z-index: 10000;
    
    animation: appearance;
    animation-duration: 200ms;

    @media (max-width: 1366px) {
        left: -250%;
    }

    @media (max-width: 576px) {
        left: -1.25rem;
        top: -14.75rem;
    }
}

@keyframes appearance {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.header-menu__links {
    margin-bottom: 1.375rem;
}

.header-menu__link {
    margin-bottom: 0.625rem;

    a {
        color: #424242;

        transition: 200ms;
    }

    a:hover {
        color: #00A23D;

        font-family: 'OrchideaPro-Bold';
    }
}

.header-menu__link:last-child {
    margin-bottom: 0;
}

.header-menu__bottom-title {
    color: #000000;

    font-family: 'OrchideaPro-Bold';

    margin-bottom: 0.875rem;
}

.header-menu__socials {
    display: flex;
}

.header-menu__social {
    margin-right: 1rem;

    img {
        width: 1.5rem;
    }
}

.header-menu__social:last-child {
    margin-right: 0;
}
</style>