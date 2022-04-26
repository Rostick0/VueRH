<template>
    <aside class="catalog__aside">
        <form action="" class="catalog__form" onsubmit="return false;">
            <div class="catalog__category">
                <div class="catalog__category_title">Категории:</div>
                <ul class="catalog__category_ul">
                    <li class="catalog__category_item">
                        <AppInputRadio idAndFor="categoryAll" name="category" checked>Все категории</AppInputRadio>
                    </li>
                    <li class="catalog__category_item" v-for="category in categories" v-bind:key="category.id">
                        <AppInputRadio v-bind:idAndFor="category.idAndFor" name="category">
                            {{ category.text }}
                        </AppInputRadio>
                    </li>
                </ul>
            </div>

            <div class="catalog__manufacturer">
                <div class="catalog__manufacturer_title">Производитель:</div>
                <ul class="catalog__manufacturer_ul">
                    <li class="catalog__manufacturer_item">
                        <AppInputRadio idAndFor="manufacturerAll" name="manufacturer" checked>Все производители</AppInputRadio>
                    </li>
                    <li class="catalog__manufacturer_item" v-for="manufacturer in manufacturers" v-bind:key="manufacturer.id">
                        <AppInputRadio v-bind:idAndFor="manufacturer.idAndFor" name="manufacturer">{{ manufacturer.text }}</AppInputRadio>
                    </li>
                </ul>
            </div>

            <div class="catalog__price">
                <div class="catalog__price_name">
                    Цена
                </div>
                <div class="catalog__price_inputs">
                    <input type="number" placeholder="От" class="catalog__price_input">
                    <input type="number" placeholder="До" class="catalog__price_input">
                </div>
            </div>

            <div class="catalog__weight">
                <div class="catalog__weight_name">
                    Вес/гр.
                </div>
                <div class="catalog__weight_inputs">
                    <input type="number" placeholder="От" class="catalog__weight_input">
                    <input type="number" placeholder="До" class="catalog__weight_input">
                </div>
            </div>

            <div class="catalog__popular">
                <div class="catalog__popular_title">
                    По популярности:
                </div>

                <div class="catalog__popular_radios">
                    <div class="catalog__popular_radios-yes">
                        <AppInputRadio idAndFor="popularYes" name="popular">
                            Да
                        </AppInputRadio>
                    </div>
                    <div class="catalog__popular_radios-no">
                        <AppInputRadio idAndFor="popularNo" name="popular">
                            Нет
                        </AppInputRadio>
                    </div>
                </div>
            </div>

            <div class="catalog__discount">
                <div class="catalog__discount_title">
                    Только со скидкой: 
                </div>

                <div class="catalog__discount_radios">
                    <div class="catalog__discount_radios-yes">
                        <AppInputRadio idAndFor="discountYes" name="discount">
                            Да
                        </AppInputRadio>
                    </div>
                    <div class="catalog__discount_radios-no">
                        <AppInputRadio idAndFor="discountNo" name="discount">
                            Нет
                        </AppInputRadio>
                    </div>
                </div>
            </div>

            <div class="catalog__buttons">
                <AppButton class="catalog__button">
                    Показать
                </AppButton>

                <AppButton type="reset" class="catalog__button">
                    Сбросить
                </AppButton>
            </div>
        </form>
    </aside>
</template>

<script>
export default {
    name: 'AppShopAside',
    data() {
        return {
            categories: [
                {
                    id: 2,
                    text: 'Башкирский мед',
                    link: '',
                    idAndFor: 'categoryBashkir'
                },
                {
                    id: 3,
                    text: 'Алтайский мед',
                    link: '',
                    idAndFor: 'categoryAltai'
                },
                {
                    id: 4,
                    text: 'Гречишный мед',
                    link: '',
                    idAndFor: 'categoryBuckwheat'
                },
                {
                    id: 5,
                    text: 'Липовый мед',
                    link: '',
                    idAndFor: 'categoryFake'
                },
                {
                    id: 6,
                    text: 'Мед с орехами',
                    link: '',
                    idAndFor: 'categoryNuts'
                },
                {
                    id: 7,
                    text: 'Таежный крем-мед',
                    link: '',
                    idAndFor: 'categoryTaiga'
                },
                {
                    id: 8,
                    text: 'Пробники меда',
                    link: '',
                    idAndFor: 'categoryProbes'
                },
                {
                    id: 9,
                    text: 'Порционный мед 35 гр.',
                    link: '',
                    idAndFor: 'categoryPortionedGramm35'
                }
            ],
            manufacturers: [
                {
                    id: 2,
                    text: 'Самый вкусный мед',
                    link: '',
                    idAndFor: 'manufacturerDeliciousHoney'
                },
                {
                    id: 3,
                    text: 'Самый вкусный мед',
                    link: '',
                    idAndFor: 'manufacturerDeliciousHoney1'
                },
                {
                    id: 4,
                    text: 'Самый вкусный мед',
                    link: '',
                    idAndFor: 'manufacturerDeliciousHoney2'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.catalog__radio-cheked {
    max-width: 1rem;
    max-height: 0.81rem;
    
    min-width: 1rem;
    min-height: 0.81rem;
}

.catalog__aside {
    color: #424242;

    max-width: 285px;
    margin-right: 2.5rem;
}

.catalog__manufacturer {
    margin-top: 1.875rem;
}

.catalog__category_ul,
.catalog__manufacturer_ul {
    border: 2px solid #00A23D;
    border-radius: 5px;

    padding: 1.5rem 2.25rem;
}

.catalog__category_title,
.catalog__manufacturer_title {
    margin-bottom: 1.25rem;
}

.catalog__manufacturer_item,
.catalog__category_item {
    display: flex;
    align-items: center;

    margin-bottom: 0.625rem;

    &:last-child {
        margin-bottom: 0;
    }
}

.catalog__price,
.catalog__weight {
    border: 2px solid #00A23D;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0.625rem 1.875rem 0.625rem 1.62rem;
    margin-top: 1.25rem;

    .catalog__price_inputs,
    .catalog__weight_inputs {
        display: flex;

        border: 1px solid #00A23D;
        border-radius: 2px;

        max-width: 10rem;

        input {
            padding: 0.45rem 1.75rem;
            width: 100%;
        }

        input:first-child {
            border-right: 1px solid #00A23D;
        }
    }
}

.catalog__buttons {
    display: flex;

    margin-top: 1.875rem;

    .catalog__button {
        padding: 0.75rem 0;
        width: 100%;
    }

    .catalog__button:first-child {
        margin-right: 1rem;
    }
}

.catalog__popular {
    margin-top: 1.875rem;
}

.catalog__discount {
    margin-top: 1.25rem;
}

.catalog__popular,
.catalog__discount {
    display: flex;
    align-items: center;

    justify-content: space-between;
}

.catalog__popular_radios,
.catalog__discount_radios {
    display: flex;
    
    & > * {
        display: flex;
        align-items: center;
    }

    & > *:first-child {
        margin-right: 0.875em;
    }
}

.catalog__popular_title,
.catalog__discount_title {
    color: #424242;

    font-family: 'OrchideaPro-Bold';
}
</style>