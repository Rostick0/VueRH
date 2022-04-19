<template>
    <span class="count-reviews">
        (<slot></slot> отзывов)
    </span>
</template>

<script>
export default {
    name: 'AppReviewsCount',
}
</script>

<style lang="scss" scoped>
.count-reviews {
    color: #BDBDBD;
}
</style>
