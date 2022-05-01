<template>
    <div class="container">
        <AppNavigation v-bind:navigationItems="navigationItems"></AppNavigation>

        <div class="authorization">
            <form class="authorization__form" action="#" method="POST" onsubmit="return false;">

                <div v-if="this.loginForm" class="authorization__inner">
                    <div class="authorization__title">
                        Вход
                    </div>

                    <div class="authorization__info">
                        <AppInput class="authorization__info_input" placeholder="Мобильный телефон" type="number"></AppInput>
                        <AppInput class="authorization__info_input" placeholder="Пароль" type="password"></AppInput>
                    </div>

                    <div class="authorization__buttons">
                        <AppButton class="authorization__button">
                            Вход
                        </AppButton>

                        <AppButton v-on:click="setLoginForm()" class="authorization__button">
                            Регистрация
                        </AppButton>
                    </div>
                </div>

                <div v-else class="authorization__inner">
                    <div class="authorization__title">
                        Регистрация нового пользователя
                    </div>

                    <div class="authorization__info">
                        <AppInput class="authorization__info_input" placeholder="Email" type="email"></AppInput>
                        <AppInput class="authorization__info_input" placeholder="Мобильный телефон" type="number"></AppInput>
                        <AppInput class="authorization__info_input" placeholder="Пароль" type="password"></AppInput>
                        <AppInput class="authorization__info_input" placeholder="Повтор пароля" type="password"></AppInput>
                    </div>

                    <div class="authorization__buttons">
                        <AppButton class="authorization__button">
                            Регистрация
                        </AppButton>

                        <AppButton v-on:click="setLoginForm()" class="authorization__button">
                            Вход
                        </AppButton>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'User',
    data() {
        return {
            navigationItems: [
                {
                    id: 1,
                    text: 'Пользователь',
                    link: '#',
                } 
            ],
            loginForm: true
        }
    },
    methods: {
        setLoginForm() {
            this.loginForm = !this.loginForm
        }
    }
}
</script>

<style lang="scss" scoped>
.authorization__form {
    border: 2px solid #00A23D;
    border-radius: 5px;

    padding: 1.125rem 1.875rem 1.75rem;
    margin: 0 auto;

    max-width: 50vw;

    @media (max-width: 576px) {
        max-width: 100vw;
    }
}

.authorization__title {
    font-size: 1.25rem;

    margin-bottom: 1rem;
}

.authorization__info {
    margin-bottom: 1rem;
}

.authorization__info_input {
    padding: 0.5rem 1rem;

    margin-bottom: 0.75rem;

    &:last-child {
        margin-bottom: 0;
    }
}

.authorization__buttons {
    grid-template-columns: 1fr 1fr;
    display: grid;
    grid-gap: 1.5rem;

    width: 50%;

    @media (max-width: 1024px) {
        width: 100%;
    }
}

.authorization__button {
   padding: 0.75rem 0;
}
</style>