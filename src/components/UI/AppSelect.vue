<template>
    <div v-on:click="arrowAnim" v-bind:class="{ active: selectActive }" class="block-select">
        <select v-bind:style="optionCss" class="select">
            <option v-for="value in values" v-bind:key="value.id" v-bind:value="value.value" class="select__option">
                {{ value.text }}
            </option>
        </select>
        <svg class="select__svg" width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7.63594 6L13.8571 1" stroke="#BDBDBD" stroke-width="2"/>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'AppSelect',
    data() {
        return {
            selectActive: false
        }
    },
    props: {
        values: {
            type: Array,
            required: true
        },
        optionCss: {
            type: String
        }
    },
    methods: {
        arrowAnim() {
            return this.selectActive = !this.selectActive
        }
    }
}
</script>

<style lang="scss" scoped>
.block-select {
    display: flex;
    align-items: center;

    position: relative;
}

.active.block-select {
    .select__svg {
        transform: rotate(-180deg);
    }
}

.select {
    appearance: none;

    border: 1px solid #00A23D;
    border-radius: 3px;

    display: flex;
    align-items: center;

    font-family: "OrchideaPro-Medium";

    padding: 0.625rem 1rem;

    width: 100%;
}

.select__svg {
    position: absolute;

    right: 1.25rem;
}
</style>