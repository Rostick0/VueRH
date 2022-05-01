<template>
    <nav class="catalog__nav">
        <ul class="catalog__navigation">
            <li class="catalog__navigation_item">
                <router-link to="/">
                    Главная
                </router-link>
            </li>
            <li v-for="navigationItem in navigationItems" v-bind:key="navigationItem.id" class="catalog__navigation_item">
                <router-link :to="navigationItem.link">
                    {{ navigationItem.text }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'AppNavigation',
    props: {
        navigationItems: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.catalog__nav {
    margin-top: 2.5rem;
    margin-bottom: 3.75rem;

    @media (max-width: 576px) {
        & { 
            font-size: 1rem;

            margin-top: 1rem;
            margin-bottom: 1.25rem;
        }
    }
}

.catalog__navigation {
    display: flex;
    flex-wrap: wrap;

    font-family: 'OrchideaPro-SemiBold';
}

.catalog__navigation_item {
    
    &::after {
        content: '/';

        margin-right: 0.25rem;
    }

    &:last-child::after {
        content: '';
    }

    &:last-child {
        color: #00A23D;

        a {
            color: #00A23D;
        }
    }

    a {
        color: #424242;
    }
}
</style>