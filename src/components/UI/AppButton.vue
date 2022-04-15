<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'AppButton'
}
</script>

<style lang="scss" scoped>
    .button {
        background: #00A23D;
        color: #FFFFFF;

        border-radius: 0.3125rem;

        text-align: center;

        font-family: 'OrchideaPro-Bold';
    }
</style>