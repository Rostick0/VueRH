<template>
    <div v-show="countPage > 4" class="pager">
        <div class="pager__left" v-on:click="decrement">
            <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 1L2 9L11.5 16.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
        <ul class="pager__center">
            <li v-show="this.count + 4 > countPage" class="pager__center_item">...</li>
            <li class="pager__center_item">{{ this.count }}</li>
            <li class="pager__center_item">{{ this.count + 1 }}</li>
            <li class="pager__center_item">{{ this.count + 2 }}</li>
            <li v-show="this.count + 3 < countPage" class="pager__center_item">...</li>
            <li class="pager__center_item">{{ countPage }}</li>
        </ul>
        <div class="pager__right" v-on:click="increment(countPage)">
            <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L10.5 9L1 16.5" stroke="black" stroke-width="2"/>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppFooterPager',
    data() {
        return {
            count: 1
        }
    },
    methods: {
        pagerFilther(count) {
            console.log(count)
        },
        increment(countPage) {
            if (this.count + 3 < countPage) {
                return this.count++;
            }
        },
        decrement() {
            if (this.count > 1) {
                return this.count--;
            }
        }
    },
    props: {
        countPage: {
            type: Number,
            default: 10
        }
    }
}
</script>

<style lang="scss" scoped>
.pager {
    display: flex;
    align-items: center;
    justify-content: center;
}

.pager__center {
    font-family: 'OrchideaPro-ExtraBold';
    font-size: 1.125rem;

    display: flex;

    margin: 0 1.25rem;
}

.pager__center_item {
    cursor: pointer;

    margin-right: 1.75rem;

    &:last-child {
        margin-right: 0;
    }

    &:hover {
        color: #00A23D;
    }
}
</style>