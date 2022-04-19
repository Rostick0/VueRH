<template>
    <aside class="catalog__aside">
        <form action="" class="catalog__form" onsubmit="return false;">
            <div class="catalog__category">
                <div class="catalog__category_title">Категории:</div>
                <ul class="catalog__category_ul">
                    <li class="catalog__category_item">
                        <input class="catalog__category_input" id="categoryAll" type="radio" name="category" checked>
                        <label class="catalog__category_label" for="categoryAll">
                            <svg class="catalog__radio-cheked" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="catalog__radio-checked_item" d="M12.4286 1H5.57143L1 7.5L5.57143 14H12.4286L17 7.5L12.4286 1Z" fill="#FEFEFE" stroke="#00A23D"/>
                            </svg>
                            <span class="catalog__category_label_text">
                                Все категории
                            </span>
                        </label>
                    </li>
                    <li class="catalog__category_item">
                        <input class="catalog__category_input" id="categoryBashkir" type="radio" name="category">
                        <label class="catalog__category_label" for="categoryBashkir">
                            <svg class="catalog__radio-cheked" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="catalog__radio-checked_item" d="M12.4286 1H5.57143L1 7.5L5.57143 14H12.4286L17 7.5L12.4286 1Z" fill="#FEFEFE" stroke="#00A23D"/>
                            </svg>
                            <span class="catalog__category_label_text">
                                Башкирский мед
                            </span>
                        </label>
                    </li>
                    <li class="catalog__category_item">
                        <input class="catalog__category_input" id="categoryAltai" type="radio" name="category">
                        <label class="catalog__category_label" for="categoryAltai">
                            <svg class="catalog__radio-cheked" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="catalog__radio-checked_item" d="M12.4286 1H5.57143L1 7.5L5.57143 14H12.4286L17 7.5L12.4286 1Z" fill="#FEFEFE" stroke="#00A23D"/>
                            </svg>
                            <span class="catalog__category_label_text">
                                Алтайский мед
                            </span>
                        </label>
                    </li>
                    <li class="catalog__category_item">
                        <input class="catalog__category_input" id="categoryBuckwheat" type="radio" name="category">
                        <label class="catalog__category_label" for="categoryBuckwheat">
                            <svg class="catalog__radio-cheked" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="catalog__radio-checked_item" d="M12.4286 1H5.57143L1 7.5L5.57143 14H12.4286L17 7.5L12.4286 1Z" fill="#FEFEFE" stroke="#00A23D"/>
                            </svg>
                            <span class="catalog__category_label_text">
                                Гречишный мед
                            </span>
                        </label>
                    </li>
                    <li class="catalog__category_item">
                        <input class="catalog__category_input" id="categoryFake" type="radio" name="category">
                        <label class="catalog__category_label" for="categoryFake">
                            <svg class="catalog__radio-cheked" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="catalog__radio-checked_item" d="M12.4286 1H5.57143L1 7.5L5.57143 14H12.4286L17 7.5L12.4286 1Z" fill="#FEFEFE" stroke="#00A23D"/>
                            </svg>
                            <span class="catalog__category_label_text">
                                Липовый мед
                            </span>
                        </label>
                    </li>
                    
                    <li class="catalog__category_item">
                        <input class="catalog__category_input" id="categoryNuts" type="radio" name="category">
                        <label class="catalog__category_label" for="categoryNuts">
                            <svg class="catalog__radio-cheked" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="catalog__radio-checked_item" d="M12.4286 1H5.57143L1 7.5L5.57143 14H12.4286L17 7.5L12.4286 1Z" fill="#FEFEFE" stroke="#00A23D"/>
                            </svg>
                            <span class="catalog__category_label_text">
                                Мед с орехами
                            </span>
                        </label>
                    </li>
                    <li class="catalog__category_item">
                        <input class="catalog__category_input" id="categoryTaiga" type="radio" name="category">
                        <label class="catalog__category_label" for="categoryTaiga">
                            <svg class="catalog__radio-cheked" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="catalog__radio-checked_item" d="M12.4286 1H5.57143L1 7.5L5.57143 14H12.4286L17 7.5L12.4286 1Z" fill="#FEFEFE" stroke="#00A23D"/>
                            </svg>
                            <span class="catalog__category_label_text">
                                Таежный крем-мед
                            </span>
                        </label>
                    </li>
                    <li class="catalog__category_item">
                        <input class="catalog__category_input" id="categoryProbes" type="radio" name="category">
                        <label class="catalog__category_label" for="categoryProbes">
                            <svg class="catalog__radio-cheked" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="catalog__radio-checked_item" d="M12.4286 1H5.57143L1 7.5L5.57143 14H12.4286L17 7.5L12.4286 1Z" fill="#FEFEFE" stroke="#00A23D"/>
                            </svg>
                            <span class="catalog__category_label_text">
                                Пробники меда
                            </span>
                        </label>
                    </li>
                    <li class="catalog__category_item">
                        <input class="catalog__category_input" id="categoryPortionedGramm35" type="radio" name="category">
                        <label class="catalog__category_label" for="categoryPortionedGramm35">
                            <svg class="catalog__radio-cheked" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="catalog__radio-checked_item" d="M12.4286 1H5.57143L1 7.5L5.57143 14H12.4286L17 7.5L12.4286 1Z" fill="#FEFEFE" stroke="#00A23D"/>
                            </svg>
                            <span class="catalog__category_label_text">
                                Порционный мед 35 гр.
                            </span>
                        </label>
                    </li>
                </ul>
            </div>

            <div class="catalog__manufacturer">
                <div class="catalog__manufacturer_title">Производитель:</div>
                <ul class="catalog__manufacturer_ul">
                    <li class="catalog__manufacturer_item">
                        <input class="catalog__manufacturer_input" id="manufacturerAll" type="radio" name="manufacturer" checked>
                        <label class="catalog__manufacturer_label" for="manufacturerAll">
                            <svg class="catalog__radio-cheked" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="catalog__radio-checked_item" d="M12.4286 1H5.57143L1 7.5L5.57143 14H12.4286L17 7.5L12.4286 1Z" fill="#FEFEFE" stroke="#00A23D"/>
                            </svg>
                            <span class="catalog__manufacturer_label_text">
                                Все производители
                            </span>
                        </label>
                    </li>
                    <li class="catalog__manufacturer_item">
                        <input class="catalog__manufacturer_input" id="manufacturerDeliciousHoney" type="radio" name="manufacturer">
                        <label class="catalog__manufacturer_label" for="manufacturerDeliciousHoney">
                            <svg class="catalog__radio-cheked" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="catalog__radio-checked_item" d="M12.4286 1H5.57143L1 7.5L5.57143 14H12.4286L17 7.5L12.4286 1Z" fill="#FEFEFE" stroke="#00A23D"/>
                            </svg>
                            <span class="catalog__manufacturer_label_text">
                                Самый вкусный мед
                            </span>
                        </label>
                    </li>
                    <li class="catalog__manufacturer_item">
                        <input class="catalog__manufacturer_input" id="manufacturerDeliciousHoney1" type="radio" name="manufacturer">
                        <label class="catalog__manufacturer_label" for="manufacturerDeliciousHoney1">
                            <svg class="catalog__radio-cheked" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="catalog__radio-checked_item" d="M12.4286 1H5.57143L1 7.5L5.57143 14H12.4286L17 7.5L12.4286 1Z" fill="#FEFEFE" stroke="#00A23D"/>
                            </svg>
                            <span class="catalog__manufacturer_label_text">
                                Самый вкусный мед
                            </span>
                        </label>
                    </li>
                    <li class="catalog__manufacturer_item">
                        <input class="catalog__manufacturer_input" id="manufacturerDeliciousHoney2" type="radio" name="manufacturer">
                        <label class="catalog__manufacturer_label" for="manufacturerDeliciousHoney2">
                            <svg class="catalog__radio-cheked" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="catalog__radio-checked_item" d="M12.4286 1H5.57143L1 7.5L5.57143 14H12.4286L17 7.5L12.4286 1Z" fill="#FEFEFE" stroke="#00A23D"/>
                            </svg>
                            <span class="catalog__manufacturer_label_text">
                                Самый вкусный мед
                            </span>
                        </label>
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
                        <input class="catalog__manufacturer_input" id="popularYes" type="radio" name="popular" style="display: none">
                        <label class="catalog__manufacturer_label" for="popularYes">
                            <span class="catalog__manufacturer_label_text">
                                Да
                            </span>
                            <svg class="catalog__radio-cheked" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="catalog__radio-checked_item" d="M12.4286 1H5.57143L1 7.5L5.57143 14H12.4286L17 7.5L12.4286 1Z" fill="#FEFEFE" stroke="#00A23D"/>
                            </svg>
                        </label>
                    </div>
                    <div class="catalog__popular_radios-no">
                        <input class="catalog__manufacturer_input" id="popularNo" type="radio" name="popular" style="display: none">
                        <label class="catalog__manufacturer_label" for="popularNo">
                            <span class="catalog__manufacturer_label_text">
                                Нет
                            </span>
                            <svg class="catalog__radio-cheked" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="catalog__radio-checked_item" d="M12.4286 1H5.57143L1 7.5L5.57143 14H12.4286L17 7.5L12.4286 1Z" fill="#FEFEFE" stroke="#00A23D"/>
                            </svg>
                        </label>
                    </div>
                </div>
            </div>

            <div class="catalog__discount">
                <div class="catalog__discount_title">
                    Только со скидкой: 
                </div>

                <div class="catalog__discount_radios">
                    <div class="catalog__discount_radios-yes">
                        <input class="catalog__manufacturer_input" id="popularYes" type="radio" name="popular" style="display: none">
                        <label class="catalog__manufacturer_label" for="popularYes">
                            <span class="catalog__manufacturer_label_text">
                                Да
                            </span>
                            <svg class="catalog__radio-cheked" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="catalog__radio-checked_item" d="M12.4286 1H5.57143L1 7.5L5.57143 14H12.4286L17 7.5L12.4286 1Z" fill="#FEFEFE" stroke="#00A23D"/>
                            </svg>
                        </label>
                    </div>
                    <div class="catalog__discount_radios-no">
                        <input class="catalog__manufacturer_input" id="popularNo" type="radio" name="popular" style="display: none">
                        <label class="catalog__manufacturer_label" for="popularNo">
                            <span class="catalog__manufacturer_label_text">
                                Нет
                            </span>
                            <svg class="catalog__radio-cheked" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="catalog__radio-checked_item" d="M12.4286 1H5.57143L1 7.5L5.57143 14H12.4286L17 7.5L12.4286 1Z" fill="#FEFEFE" stroke="#00A23D"/>
                            </svg>
                        </label>
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
    name: 'AppShopAside'
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