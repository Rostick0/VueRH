<template>
    <div class="block-select">
        <select class="select" v-on:click="printData">
            <option class="select__option" v-for="value in values" v-bind:key="value.id" v-bind:value="value.value">
                {{ value.text }}
            </option>
        </select>
        <svg class="select__svg" width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7.63594 6L13.8571 1" stroke="#BDBDBD" stroke-width="2"/>
        </svg>
    </div>
    <!-- <ul class="select" v-on:click="printData">
        <li class="select__item">Страна</li>
        <li class="select__item">2</li>
        <li class="select__item">3</li>
    </ul> -->
</template>

<script>
export default {
    name: 'AppSelect',
    data() {
        return {
            values: [
                {
                    id: 1,
                    value: 1,
                    text: 'Страна'
                },
                {
                    id: 2,
                    value: 2,
                    text: '2'
                },
                {
                    id: 3,
                    value: 3,
                    text: '3'
                }
            ]
        }
    },
    methods: {
        printData() {
            console.log(5);
            
        }
    }
}
</script>

<style lang="scss" scoped>
.block-select {
    display: flex;
    align-items: center;

    position: relative;

    margin-right: 1.5rem;
    margin-bottom: 1.25rem;

    &:hover .select__svg {
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