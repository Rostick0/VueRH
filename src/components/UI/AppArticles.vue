<template>
    <div class="articles" :style="{marginBottom: `-${marginBottom}`}">
        <article v-for="article in articles" v-bind:key="article.id" :style="{marginBottom: `${marginBottom}`}" class="article">
            <router-link class="article" :to="`/blog/${article.id}`">
                <div class="article_img">
                    <img :src="require(`@/img/${article.path}`)" alt="">
                </div>

                <div class="article_content">
                    <date class="article_date">
                        <span class="article_day">
                            05
                        </span>
                        <span class="article_year">
                            22
                        </span>
                        <span class="article_month">
                            Янв.
                        </span>
                    </date>
                    <div class="article_text">
                        <h5 class="article_title">
                            {{ article.title }}
                        </h5>
                        <date class="article_date_mobile">
                            <AppGreyDate>
                                05 января 2022
                            </AppGreyDate>
                        </date>
                        <div class="article_description">
                            {{ article.desciption }}
                        </div>
                    </div>
                </div>
            </router-link>
        </article>
    </div>
</template>

<script>
export default {
    name: 'AppArticles',
    props: {
        articles: {
            type: Array,
        },
        marginBottom: {
            type: String,
            default: 'margin-bottom: 0;'
        }
    }
}
</script>

<style lang="scss" scoped>
.articles {
    grid-template-columns: 1fr 1fr 1fr;
    display: grid;
    grid-gap: 2rem;

    @media (max-width: 1024px) {
        & {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 576px) {
        & {
            grid-gap: 1rem;
        }
    }
}

.article {
    color: #424242;

    flex: 1 0 28%;
}

.article_content {
    display: flex;

    @media (max-width: 576px) {
        flex-direction: column;
    }
}

.article_date {
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 3.12rem;

    margin-right: 1.25rem;

    & > *:last-child {
        display: none;
    }

    @media (max-width: 576px) {
        & {
            display: none;
        }
    }
}

.article_day {
    border-bottom: 2px solid #424242;
}

.article_month {
    background: #FAAF3A;
    color: #000000;

    font-size: 1.25rem;

    padding: 0.56rem 1.125rem;
}

.article_date_mobile {
    display: none;
    
    @media (max-width: 576px) {
        display: block;

        margin-bottom: 0.625rem;
    }
}

.article_img {
    img {
        width: 100%;
    }

    img:hover {
        outline: 2px solid #00A23D;
        box-shadow: 6px 6px 6px #BBECCD;
    }
}

.article_content {
    margin-top: 1.5rem;
}

.article_text {
    font-size: 1rem;
}

.article_title {
    font-family: 'OrchideaPro-ExtraBold';

    margin-bottom: 0.5rem;
}
</style>