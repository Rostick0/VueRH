<template>
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
</template>

<script>
export default {
    name: 'RatingStars'
}
</script>

<style lang="scss" scoped>
.rating__stars {
    display: flex;

    & > * {
        margin-right: 0.45rem;
    }
}
</style>