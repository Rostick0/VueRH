<template>
    <div class="count__input">
        <button v-on:click="incrementCount">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.782 4.708V3.592H3.77V0.604H4.904V3.592H7.892V4.708H4.904V7.696H3.77V4.708H0.782Z" fill="#424242"/>
            </svg>
        </button>
        <input type="number" v-model="this.count">
        <button v-on:click="decrementCount">
            <svg width="6" height="2" viewBox="0 0 6 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.99 1.608V0.474H5.022V1.608H0.99Z" fill="#424242"/>
            </svg>
        </button>
    </div>
</template>

<script>
export default {
    name: 'AppInputCounter',
    data() {
        return {
            count: 0
        }
    },
    methods: {
        incrementCount() {
            return this.count++;
        },
        decrementCount() {
            if (this.count > 0) {
                return this.count--;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.count__input {
    border: 1px solid #00A23D;
    border-radius: 2px;

    display: flex;

    margin-right: 1.75rem;

    width: 7rem;

    button {
        background: none;

        display: flex;
        align-items: center;

        padding: 0.75rem 0.875rem;
    }
    
    input {
        border-left: 1px solid #00A23D;
        border-right: 1px solid #00A23D;

        display: inline-block;

        padding: 0 0.875rem;

        text-align: center;

        width: 100%;
    }
}
</style>