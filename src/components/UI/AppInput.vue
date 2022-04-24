<template>
    <input class="input" v-bind:type="type" v-bind:placeholder="placeholder" v-bind:value="modelValue" @input="updateInput">
</template>

<script>
export default {
    name: 'AppInput',
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
        },
        modelValue: {
            type: [String, Number]
        }
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value);
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