<template>
    <div class="slider">
        <div class="slider__arrow_left">
            <img src="@/img/arrow.svg" alt="">
        </div>

        <div class="slider__content">
            <div class="slider__content-top">
                <div class="slider__text">
                    <h3 class="slider__title">
                        Время меда!
                    </h3>
                    <div class="slider__description">
                        Скидки на весь ассортимент на этой недели!
                    </div>
                    <button class="slider__button">
                        Подробнее
                    </button>
                </div>
                <div class="slider__img">
                    <img src="@/img/slider_honey.png" alt="">
                </div>
            </div>
            <div class="slider__content-bottom">
                <ul class="slider__switches">
                    <li class="slider__switch _active"></li>
                    <li class="slider__switch"></li>
                    <li class="slider__switch"></li>
                </ul>
            </div>
        </div>

        <div class="slider__arrow_right">
            <img src="@/img/arrow.svg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppSlider'
}
</script>

<style lang="scss" scoped>
.slider {
    color: #424242;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.slider__content-top {
    display: flex;
}

.slider__text {
    margin-top: 4.25rem;
    margin-bottom: 1.75rem;
}

.slider__title {
    font-family: 'OrchideaPro-ExtraBold';
    font-size: 2.5rem;

    margin-bottom: 0.75rem;
}

.slider__description {
    font-family: 'OrchideaPro-SemiBold';
    font-size: 1.25em;

    margin-bottom: 1.25rem;
}

.slider__button {
    position: relative;
    background: #FAAF3A;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    color: #000000;

    font-size: 1.125rem;

    padding: 1rem 3.25rem;

    z-index: 10;
}

.slider__img {
    position: relative;

    img {
        max-height: 18.75rem;
    }
}

.slider__switches {
    display: flex;
    justify-content: center;

    margin-bottom: 1.25rem;
}

.slider__switch {
    background: #BDBDBD;

    border-radius: 50%;

    margin-right: 0.81rem;

    width: 1.25rem;
    height: 1.25rem;

    &._active {
        background: #FAAF3A;
    }
}

.slider__switch:last-child {
    margin-right: 0;
}

.slider__arrow_right {
    transform: rotate(180deg);
}
</style>