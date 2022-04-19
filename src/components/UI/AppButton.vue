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

        border: 2px solid #00A23D;
        border-radius: 0.3125rem;

        text-align: center;

        transition: 200ms;

        font-family: 'OrchideaPro-Bold';
    }

    .button:hover {
        background: #FFFFFF;

        color: #424242;
    }
</style>