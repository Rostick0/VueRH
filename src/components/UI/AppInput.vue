<template>
    <input class="input" v-bind:type="type">
</template>

<script>
export default {
    name: 'AppInput',
    props: {
        type: {
            type: String,
            default: 'text'
        }
    }
}
</script>

<style lang="scss" scoped>
.input {
    border: 1px solid #00A23D;
    border-radius: 3px;

    width: 100%;
}
</style>