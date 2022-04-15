<template>
    <div class="cookie">
        <div class="cookie__img">
            <img src="@/img/cookie.svg" alt="cookie">
        </div>

        <div class="cookie__content">
            <div class="cookie__text">
                Этот сайт использует файлы cookie  для хранения данных.  Продолжая 
                использовать сайт Вы даете свое согласие на работу с этими файлами.
            </div>

            <AppButton class="button">
                Хорошо
            </AppButton>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppCookie'
}
</script>

<style lang="scss" scoped>
.cookie {
    display: flex;
    align-items: center;
    justify-content: center;
}

.cookie__img {
    margin: 2.75rem 2.63rem 4.5rem 0;
}

.cookie__text {
    font-size: 1.57rem;

    margin-bottom: 2rem;
}

.cookie__content {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 50vw;
}

.button {
    font-size: 1.875rem;

    padding: 1.25rem 4.25rem;
}
</style>