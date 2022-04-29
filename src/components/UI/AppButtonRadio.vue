<template>
    <div>
        <input v-bind:id="idAndFor" type="radio" v-bind:name="name" hidden>
        <label class="button__label" v-bind:for="idAndFor">
            <span class="button__span" v-bind:style="`${styleSpan}`">
                <slot></slot>
            </span>
        </label>
    </div>
</template>

<script>
export default {
    name: 'AppButtonRadio',
    props: {
        name: {
            type: [String, Number]
        },
        idAndFor: {
            type: [String, Number]
        },
        styleSpan: {
            type: [String, Number]
        },
        padding: {
            type: [String, Number],
            default: '0',
        },
        borderRadius: {
            type: [String, Number],
            default: '5px',
        }
    }
}
</script>

<style lang="scss" scoped>
.button__label {
    width: 100%;
    height: 100%;
}

.button__span {
    background: #00A23D;
    outline: 2px solid #00A23D;
    color: #FFFFFF;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.82rem;

    width: 100%;
    height: 100%;

    &:hover {
        background: #FFFFFF;

        color: #424242;
    }
}

input[type=radio]:checked + label .button__span {
    background: #FFFFFF;

    color: #424242;
}
</style>