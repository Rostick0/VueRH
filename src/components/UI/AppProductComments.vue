<template>
    <ul class="comments">
        <li v-for="comment in comments" v-bind:key="comment.id" class="comments__item">
            <div class="comment_user user">
                <div class="user__img">
                    <img :src="require(`@/img/${comment.avatar}`)" alt="">
                </div>

                <div class="user__info">
                    <div class="user__info-top">
                        <div class="user__name">
                            {{ comment.userName }}
                        </div>
                        <RatingStars></RatingStars>
                    </div>
                    <data class="user__date">
                        {{ comment.date }}
                    </data>
                </div>
            </div>

            <div class="comment">
                <div class="comment-title">
                    <div class="comment__title">
                        {{ comment.title }}
                    </div>
                </div>
                <div class="comment-bottom">
                    <div class="comment__content-img">
                        <div v-if="false" class="comment__img">
                            <img src="@/img/no-photo.svg" alt="">
                        </div>

                        <div v-else class="comment__no-img">
                            <img src="@/img/no-photo.svg" alt="">
                        </div>
                    </div>
                    <div class="comment__content-text">
                        <div class="comment__text">
                            {{ comment.text }}
                        </div>
                        <div class="comment__interaction">
                            <div class="comment__interaction_left">
                                <div class="comment__like">
                                    <img src="@/img/like.svg" alt="">
                                    <span class="comment__like_count"> {{ comment.likes }} </span>
                                </div>
                                <div class="comment__dislike">
                                    <img src="@/img/dislike.svg" alt="">
                                    <span class="comment__dislike_count"> {{ comment.dislikes }} </span>
                                </div>
                                <div class="comment__answer">
                                    Ответить
                                </div>
                            </div>

                            <AppButton class="comment__interaction_right">
                                Оставить отзыв
                            </AppButton> 
                        </div>
                    </div> 
                </div>              
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'AppProductComments',
    props: {
        comments: {
            type: Array
        }
    }
}
</script>

<style lang="scss" scoped>
.comments__item {
    margin-bottom: 3rem;

    &:last-child {
        margin-bottom: 0;
    }
}

.user {
    display: flex;
    align-items: center;
}

.user__img {
    img {
        border: 4px solid #00A23D;
        border-radius: 50%;

        margin-right: 1.25rem;

        width: 4.5rem;
        height: 4.5rem;
    }
}

.user__info-top {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    margin-bottom: 0.625rem;
}

.user__name {
    color: #000000;

    font-family: 'OrchideaPro-Bold';
    font-size: 1.25rem;

    margin-right: 1.25rem;
}

.user__date {
    color: #BDBDBD;

    font-family: 'OrchideaPro-SemiBold';
}

.comment {
    font-family: 'OrchideaPro-SemiBold';

    margin-top: 1.25rem;
}

.comment__title {
    margin-bottom: 1.25rem;
}

.comment-bottom {
    grid-template-columns: 1fr 2.5fr;
    display: grid;
    grid-gap: 1.25rem;

    @media (max-width: 576px) {
        grid-template-columns: 1fr;
    }
}

.comment__content-img {
    background: linear-gradient(90deg, #ECE9E6 0%, #FFFFFF 100%);

    border: 2px solid #00A23D;
    border-radius: 5px 0px 0px 5px;
}

.comment__no-img {
    text-align: center;

    &::after {
        content: 'Нет фото';

        display: block;
        margin-top: 2.25rem;
        margin-bottom: 2.25rem;
    }

    img {
        margin-top: 2rem;
    }
}

.comment__content-text {
    background: linear-gradient(90deg, #FAF9F8 0%, #FFFFFF 100%);
    border: 2px solid #00A23D;
    border-radius: 0px 5px 5px 0px;

    display: flex;
    flex-direction: column;
    flex: 1 1 100%;

    padding: 2.25rem 2rem 1rem 1.75rem;

    min-height: 16.25rem;

    @media (max-width: 576px) {
        padding: 1.5rem 1rem;
    }
}

.comment__text {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    margin-bottom: 1rem;
}

.comment__interaction {
    display: flex;
    justify-content: space-between;
}

.comment__interaction_left {
    display: flex;
    align-items: center;

    font-family: 'OrchideaPro-Bold';

    & > * {
        cursor: pointer;
    }

    img {
        margin-right: 0.5rem;
    }
}

.comment__like,
.comment__dislike {
    display: flex;
    align-items: center;
}

.comment__dislike {
    margin-left: 1.125rem;
    margin-right: 2.75rem;

    @media (max-width: 576px) {
        & {
            margin-right: 1rem;
        }
    }
}

.comment__interaction_right {
    padding: 0.43rem 0.875rem;

    @media (max-width: 576px) {
        padding: 0.22rem 0.44rem;
    }
}
</style>