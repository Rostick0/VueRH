<template>
    <input class="catalog__category_input" v-bind:id="idAndFor" type="radio" v-bind:name="name" v-bind:checked="checked">
    <label class="catalog__category_label" v-bind:for="idAndFor">
        <svg class="catalog__radio-cheked" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="catalog__radio-checked_item" d="M12.4286 1H5.57143L1 7.5L5.57143 14H12.4286L17 7.5L12.4286 1Z" fill="#FEFEFE" stroke="#00A23D"/>
        </svg>
        <span class="catalog__category_label_text">
            <slot></slot>
        </span>
    </label>
</template>

<script>
export default {
    name: 'AppInputRadio',
    props: {
        checked: {
            type: Boolean,
            default: false
        },
        idAndFor: {
            type: [String, Number]
        },
        name: {
            type: [String, Number]
        }
    }
}
</script>

<style lang="scss" scoped>
label {
        cursor: pointer;

        display: flex;

        position: relative;

        transition: 200ms;

        width: 100%;

        svg {
            margin-right: 0.375rem;
        }
    }

    input[type=radio]:checked + label svg .catalog__radio-checked_item {
        fill: #00A23D;
        transition: 200ms;
    }

    input[type=radio]:checked + label .catalog__manufacturer_label_text,
    input[type=radio]:checked + label .catalog__category_label_text {
        color: #00A23D;
    }

    input {
        display: none;
    }
</style>