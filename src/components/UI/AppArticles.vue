<template>
    <article v-for="article in articles" v-bind:key="article.id" class="blog__article">
        <div class="blog__article_img">
            <img :src="require(`@/img/${article.path}`)" alt="">
        </div>

        <div class="blog__article_content">
            <date class="blog__article_date">
                <span class="blog__article_day">
                    05
                </span>
                <span class="blog__article_year">
                    22
                </span>
                <span class="blog__article_month">
                    Янв.
                </span>
            </date>
            <div class="blog__article_text">
                <h5 class="blog__article_title">
                    {{ article.title }}
                </h5>
                <div class="blog__article_description">
                    {{ article.desciption }}
                </div>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    name: 'AppArticles',
    data() {
        return {
            // articles: [
            //     {
            //         id: 1,
            //         title: 'Британские ученые заявили, что жизнь прекрасна!',
            //         path: 'blog_honey.png',
            //         desciption: `
            //             Как уже неоднократно упомянуто, 
            //             предприниматели в сети интернет, 
            //             вне зависимости от их уровня, 
            //             должны быть функционально разнесены на независимые элементы...`,

            //     },
            //     {
            //         id: 2,
            //         title: 'Британские ученые заявили, что жизнь прекрасна!',
            //         path: 'blog_honey.png',
            //         desciption: `
            //             Как уже неоднократно упомянуто, 
            //             предприниматели в сети интернет, 
            //             вне зависимости от их уровня, 
            //             должны быть функционально разнесены на независимые элементы...`,

            //     },
            //     {
            //         id: 3,
            //         title: 'Британские ученые заявили, что жизнь прекрасна!',
            //         path: 'blog_honey.png',
            //         desciption: `
            //             Как уже неоднократно упомянуто, 
            //             предприниматели в сети интернет, 
            //             вне зависимости от их уровня, 
            //             должны быть функционально разнесены на независимые элементы...`,

            //     }
            // ]
        }
    },
    props: {
        articles: {
            type: Array
        }
    }
}
</script>

<style lang="scss" scoped>
.blog__article {
    color: #424242;

    margin-right: 2rem;
}

.blog__article:nth-child(3n) {
    margin-right: 0;
}

.blog__article_content {
    display: flex;
}

.blog__article_date {
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 3.12rem;

    margin-right: 1.25rem;
}

.blog__article_day {
    border-bottom: 2px solid #424242;
}

.blog__article_month {
    background: #FAAF3A;
    color: #000000;

    font-size: 1.25rem;

    padding: 0.56rem 1.125rem;
}

.blog__article_img {
    img {
        width: 100%;
    }

    img:hover {
        outline: 2px solid #00A23D;
        box-shadow: 6px 6px 6px #BBECCD;
    }
}

.blog__article_content {
    margin-top: 1.5rem;
}

.blog__article_text {
    font-size: 1rem;
}

.blog__article_title {
    font-family: 'OrchideaPro-ExtraBold';

    margin-bottom: 0.5rem;
}
</style>