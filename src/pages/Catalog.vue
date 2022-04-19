<template>
    <div class="catalog">
        <div class="container">
            <AppNavigation></AppNavigation>

            <div class="catalog__content">
                <AppShopAside></AppShopAside>

                <div class="catalog__products">
                    <ShopProducts v-bind:products="products"></ShopProducts>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Catalog',
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'Самый вкусный мед',
                    path: 'honey.png',
                    delPrice: 0,
                    ruble: 150,
                    hryvnia: 100,
                    isHitSales: null,
                    isNovelty: null,
                    isDiscount: null,
                    isHit: null
                },
                {
                    id: 2,
                    name: 'Самый вкусный мед',
                    path: 'honey.png',
                    delPrice: 300,
                    ruble: 150,
                    hryvnia: 100,
                    isHitSales: true,
                    isNovelty: null,
                    isDiscount: null,
                    isHit: null
                },
                {
                    id: 3,
                    name: 'Самый вкусный мед',
                    path: 'honey.png',
                    delPrice: 0,
                    ruble: 150,
                    hryvnia: 100,
                    isHitSales: null,
                    isNovelty: true,
                    isDiscount: true,
                    isHit: true
                },
                {
                    id: 4,
                    name: 'Самый вкусный мед',
                    path: 'honey.png',
                    delPrice: 0,
                    ruble: 150,
                    hryvnia: 100,
                    isHitSales: null,
                    isNovelty: null,
                    isDiscount: null,
                    isHit: null
                },
                {
                    id: 5,
                    name: 'Самый вкусный мед',
                    path: 'honey.png',
                    delPrice: 200,
                    ruble: 150,
                    hryvnia: 100,
                    isHitSales: null,
                    isNovelty: true,
                    isDiscount: true,
                    isHit: null
                },
                {
                    id: 6,
                    name: 'Самый вкусный мед',
                    path: 'honey.png',
                    delPrice: 0,
                    ruble: 150,
                    hryvnia: 100,
                    isHitSales: null,
                    isNovelty: null,
                    isDiscount: null,
                    isHit: null
                },
                {
                    id: 7,
                    name: 'Самый вкусный мед',
                    path: 'honey.png',
                    delPrice: 0,
                    ruble: 150,
                    hryvnia: 100,
                    isHitSales: null,
                    isNovelty: null,
                    isDiscount: null,
                    isHit: null
                },
                {
                    id: 8,
                    name: 'Самый вкусный мед',
                    path: 'honey.png',
                    delPrice: 0,
                    ruble: 300,
                    hryvnia: 200,
                    isHitSales: null,
                    isNovelty: null,
                    isDiscount: null,
                    isHit: null
                },
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
.catalog__content {
    display: flex;

    & > *:first-child {
        flex: 1 1 32%;      
    }

    & > *:last-child {
        flex: 1 1 auto;
    }
}

.catalog__products {
    width: 100%;
}
</style>