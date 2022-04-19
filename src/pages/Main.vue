<template>
    <section class="slider">
        <div class="container">
            <AppSlider></AppSlider>
        </div>
    </section>

    <section class="category">
            <div class="container">
                <div class="container__inner">
                    <div class="category-top">
                        <div class="category-top__name top-name">
                            Категории товаров:
                        </div>
                        <AppButton class="category-top__button top-button">
                            Все категории
                        </AppButton>
                    </div>
                            
                    <ul class="category-bottom">
                        <li class="category-bottom__item">
                            <div class="category-bottom__item_img">
                                <img src="@/img/category_honey.png" alt="">
                            </div>
                            <div class="category-bottom__item_text">
                                Мёд
                            </div>
                        </li>

                        <li class="category-bottom__item">
                            <div class="category-bottom__item_img">
                                <img src="@/img/category_bee_products.png" alt="">
                            </div>
                            <div class="category-bottom__item_text">
                                Пчелопродукты
                            </div>
                        </li>

                        <li class="category-bottom__item">
                            <div class="category-bottom__item_img">
                                <img src="@/img/category_herbal_teas.png" alt="">
                            </div>
                            <div class="category-bottom__item_text">
                                Травяные чаи
                            </div>
                        </li>

                        <li class="category-bottom__item">
                            <div class="category-bottom__item_img">
                                <img src="@/img/category_diabetic_nutrition.png" alt="">
                            </div>
                            <div class="category-bottom__item_text">
                                Диабетическое питание
                            </div>
                        </li>
                    </ul>
                </div>
            </div>  
        </section>

        <section class="novelty">
            <div class="container">
                <div class="container__inner">
                    <div class="novelty-top">
                        <div class="novelty-top__name top-name">
                            Категории товаров:
                        </div>
                        <AppButton class="novelty-top__button top-button">
                            Все новинки
                        </AppButton>
                    </div>

                    <div class="novelty-bottom">
                        <ShopProducts v-bind:products="products"></ShopProducts>
                    </div>
                </div>
            </div>
        </section>

        <section class="blog">
            <div class="container">
                <div class="container__inner">
                    <div class="blog-top">
                        <div class="novelty-top__name top-name">
                            Наш блог:
                        </div>
                        <router-link to="/blogs">
                            <AppButton class="novelty-top__button top-button">
                                Все статьи
                            </AppButton>
                        </router-link>
                    </div>

                    <div class="blog-bottom">
                        <AppArticles v-bind:articles="articles"></AppArticles>
                    </div>
                </div>
            </div>
        </section>

        <section class="reviews">
            <div class="container">
                <div class="container__inner">
                    <div class="reviews-top">
                        <div class="novelty-top__name top-name">
                            Наши отзывы:
                        </div>
                        <AppButton class="novelty-top__button top-button">
                            Все отзывы
                        </AppButton>
                    </div>

                    <div class="reviews-bottom">
                        <AppReviews v-bind:reviews="reviews"></AppReviews>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
export default {
    name: 'Main',
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'Самый вкусный мед',
                    path: 'honey.png',
                    delPrice: 0,
                    ruble: 150,
                    hryvnia: 100,
                    isHitSales: null,
                    isNovelty: null,
                    isDiscount: null,
                    isHit: null
                },
                {
                    id: 2,
                    name: 'Самый вкусный мед',
                    path: 'honey.png',
                    delPrice: 300,
                    ruble: 150,
                    hryvnia: 100,
                    isHitSales: true,
                    isNovelty: null,
                    isDiscount: null,
                    isHit: null
                },
                {
                    id: 3,
                    name: 'Самый вкусный мед',
                    path: 'honey.png',
                    delPrice: 0,
                    ruble: 150,
                    hryvnia: 100,
                    isHitSales: null,
                    isNovelty: true,
                    isDiscount: true,
                    isHit: true
                },
                {
                    id: 4,
                    name: 'Самый вкусный мед',
                    path: 'honey.png',
                    delPrice: 0,
                    ruble: 150,
                    hryvnia: 100,
                    isHitSales: null,
                    isNovelty: null,
                    isDiscount: null,
                    isHit: null
                },
                {
                    id: 5,
                    name: 'Самый вкусный мед',
                    path: 'honey.png',
                    delPrice: 200,
                    ruble: 150,
                    hryvnia: 100,
                    isHitSales: null,
                    isNovelty: true,
                    isDiscount: true,
                    isHit: null
                },
                {
                    id: 6,
                    name: 'Самый вкусный мед',
                    path: 'honey.png',
                    delPrice: 0,
                    ruble: 150,
                    hryvnia: 100,
                    isHitSales: null,
                    isNovelty: null,
                    isDiscount: null,
                    isHit: null
                },
                {
                    id: 7,
                    name: 'Самый вкусный мед',
                    path: 'honey.png',
                    delPrice: 0,
                    ruble: 150,
                    hryvnia: 100,
                    isHitSales: null,
                    isNovelty: null,
                    isDiscount: null,
                    isHit: null
                },
                {
                    id: 8,
                    name: 'Самый вкусный мед',
                    path: 'honey.png',
                    delPrice: 0,
                    ruble: 300,
                    hryvnia: 200,
                    isHitSales: null,
                    isNovelty: null,
                    isDiscount: null,
                    isHit: null
                },
            ],
            articles: [
                {
                    id: 1,
                    title: 'Британские ученые заявили, что жизнь прекрасна!',
                    path: 'blog_honey.png',
                    desciption: `
                        Как уже неоднократно упомянуто, 
                        предприниматели в сети интернет, 
                        вне зависимости от их уровня, 
                        должны быть функционально разнесены на независимые элементы...`,

                },
                {
                    id: 2,
                    title: 'Британские ученые заявили, что жизнь прекрасна!',
                    path: 'blog_honey.png',
                    desciption: `
                        Как уже неоднократно упомянуто, 
                        предприниматели в сети интернет, 
                        вне зависимости от их уровня, 
                        должны быть функционально разнесены на независимые элементы...`,

                },
                {
                    id: 3,
                    title: 'Британские ученые заявили, что жизнь прекрасна!',
                    path: 'blog_honey.png',
                    desciption: `
                        Как уже неоднократно упомянуто, 
                        предприниматели в сети интернет, 
                        вне зависимости от их уровня, 
                        должны быть функционально разнесены на независимые элементы...`,

                }
            ],
            reviews: [
                {
                    id: 1,
                    author: 'Руднева Екатерина',
                    path: 'avatar.png',
                    title: 'Самый вкусный мед',
                    description: `Как уже неоднократно упомянуто, 
                        предприниматели в сети интернет, вне 
                        зависимости от их уровня, должны быть 
                        функционально разнесены на 
                        независимые элементы. Для 
                        современного мира дальнейшее 
                        развитие различных форм деятельности 
                        играет важную роль в формировании...`
                },
                {
                    id: 2,
                    author: 'Руднева Екатерина',
                    path: 'avatar.png',
                    title: 'Самый вкусный мед',
                    description: `Как уже неоднократно упомянуто, 
                        предприниматели в сети интернет, вне 
                        зависимости от их уровня, должны быть 
                        функционально разнесены на 
                        независимые элементы. Для 
                        современного мира дальнейшее 
                        развитие различных форм деятельности 
                        играет важную роль в формировании...`
                },
                {
                    id: 3,
                    author: 'Руднева Екатерина',
                    path: 'avatar.png',
                    title: 'Самый вкусный мед',
                    description: `Как уже неоднократно упомянуто, 
                        предприниматели в сети интернет, вне 
                        зависимости от их уровня, должны быть 
                        функционально разнесены на 
                        независимые элементы. Для 
                        современного мира дальнейшее 
                        развитие различных форм деятельности 
                        играет важную роль в формировании...`
                }
            ]
        }
    }
}
</script>


<style lang="scss" scoped>
.top-button {
    padding: 0.625rem 1.25rem;
}

.slider {
    background: linear-gradient(90deg, #ECE9E6 0%, #FFFFFF 100%);

    margin-top: 1.25rem;
}

.category {
    margin-top: 2.5rem;
}

.category-top {
    display: flex;
    justify-content: space-between;

    padding-bottom: 5.5rem;
}

.category-bottom {
    display: flex;

    @media (max-width: 1024px) {
        & {
            flex-wrap: wrap;
        }
    }
}

.category-bottom__item {
    background: linear-gradient(90deg, #ECE9E6 0%, #FFFFFF 100%);
    box-shadow: 6px 6px 6px rgba(163, 163, 163, 0.25);
    border-radius: 5px;
    border: 2px solid rgba(0, 0, 0, 0);

    flex: 1 0 20%;

    margin-right: 2.75rem;

    padding: 1.75rem 2.25rem 0.75rem 2.25rem;

    &:last-child {
        margin-right: 0;
    }

    &:nth-child(2) {
        img {
            padding-left: 1.5rem;
        }
    }

    &:hover {
        border: 2px solid #00A23D;

        .category-bottom__item_text {
            transform: scaleY(1rem);
        }
    }

    .category-bottom__item_text {
        margin-top: 1.375rem;
    }

    @media (max-width: 1024px) {
        & {
            flex: 1 1 45%;

            margin-right: 0.625rem;
            margin-bottom: 0.625rem;
        }

        &:nth-child(2n) {
            margin-right: 0;
        }

        &:nth-last-child(-n+2) {
            margin-bottom: 0;
        }
    }
}

.category-bottom__item_img {
    text-align: center;

    img {
        
    }
}

.category-bottom__item_text {
    font-family: 'OrchideaPro-SemiBold';
    font-size: 1.57rem;

    text-align: center;
}




.novelty {
    margin-top: 6.75rem;
}

.novelty-top {
    display: flex;
    justify-content: space-between;

    margin-bottom: 5.5rem;
}

.novelty-products {
    display: flex;
    flex-wrap: wrap;
}

.novelty-product {
    border: 1px solid #424242;
    border-radius: 3px;

    flex: 1 1 20%;

    text-align: center;

    max-width: 300px;

    margin-right: 1.875rem;
    margin-bottom: 3.25rem;

    &:nth-child(4n) {
        margin-right: 0;
    }

    &:last-child {
        margin-right: 0;
    }

    &:nth-last-child(-n + 4) {
        margin-bottom: 0;
    }

    &:hover {
        border: 1px solid #00A23D;
        outline: 2px solid #00A23D;
        box-shadow: 6px 6px 6px rgba(163, 163, 163, 0.25);
    }
}

.novelty-product__img {
    background: linear-gradient(90deg, #ECE9E6 0%, #FFFFFF 100%);

    position: relative;

    .novelty-product__check-favourite {
        position: absolute;

        top: 1.5rem;
        left: 80%;
        

        width: 1.75rem;

        z-index: 100;
    }
}

.novelty-product__ribbon {
    background: url('../img/hit_sales.svg') no-repeat;

    font-family: 'OrchideaPro-Bold';
    font-size: 1.25rem;

    left: -0.5rem;
    top: -2rem;

    padding: 1.125rem 2rem 2rem 1.06rem;

    position: absolute;
}

.novelty-product__stocks {
    display: flex;

    font-size: 0.75rem;

    top: 1.25rem;

    position: absolute;

    & > * {
        padding-top: 0.32rem;
        padding-bottom: 0.32rem;

        margin-right: 0.32rem;
    }

    & > *:last-child {
        margin-right: 0;
    }
}

.novelty-product__stocks_novelty {
    background: #FAAF3A;

    padding-left: 0.625rem;
    padding-right: 0.625rem;
}

.novelty-product__stocks_discount {
    background: #FEC66E;

    padding-left: 0.875rem;
    padding-right: 0.875rem;
}

.novelty-product__stocks_hit {
    background: #FFDDA7;
    border-radius: 0px 5px 5px 0px;
    
    padding-left: 1rem;
    padding-right: 1rem;
}

.novelty-product__content {
    padding: 0 1.75rem 1.5rem;
}

.novelty-product__info {
    color: #424242;

    font-family: 'OrchideaPro-Bold';

    & > * {
        margin-bottom: 1.5rem;
    }
}

.novelty-product__button {
    padding: 0.75rem 3rem;
}

.novelty-product__title {
    margin-top: 1rem;
}

.novelty-product__rating {
    display: flex;
    justify-content: center;
}

.novelty-product__count-reviews {
    color: #BDBDBD;
}

.novelty-product__price {
    font-family: 'OrchideaPro-SemiBold';
}

.novelty-product__price_strikeout {
    margin-right: 0.625rem;
}

.rating__stars {
    display: flex;

    & > * {
        margin-right: 0.45rem;
    }
}

.novelty-product__img {
    img {
        width: 100%;
    }
}

.novelty-product__button {
    width: 100%;
}




.blog {
    margin-top: 5.25rem;
}

.blog-top {
    display: flex;
    justify-content: space-between;

    margin-bottom: 3.75rem;
}

.blog-bottom__article_img {
    border-radius: 5px;
}

.blog-bottom {
    display: flex;
}




.reviews {
    margin-top: 5rem;
}

.reviews-top {
    display: flex;
    justify-content: space-between;

    margin-bottom: 3.5rem;
}
</style>