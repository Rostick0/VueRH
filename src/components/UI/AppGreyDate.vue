<template>
    <date class="date__grey">
        <slot></slot>
    </date>
</template>

<script>
export default {
    name: 'AppGreyDate'
}
</script>

<style lang="scss" scoped>
.date__grey {
    color: #BDBDBD;

    font-family: 'OrchideaPro-SemiBold';
    font-size: 0.875rem;
}
</style>