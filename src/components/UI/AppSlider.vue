<template>
    <div class="slider">
        <div class="slider__arrow_left" v-on:click="leftArrow">
            <!-- <img src="@/img/arrow.svg" alt=""> -->
            <svg width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#FAAF3A"/>
                <circle cx="24" cy="20" r="19" stroke="black" stroke-width="2"/>
                <path d="M25.5 12L16 20L25.5 27.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>

        <div class="slider__content">
            <div class="slider__content-top">
                <div class="slider__text">
                    <h3 class="slider__title">
                        {{ this.slides[this.slideItem].title }}
                    </h3>
                    <div class="slider__description">
                        {{ this.slides[this.slideItem].description }}
                    </div>
                    <router-link :to="this.slides[this.slideItem].link">
                        <button class="slider__button">
                            Подробнее
                        </button>
                    </router-link>
                    
                </div>
                <div class="slider__img">
                    <img :src="require(`@/img/${this.slides[this.slideItem].img}`)" alt="">
                </div>
            </div>
            <div class="slider__content-bottom">
                <ul class="slider__switches">
                    <li v-for="button in this.slides" v-bind:key="button.id" v-on:click="setSlide(button.id)" class="slider__switch">
                        <span v-show="this.slideItem === button.id" class="_active">
                            
                        </span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="slider__arrow_right" v-on:click="rightArrow">
            <svg width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#FAAF3A"/>
                <circle cx="24" cy="20" r="19" stroke="black" stroke-width="2"/>
                <path d="M25.5 12L16 20L25.5 27.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppSlider',
    data() {
        return {
            slideItem: 0,
            slides: [
                {
                    id: 0,
                    title: 'Время меда!',
                    description: 'Скидки на весь ассортимент на этой недели!',
                    img: 'slider_honey.png',
                    link: '/catalog'
                },
                {
                    id: 1,
                    title: 'Время меда 2!',
                    description: 'Скидки на весь ассортимент на этой недели!',
                    img: 'slider_honey.png',
                    link: '/catalog'
                },
                {
                    id: 2,
                    title: 'Время меда 3!',
                    description: 'Скидки на весь ассортимент на этой недели!',
                    img: 'slider_honey.png',
                    link: '/catalog'
                }
            ]
        }
    },
    methods: {
        leftArrow() {
            if (0 < this.slideItem) {
                this.slideItem--;
            }

            console.log(this.slideItem);
        },
        rightArrow() {
            if (this.slides.length - 1 > this.slideItem) {
                this.slideItem++;
            }
        },
        setSlide(item) {
            this.slideItem = item;
        }
    }
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

    & > ._active {
        @extend .slider__switch;

        background: #FAAF3A;

        display: block;

        margin-right: 0;
    }
}

.slider__switch:last-child {
    margin-right: 0;
}

.slider__arrow_right {
    transform: rotate(180deg);
}
</style>