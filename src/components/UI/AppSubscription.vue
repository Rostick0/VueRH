<template>
    <div class="subscription">
		<div class="container">
            <div class="subscription__text">
                Подпишитесь и получите скидку  5% на все!
            </div>
            <div class="subscription__form">
                <div class="subscription__input">
                    <input type="text" placeholder="Введите Ваш e-mail">
                </div>
                <AppButton class="subscription__button">
                    Отправить
                </AppButton>
            </div>
        </div>
	</div>
</template>

<script>
export default {
    name: 'AppSubscription',
}
</script>

<style lang="scss" scoped>
.subscription {

    .container {
        background: linear-gradient(90deg, #ECE9E6 0%, #FFFFFF 100%);

        display: flex;
        justify-content: center;
        align-items: center;

        padding-top: 3.25rem;
        padding-bottom: 3.25rem;
        margin-top: 6rem;
        margin-bottom: 2.75rem;

        @media (max-width: 1024px) {
            & {
                flex-direction: column;

                margin-top: 1rem;
                margin-bottom: 1rem;
            }
        }
    }
}

.subscription__text {
    font-family: 'OrchideaPro-Bold';
    font-size: 1.5rem;

    margin-right: 2.75rem;

    @media (max-width: 1024px) {
        & {
            font-size: 1.125rem;

            margin-right: 0;
            margin-bottom: 1rem;
        }
    }

    @media (max-width: 576px) {
        & {
            margin-right: auto;
        }
    }
}

.subscription__form {
    border: 2px solid #00A23D;
    box-sizing: border-box;
    border-radius: 4px;

    display: flex;

    @media (max-width: 576px) {
        & {
            border: 0;

            flex-direction: column;

            width: 100%;
        }
    }
}

.subscription__input {
    input {
        font-size: 0.875rem;

        padding: 0.625rem 0.75rem;
    }

    input::placeholder {
        color: #BDBDBD;
    }

    @media (max-width: 576px) {
        & {
            border: 2px solid #00A23D;
            border-radius: 5px;

            margin-bottom: 1.25rem;
        }
        
        input {
            width: 100%;
        }
    }
}

.subscription__button {
    border-left: 4px solid #00A23D;
    border-radius: 0;

    padding: 0.625rem 1rem;

    width: 100%;

    @media (max-width: 576px) {
        & {
            border-radius: 5px;

            margin: 0 auto;

            width: 37%;
        }
    }
}
</style>