<template>
    <nav class="catalog__nav">
        <ul class="catalog__navigation">
            <li class="catalog__navigation_item">
                <router-link to="/">
                    Главная
                </router-link>
            </li>
            <li class="catalog__navigation_item">
                <router-link to="/catalog">
                    Каталог
                </router-link>
            </li>
            <li class="catalog__navigation_item">
                Мёд
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'AppNavigation',
}
</script>

<style lang="scss" scoped>
.catalog__nav {
    margin-top: 2.5rem;
    margin-bottom: 3.75rem;
}

.catalog__navigation {
    display: flex;

    font-family: 'OrchideaPro-SemiBold';

    margin-bottom: 3.75rem;
}

.catalog__navigation_item {
    
    &::after {
        content: '/';

        margin-right: 0.25rem;
    }

    &:last-child::after {
        content: '';
    }

    a {
        color: #424242;
    }
}
</style>