<template>
    <div class="blog">
        <div class="container">
            <AppNavigation v-bind:navigationItems="navigationItems"></AppNavigation>

            <ul class="blog__category_buttons">
                <li class="blog__category_item">
                    <AppButton class="blog__category_button">
                        Все статьи
                    </AppButton>  
                </li>
                <li class="blog__category_item">
                    <AppButton class="blog__category_button">
                        О меде
                    </AppButton>  
                </li>
                <li class="blog__category_item">
                    <AppButton class="blog__category_button">
                        Пчелопродукты
                    </AppButton>  
                </li>
                <li class="blog__category_item">
                    <AppButton class="blog__category_button">
                        О чае
                    </AppButton>  
                </li>
                <li class="blog__category_item">
                    <AppButton class="blog__category_button">
                        О диабете
                    </AppButton>  
                </li>
                <li class="blog__category_item">
                    <AppButton class="blog__category_button">
                        О чем-нибудь
                    </AppButton>  
                </li>
                <li class="blog__category_item">
                    <AppButton class="blog__category_button">
                        О чем-нибудь
                    </AppButton>  
                </li>
                <li class="blog__category_item">
                    <AppButton class="blog__category_button">
                        О чем-нибудь
                    </AppButton>  
                </li>
                <li class="blog__category_item">
                    <AppButton class="blog__category_button">
                        О чем-нибудь
                    </AppButton>  
                </li>
            </ul>

            <div class="blog__sort">
                <div class="blog__sort_name">
                    Упорядочить:
                </div>
                <AppSelect v-bind:optionCss="optionCss" v-bind:values="[{id:1, text: 'По рейтигну'}]"></AppSelect>
            </div>

            <div class="blog__top-articles">
                <div class="blog__article-big">
                    <div class="article-big__img">
                        <img src="@/img/honey_big.png" alt="">
                    </div>

                    <div class="article-big__content">
                        <div class="article-big__title">
                            Полезные свойства липового меда
                        </div>
                        <div class="article-big__text">
                            Мало кто знает, что цвет липового меда 
                            зависит от его степени зрелости, при этом 
                            полезные свойства и цена продукта не 
                            меняются. Молодой мед, который считается 
                            незрелым, жидкий, имеет светло-желтый, 
                            янтарный или зеленоватый оттенок. Цвет 
                            зависит от того, какие примеси в нем 
                            содержатся, и от места его сбора.
                            При добыче 
                            бортевого меда, который формируется не в 
                            ульях, а в бортях, продукт имеет серо-
                            коричневый оттенок, т. к. в нем присутствует 
                            перга, прополис, воск и другие продукты 
                            пчеловодства, увеличивающие содержание 
                            полезных веществ.
                        </div>

                        <div class="article-big__content_bottom">
                            <date class="article-big__date">
                                <AppGreyDate>
                                    08.02.2022
                                </AppGreyDate>
                            </date>

                            <router-link :to="`/blog/${1}`">
                                <button class="article-big__button">
                                    <span>
                                        Читать статью
                                    </span>
                                    <svg width="55" height="16" viewBox="0 0 55 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.57628e-07 8H53M53 8L41.907 1M53 8L41.907 15" stroke="#424242" stroke-width="2"/>
                                    </svg>
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
                <AppArticles v-bind:articles="articles" v-bind:marginBottom="'3.75rem'"></AppArticles>
            </div>

            <div class="blog__bottom-articles">
                <div class="blog__article-big">
                    <div class="article-big__img">
                        <img src="@/img/honey_big.png" alt="">
                    </div>

                    <div class="article-big__content">
                        <div class="article-big__title">
                            Полезные свойства липового меда
                        </div>
                        <div class="article-big__text">
                            Мало кто знает, что цвет липового меда 
                            зависит от его степени зрелости, при этом 
                            полезные свойства и цена продукта не 
                            меняются. Молодой мед, который считается 
                            незрелым, жидкий, имеет светло-желтый, 
                            янтарный или зеленоватый оттенок. Цвет 
                            зависит от того, какие примеси в нем 
                            содержатся, и от места его сбора.
                            При добыче 
                            бортевого меда, который формируется не в 
                            ульях, а в бортях, продукт имеет серо-
                            коричневый оттенок, т. к. в нем присутствует 
                            перга, прополис, воск и другие продукты 
                            пчеловодства, увеличивающие содержание 
                            полезных веществ.
                        </div>

                        <div class="article-big__content_bottom">
                            <date class="article-big__date">
                                <AppGreyDate>
                                    08.02.2022
                                </AppGreyDate>
                            </date>

                            <router-link :to="`/blog/${1}`">
                                <button class="article-big__button">
                                    <span>
                                        Читать статью
                                    </span>
                                    <svg width="55" height="16" viewBox="0 0 55 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.57628e-07 8H53M53 8L41.907 1M53 8L41.907 15" stroke="#424242" stroke-width="2"/>
                                    </svg>
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
                <AppArticles v-bind:articles="articles" v-bind:marginBottom="'3.75rem'"></AppArticles>

                <div class="blog__footer-page">
                    <AppFooterPager v-bind:countPage="countPager()"></AppFooterPager>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Blogs',
    data() {
        return {
            navigationItems: [
                {
                    id: 1,
                    text: 'Блог',
                    link: '/blogs',
                }
            ],
            optionCss: {
                border: 0,
                color: '#00A23D',
                fontFamily: 'OrchideaPro-Bold',
                fontSize: '1.125rem',
                padding: 0,
                marginRight: '2.75rem'
            },
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

                },
                {
                    id: 4,
                    title: 'Британские ученые заявили, что жизнь прекрасна!',
                    path: 'blog_honey.png',
                    desciption: `
                        Как уже неоднократно упомянуто, 
                        предприниматели в сети интернет, 
                        вне зависимости от их уровня, 
                        должны быть функционально разнесены на независимые элементы...`,

                },
                {
                    id: 5,
                    title: 'Британские ученые заявили, что жизнь прекрасна!',
                    path: 'blog_honey.png',
                    desciption: `
                        Как уже неоднократно упомянуто, 
                        предприниматели в сети интернет, 
                        вне зависимости от их уровня, 
                        должны быть функционально разнесены на независимые элементы...`,

                },
                {
                    id: 6,
                    title: 'Британские ученые заявили, что жизнь прекрасна!',
                    path: 'blog_honey.png',
                    desciption: `
                        Как уже неоднократно упомянуто, 
                        предприниматели в сети интернет, 
                        вне зависимости от их уровня, 
                        должны быть функционально разнесены на независимые элементы...`,

                }
            ],
        }
    },
    methods: {
        countPager() {
            let count = this.articles.length;
            count = Math.floor(count/12);
            return count;
        }
    }
}
</script>

<style lang="scss" scoped>
.blog__article-big {
    display: flex;

    margin-bottom: 3.75rem;
}

.article-big__img {
    flex: 0 0 60%;

    margin-right: 1.5rem;

    &:hover {
        border-radius: 5px;
        outline: 2px solid #00A23D;
        box-shadow: 6px 6px 6px #BBECCD;
    }

    img {
        width: 100%;
    }
}

.article-big__content {
    display: flex;
    flex-direction: column;

    flex: 1 1 100%;
}

.article-big__title {
    font-family: 'OrchideaPro-Bold';
    font-size: 1.25rem;

    margin-bottom: 1rem;
}

.article-big__text {
    display: flex;
    align-items: center;

    flex: 1 1 auto;

    margin-bottom: 1.5rem;
}

.article-big__content_bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: 'OrchideaPro-SemiBold';
}

.article-big__button {
    background: none;

    color: #000000;

    display: flex;

    span {
        font-size: 1.125rem;

        margin-right: 1rem;
    }
}

.blog__category_buttons {
    grid-template-columns: repeat(6, 1fr);
    display: grid;
    grid-gap: 1.25rem;

    margin-bottom: 1.25rem;

    @media (max-width: 1800px) {
        & {
            grid-template-columns: repeat(5, 1fr);
        }
    }

    @media (max-width: 1024px) {
        & {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    @media (max-width: 800px) {
        & {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (max-width: 576px) {
        & {
            grid-template-columns: repeat(2, 1fr);
        }
    }
}

.blog__bottom-articles {
    margin-top: 3.75rem;
}

.blog__category_button {
    background: linear-gradient(90deg, #ECE9E6 0%, #FFFFFF 100%);

    color: #424242;

    font-family: 'OrchideaPro-SemiBold';

    padding: 1rem 0;

    width: 100%;

    &:hover {
        background: #00A23D;

        color: #FFFFFF;
    }
}

.blog__sort {
    display: flex;

    font-size: 1.125rem;

    margin-bottom: 1.25rem;
}

.blog__sort_by {
    border: 0;
}

.blog__sort_name {
    margin-right: 1rem;
}

.blog__sort_by_item {
    color: #00A23D;

    font-family: 'OrchideaPro-Bold';
}

@media (max-width: 1024px) {
    .blog__article-big {
        flex-direction: column;
    }

    .article-big__img {
        margin-right: 0;
        margin-bottom: 1rem;
    }
}

.blog__footer-page {
    margin-top: 5rem;
}
</style>