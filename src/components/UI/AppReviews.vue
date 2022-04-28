<template>
    <ul class="reviews-cards">
        <li v-for="review in reviews" v-bind:key="review.id" class="reviews-card">
            <div class="reviews-card-top">
                <div class="reviews__card_img">
                    <img :src="require(`@/img/${review.path}`)" alt="">
                </div>

                <div class="reviews-card-top_text">
                    <div class="reviews__card_name">
                        {{ review.author }}
                    </div>

                    <date class="reviews__card_date">
                        20 февраля 2022 г.
                    </date>

                    <RatingStars></RatingStars>
                </div>
            </div>
            <div class="reviews-card-bottom">
                <div class="reviews__card_title">
                    {{ review.title }}
                </div>
                <div class="reviews__card_description">
                    {{ review.description }}
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'AppReviews',
    data() {
        return {
            // reviews: [
            //     {
            //         id: 1,
            //         author: 'Руднева Екатерина',
            //         title: 'Самый вкусный мед',
            //         description: `Как уже неоднократно упомянуто, 
            //             предприниматели в сети интернет, вне 
            //             зависимости от их уровня, должны быть 
            //             функционально разнесены на 
            //             независимые элементы. Для 
            //             современного мира дальнейшее 
            //             развитие различных форм деятельности 
            //             играет важную роль в формировании...`
            //     },
            //     {
            //         id: 2,
            //         author: 'Руднева Екатерина',
            //         title: 'Самый вкусный мед',
            //         description: `Как уже неоднократно упомянуто, 
            //             предприниматели в сети интернет, вне 
            //             зависимости от их уровня, должны быть 
            //             функционально разнесены на 
            //             независимые элементы. Для 
            //             современного мира дальнейшее 
            //             развитие различных форм деятельности 
            //             играет важную роль в формировании...`
            //     },
            //     {
            //         id: 3,
            //         author: 'Руднева Екатерина',
            //         title: 'Самый вкусный мед',
            //         description: `Как уже неоднократно упомянуто, 
            //             предприниматели в сети интернет, вне 
            //             зависимости от их уровня, должны быть 
            //             функционально разнесены на 
            //             независимые элементы. Для 
            //             современного мира дальнейшее 
            //             развитие различных форм деятельности 
            //             играет важную роль в формировании...`
            //     }
            // ]
        }
    },
    props: {
        reviews: {
            type: Array
        }
    }
}
</script>


<style lang="scss" scoped>
.reviews-cards {
    grid-template-columns: 1fr 1fr 1fr;
    display: grid;
    grid-gap: 2rem;

    @media (max-width: 1024px) {
        & {
            grid-template-columns: 1fr;
        }
    }
}

.reviews-card {
    background: linear-gradient(90deg, #ECE9E6 0%, #FFFFFF 100%);
    border-radius: 5px;

    padding: 1rem 1.75rem 1.5rem 1rem;

    &:hover {
        outline: 2px solid #00A23D;
        box-shadow: 6px 6px 6px #BBECCD;

        position: relative;
    }
}

.reviews-card-top {
    display: flex;
    align-items: center;
}

.reviews__card_img {
    img {
        border: 4px solid #00A23D;
        border-radius: 50%;

        margin-right: 1rem;

        width: 4.5rem;
        height: 4.5rem;
    }
}

.reviews-card-top_text {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > * {
        margin-bottom: 0.44rem;
    }

    & > *:last-child {
        margin-bottom: 0;
    }
}

.reviews-card-top {
    margin-bottom: 1rem;
}

.reviews__card_name {
    font-family: 'OrchideaPro-Bold';
    font-size: 1.125rem;
}

.reviews__card_date {
    font-family: 'OrchideaPro-SemiBold';
    
    color: #BDBDBD;
}

.reviews__card_title {
    color: #00A23D;

    font-family: 'OrchideaPro-ExtraBold';
    font-size: 1.125rem;

    margin-bottom: 0.875rem;
}

.reviews__card_description {
    line-height: 1rem;
}

@media (max-width: 1024px) {
    .reviews-cards {
        flex-wrap: wrap;
    }

    .reviews-card {
        flex: 1 1 100%;

        margin-bottom: 1rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>