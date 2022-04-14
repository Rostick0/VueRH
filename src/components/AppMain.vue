<template>
    <main class="main">
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
                        <ul class="novelty-products">
                            <li class="novelty-product">
                                <div class="novelty-product__img">
                                    <div class="novelty-product__ribbon">
                                        Хит продаж!
                                    </div>
                                    <img src="@/img/honey.png" alt="">
                                    <img class="novelty-product__check-favourite" src="@/img/like_no-active.svg" alt="">
                                </div>

                                <div class="novelty-product__content">
                                    <div class="novelty-product__info">
                                        <h5 class="novelty-product__title">
                                            Самый вкусный мед
                                        </h5>

                                        <div class="novelty-product__rating">
                                            <ul class="rating__stars">
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                            </ul>

                                            <span class="novelty-product__count-reviews">
                                                (12 отзывов)
                                            </span>
                                        </div>

                                        <div class="novelty-product__price">
                                            <span class="novelty-product__price_strikeout">
                                                <del>
                                                    300
                                                </del>
                                            </span>
                                            <span class="novelty-product__price_ruble">
                                                150 р
                                            </span>
                                                /
                                            <span class="novelty-product__price_hryvnia">
                                                100 гр
                                            </span>
                                        </div>
                                    </div>

                                    <AppButton class="novelty-product__button">
                                        В корзину
                                    </AppButton>
                                </div>
                            </li>

                            <li class="novelty-product">
                                <div class="novelty-product__img">
                                    <img src="@/img/honey.png" alt="">
                                    <img class="novelty-product__check-favourite" src="@/img/like_no-active.svg" alt="">
                                </div>

                                <div class="novelty-product__content">
                                    <div class="novelty-product__info">
                                        <h5 class="novelty-product__title">
                                            Самый вкусный мед
                                        </h5>

                                        <div class="novelty-product__rating">
                                            <ul class="rating__stars">
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                            </ul>

                                            <span class="novelty-product__count-reviews">
                                                (12 отзывов)
                                            </span>
                                        </div>

                                        <div class="novelty-product__price">
                                            <span class="novelty-product__price_strikeout">
                                                <del>
                                                    300
                                                </del>
                                            </span>
                                            <span class="novelty-product__price_ruble">
                                                150 р
                                            </span>
                                                /
                                            <span class="novelty-product__price_hryvnia">
                                                100 гр
                                            </span>
                                        </div>
                                    </div>

                                    <AppButton class="novelty-product__button">
                                        В корзину
                                    </AppButton>
                                </div>
                            </li>

                            <li class="novelty-product">
                                <div class="novelty-product__img">
                                    <ul class="novelty-product__stocks">
                                        <li class="novelty-product__stocks_novelty">
                                            Новинка
                                        </li>
                                        <li class="novelty-product__stocks_discount">
                                            Скидка
                                        </li>
                                        <li class="novelty-product__stocks_hit">
                                            Хит
                                        </li>
                                    </ul>
                                    <img src="@/img/honey.png" alt="">
                                    <img class="novelty-product__check-favourite" src="@/img/like_no-active.svg" alt="">
                                </div>

                                <div class="novelty-product__content">
                                    <div class="novelty-product__info">
                                        <h5 class="novelty-product__title">
                                            Самый вкусный мед
                                        </h5>

                                        <div class="novelty-product__rating">
                                            <ul class="rating__stars">
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                            </ul>

                                            <span class="novelty-product__count-reviews">
                                                (12 отзывов)
                                            </span>
                                        </div>

                                        <div class="novelty-product__price">
                                            <span class="novelty-product__price_strikeout">
                                                <del>
                                                    300
                                                </del>
                                            </span>
                                            <span class="novelty-product__price_ruble">
                                                150 р
                                            </span>
                                                /
                                            <span class="novelty-product__price_hryvnia">
                                                100 гр
                                            </span>
                                        </div>
                                    </div>

                                    <AppButton class="novelty-product__button">
                                        В корзину
                                    </AppButton>
                                </div>
                            </li>

                            <li class="novelty-product">
                                <div class="novelty-product__img">
                                    <img src="@/img/honey.png" alt="">
                                    <img class="novelty-product__check-favourite" src="@/img/like_no-active.svg" alt="">
                                </div>

                                <div class="novelty-product__content">
                                    <div class="novelty-product__info">
                                        <h5 class="novelty-product__title">
                                            Самый вкусный мед
                                        </h5>

                                        <div class="novelty-product__rating">
                                            <ul class="rating__stars">
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                            </ul>

                                            <span class="novelty-product__count-reviews">
                                                (12 отзывов)
                                            </span>
                                        </div>

                                        <div class="novelty-product__price">
                                            <span class="novelty-product__price_strikeout">
                                                <del>
                                                    300
                                                </del>
                                            </span>
                                            <span class="novelty-product__price_ruble">
                                                150 р
                                            </span>
                                                /
                                            <span class="novelty-product__price_hryvnia">
                                                100 гр
                                            </span>
                                        </div>
                                    </div>

                                    <AppButton class="novelty-product__button">
                                        В корзину
                                    </AppButton>
                                </div>
                            </li>

                            <li class="novelty-product">
                                <div class="novelty-product__img">
                                    <img src="@/img/honey.png" alt="">
                                    <img class="novelty-product__check-favourite" src="@/img/like_no-active.svg" alt="">
                                </div>

                                <div class="novelty-product__content">
                                    <div class="novelty-product__info">
                                        <h5 class="novelty-product__title">
                                            Самый вкусный мед
                                        </h5>

                                        <div class="novelty-product__rating">
                                            <ul class="rating__stars">
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                            </ul>

                                            <span class="novelty-product__count-reviews">
                                                (12 отзывов)
                                            </span>
                                        </div>

                                        <div class="novelty-product__price">
                                            <span class="novelty-product__price_strikeout">
                                                <del>
                                                    300
                                                </del>
                                            </span>
                                            <span class="novelty-product__price_ruble">
                                                150 р
                                            </span>
                                                /
                                            <span class="novelty-product__price_hryvnia">
                                                100 гр
                                            </span>
                                        </div>
                                    </div>

                                    <AppButton class="novelty-product__button">
                                        В корзину
                                    </AppButton>
                                </div>
                            </li>

                            <li class="novelty-product">
                                <div class="novelty-product__img">
                                    <img src="@/img/honey.png" alt="">
                                    <img class="novelty-product__check-favourite" src="@/img/like_no-active.svg" alt="">
                                </div>

                                <div class="novelty-product__content">
                                    <div class="novelty-product__info">
                                        <h5 class="novelty-product__title">
                                            Самый вкусный мед
                                        </h5>

                                        <div class="novelty-product__rating">
                                            <ul class="rating__stars">
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                            </ul>

                                            <span class="novelty-product__count-reviews">
                                                (12 отзывов)
                                            </span>
                                        </div>

                                        <div class="novelty-product__price">
                                            <span class="novelty-product__price_strikeout">
                                                <del>
                                                    300
                                                </del>
                                            </span>
                                            <span class="novelty-product__price_ruble">
                                                150 р
                                            </span>
                                                /
                                            <span class="novelty-product__price_hryvnia">
                                                100 гр
                                            </span>
                                        </div>
                                    </div>

                                    <AppButton class="novelty-product__button">
                                        В корзину
                                    </AppButton>
                                </div>
                            </li>

                            <li class="novelty-product">
                                <div class="novelty-product__img">
                                    <img src="@/img/honey.png" alt="">
                                    <img class="novelty-product__check-favourite" src="@/img/like_no-active.svg" alt="">
                                </div>

                                <div class="novelty-product__content">
                                    <div class="novelty-product__info">
                                        <h5 class="novelty-product__title">
                                            Самый вкусный мед
                                        </h5>

                                        <div class="novelty-product__rating">
                                            <ul class="rating__stars">
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                            </ul>

                                            <span class="novelty-product__count-reviews">
                                                (12 отзывов)
                                            </span>
                                        </div>

                                        <div class="novelty-product__price">
                                            <span class="novelty-product__price_strikeout">
                                                <del>
                                                    300
                                                </del>
                                            </span>
                                            <span class="novelty-product__price_ruble">
                                                150 р
                                            </span>
                                                /
                                            <span class="novelty-product__price_hryvnia">
                                                100 гр
                                            </span>
                                        </div>
                                    </div>

                                    <AppButton class="novelty-product__button">
                                        В корзину
                                    </AppButton>
                                </div>
                            </li>

                            <li class="novelty-product">
                                <div class="novelty-product__img">
                                    <img src="@/img/honey.png" alt="">
                                    <img class="novelty-product__check-favourite" src="@/img/like_no-active.svg" alt="">
                                </div>

                                <div class="novelty-product__content">
                                    <div class="novelty-product__info">
                                        <h5 class="novelty-product__title">
                                            Самый вкусный мед
                                        </h5>

                                        <div class="novelty-product__rating">
                                            <ul class="rating__stars">
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                                <li class="rating__star">
                                                    <img src="@/img/start_active.svg" alt="">
                                                </li>
                                            </ul>

                                            <span class="novelty-product__count-reviews">
                                                (12 отзывов)
                                            </span>
                                        </div>

                                        <div class="novelty-product__price">
                                            <span class="novelty-product__price_strikeout">
                                                <del>
                                                    300
                                                </del>
                                            </span>
                                            <span class="novelty-product__price_ruble">
                                                150 р
                                            </span>
                                                /
                                            <span class="novelty-product__price_hryvnia">
                                                100 гр
                                            </span>
                                        </div>
                                    </div>

                                    <AppButton class="novelty-product__button">
                                        В корзину
                                    </AppButton>
                                </div>
                            </li>
                        </ul>
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
                        <AppButton class="novelty-top__button top-button">
                            Все статьи
                        </AppButton>
                    </div>

                    <div class="blog-bottom">
                        <AppArticle></AppArticle>

                        <article class="blog-bottom__article">
                            <div class="blog-bottom__article_img">
                                <img src="@/img/blog_honey.png" alt="">
                            </div>

                            <div class="blog-bottom__article_content">
                                <date class="blog-bottom__article_date">
                                    <span class="blog-bottom__article_day">
                                        05
                                    </span>
                                    <span class="blog-bottom__article_year">
                                        22
                                    </span>
                                    <span class="blog-bottom__article_month">
                                        Янв.
                                    </span>
                                </date>
                                <div class="blog-bottom__article_text">
                                    <h5 class="blog-bottom__article_title">
                                        Британские ученые заявили, что жизнь прекрасна!
                                    </h5>
                                    <div class="blog-bottom__article_description">
                                        Как уже неоднократно упомянуто, 
                                        предприниматели в сети интернет, 
                                        вне зависимости от их уровня, 
                                        должны быть функционально 
                                        разнесены на независимые 
                                        элементы...
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article class="blog-bottom__article">
                            <div class="blog-bottom__article_img">
                                <img src="@/img/blog_honey.png" alt="">
                            </div>

                            <div class="blog-bottom__article_content">
                                <date class="blog-bottom__article_date">
                                    <span class="blog-bottom__article_day">
                                        05
                                    </span>
                                    <span class="blog-bottom__article_year">
                                        22
                                    </span>
                                    <span class="blog-bottom__article_month">
                                        Янв.
                                    </span>
                                </date>
                                <div class="blog-bottom__article_text">
                                    <h5 class="blog-bottom__article_title">
                                        Британские ученые заявили, что жизнь прекрасна!
                                    </h5>
                                    <div class="blog-bottom__article_description">
                                        Как уже неоднократно упомянуто, 
                                        предприниматели в сети интернет, 
                                        вне зависимости от их уровня, 
                                        должны быть функционально 
                                        разнесены на независимые 
                                        элементы...
                                    </div>
                                </div>
                            </div>
                        </article>
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
                        <ul class="reviews__cards">
                            <li class="reviews__card">
                                <div class="reviews__card-top">
                                    <div class="reviews__card__img">
                                        <img src="@/img/avatar.png" alt="">
                                    </div>

                                    <div class="reviews__card-top_text">
                                        <div class="reviews__card_name">
                                            Руднева Екатерина
                                        </div>

                                        <date class="reviews__card_date">
                                            20 февраля 2022 г.
                                        </date>

                                        <ul class="rating__stars">
                                            <li class="rating__star">
                                                <img src="@/img/start_active.svg" alt="">
                                            </li>
                                            <li class="rating__star">
                                                <img src="@/img/start_active.svg" alt="">
                                            </li>
                                            <li class="rating__star">
                                                <img src="@/img/start_active.svg" alt="">
                                            </li>
                                            <li class="rating__star">
                                                <img src="@/img/start_active.svg" alt="">
                                            </li>
                                            <li class="rating__star">
                                                <img src="@/img/start_active.svg" alt="">
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="reviews__card-bottom">
                                    
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
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
    border-radius: 5px;

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

.blog-bottom__article {
    color: #424242;

    margin-right: 2rem;
}

.blog-bottom__article:nth-child(3n) {
    margin-right: 0;
}

.blog-bottom__article_content {
    display: flex;
}

.blog-bottom__article_date {
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 3.12rem;

    margin-right: 1.25rem;
}

.blog-bottom__article_day {
    border-bottom: 2px solid #424242;
}

.blog-bottom__article_month {
    background: #FAAF3A;
    color: #000000;

    font-size: 1.25rem;

    padding: 0.56rem 1.125rem;
}

.blog-bottom__article_img {
    img {
        width: 100%;
    }
}

.blog-bottom__article_content {
    margin-top: 1.5rem;
}

.blog-bottom__article_text {
    font-size: 1rem;
}

.blog-bottom__article_title {
    font-family: 'OrchideaPro-ExtraBold';

    margin-bottom: 0.5rem;
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