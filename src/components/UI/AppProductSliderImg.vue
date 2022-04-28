<template>
    <div class="images">
        <div class="images_scroll">
            <div class="arrow-top" v-on:click="topArrow">
                <svg width="28" height="19" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27 18L13.5806 2L1 18" stroke="#424242" stroke-width="2"/>
                </svg>
            </div>

            <div class="images_picture" v-for="image in numberElemntsArray(imagesSliders, imageSlide, 3)" v-bind:key="image.id">
                <img v-on:click="setImage(image.path)" :src="require(`@/img/${image.path}`)" alt="">
            <!-- <img src="@/img/product_honey.png" alt=""> -->
            </div>

            <div class="arrow-bottom" v-on:click="botomtArrow">
                <svg width="28" height="19" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27 1L13.5806 17L1 1" stroke="#424242" stroke-width="2"/>
                </svg>
            </div>
        </div>

        <div class="image_main">
            <img :src="require(`@/img/${this.mainImage || imagesSliders[0].path}`)" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppProductSliderImg',
    data() {
        return {
            imageSlide: 0,
            mainImage: '',
        }
    },
    props: {
        imagesSliders: {
            type: Array,
            required: true
        }
    },
    methods: {
        numberElemntsArray(array, item, count) {
            const result = [];
            let len = item + count;
            for (let i = item; i < len; i++) {
                if (array.length > i) {
                    result.push(array[i]);
                }
            }
            return result;
        },
        topArrow() {
            if (0 < this.imageSlide) {
                this.imageSlide--;
            }
        },
        botomtArrow() {
            if (this.imagesSliders.length - 3 > this.imageSlide) {
                this.imageSlide++;
            }
        },
        setImage(path) {
            this.mainImage = path;
        }
    }
}
</script>

<style lang="scss" scoped>
.images_scroll {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-right: 1.25rem;
}

.images_picture {
    display: flex;
    flex-direction: column;
    
    margin: 1.25rem 0;

    img {
        max-width: 100px;
    }
}

.image_main {
    img {
        width: 100%;
    }
}
</style>