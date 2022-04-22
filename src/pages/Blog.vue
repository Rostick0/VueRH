<template>
    <div class="container">
        <AppNavigation></AppNavigation>

        <article class="article">
            <div class="article__info">
                <div class="article__info_left">
                    <div class="article__title">
                        Полезные свойства липового меда
                    </div>
                    <span class="article__views">
                        Просмотров 1000
                    </span>
                    <date class="article__date">
                        08.02.2022
                    </date>
                </div>

                <AppButton class="article__button-subscribe">
                    Подписаться
                </AppButton>
            </div>

            <nav class="article__nav">
                <div class="article__nav_title">
                    Содержание:
                </div>

                <ul class="article__navigations">
                    <li class="article__navigations_items">
                        Липовый мед - описание
                    </li>
                    <li class="article__navigations_items">
                        Внешний вид, вкус и запах
                    </li>
                    <li class="article__navigations_items">
                        Полезные свойства липового меда
                    </li>
                    <li class="article__navigations_items">
                        Состав
                    </li>
                    <li class="article__navigations_items">
                        Что-нибудь еще
                    </li>
                </ul>
            </nav>

            <AppBlogSocials class="article-socials1"></AppBlogSocials>

            <div class="article__content">
                <div class="article__text">
                    Считается, что липовый мед за счет полезных свойств относится к самым полезным сортам этого продукта. От других сортов он отличается 
                    светлым оттенком, характерным запахом цветущей липы и большим количеством полезных свойств. Такой натуральный продукт не только 
                    порадует уникальным вкусом, но и поможет в лечении многих заболеваний.
                </div>

                <div class="article__subtitle">
                    Липовый мед — описание
                </div>
                
                <div class="article__text">
                    Липа считается королевским медоносом. Одно дерево может принести во время цветения до 16 л меда, который имеет характерный светлый или 
                    золотистый оттенок. Только липовый мед может быть светлыми иметь характерный аромат липы, который невозможно спутать с другими.
                </div>

                <div class="article__img">
                    <img src="@/img/honey_blog1.png" alt="">
                </div>

                <div class="article__subtitle">
                    Внешний вид, вкус и запах
                </div>

                <div class="article__text">
                    Мало кто знает, что цвет липового меда зависит от его степени зрелости, при этом полезные свойства и цена продукта не меняются. Молодой мед, 
                    который считается незрелым, жидкий, имеет светло-желтый, янтарный или зеленоватый оттенок. Цвет зависит от того, какие примеси в нем 
                    содержатся, и от места его сбора.
                </div>

                <div class="article__text">
                    При добыче бортевого меда, который формируется не в ульях, а в бортях, продукт имеет серо-коричневый оттенок, т. к. в нем присутствует перга, 
                    прополис, воск и другие продукты пчеловодства, увеличивающие содержание полезных веществ.
                </div>

                <div class="article__text">
                    Зрелый мед, который выкачивается из запечатанных сот, имеет густую консистенцию и прозрачную структуру. Через 3-4 месяца он становится 
                    более вязким, перестает течь, в нем начинают образовываться небольшие крупинки.
                </div>

                <div class="article__products">
                    <ShopProducts v-bind:products="products"></ShopProducts>
                </div>

                <div class="article__text">
                    Цвет теряет интенсивность и становится белым. Происходит это за счет того, что влаги в меде становится меньше, он становится более густым. 
                    Наличие характерных крупинок – признак натуральности и однородности липового меда, у которого полезные свойства сохраняются в любом 
                    виде, в том числе и в таком густом, как на фото.
                </div>

                <div class="article__text">
                    Кристаллизация меда считается нормальным процессом. После нее он обычно становится белым или бледно-желтым. Такой мед имеет 
                    характерный липовый аромат и выраженный сладкий вкус. Достигается это за счет того, что пчелы собирают нектар с цветущей липы. В процессе 
                    созревания аромат настаивается и делается стойким. Он позволяет отличить липовый мед от других сортов и разновидностей.
                </div>

                <div class="article__text">
                    Именно липовый нектар делает вкус меда ярко выраженным и сладким, в нем не чувствуется горечи. У молодого меда вкус более терпкий, немного 
                    вяжущий. У зрелого продукта с белым цветом и характерными кристалликами вкус очень сладкий, с оттенком липового цвета. В процессе 
                    вызревания вместе с влагой испаряются дополнительные ингредиенты, придающие липовому меду янтарный или ярко-желтый оттенок.
                </div>

                <div class="article__img">
                    <img src="@/img/honey_blog2.png" alt="">
                </div>

                <div class="article__subtitle">
                    Полезные свойства липового меда
                </div>

                <div class="article__text">
                    Следует помнить, что липовый мед имеет не только полезные свойства, но и противопоказания. Если на продукты пчеловодства у человека есть 
                    аллергия, его нельзя употреблять.
                </div>

                <AppAlert class="article__alert">
                    <template v-slot:img>
                        <svg width="16" height="52" viewBox="0 0 16 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.1333 35.0133H3.46667L0 0H15.6L12.1333 35.0133Z" fill="#FAAF3A"/>
                            <path d="M7.80029 52C11.4859 52 14.4736 49.051 14.4736 45.4133C14.4736 41.7756 11.4859 38.8267 7.80029 38.8267C4.11471 38.8267 1.12695 41.7756 1.12695 45.4133C1.12695 49.051 4.11471 52 7.80029 52Z" fill="#FAAF3A"/>
                        </svg>
                    </template>
                    <template v-slot:text>
                        На самом деле людей, которым противопоказан мед, в том числе и липовый, очень мало, поэтому для большинства желательно 
                        употреблять липовый мед регулярно, чтобы поддерживать здоровье и предупреждать развитие различных заболеваний.
                    </template>
                </AppAlert>

                <div class="article__subtitle">
                    Состав
                </div>

                <div class="article__text">
                    Из всех видов меда липовый – самый сладкий и самый полезный. В нем содержится до 36% чистой глюкозы и 40% фруктозы. Кроме этого, «жидкое 
                    золото» содержит:
                </div>

                <ul class="article__text_ul">
                    <li class="article__text_item">
                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4286 0H4.57143L0 6.5L4.57143 13H11.4286L16 6.5L11.4286 0Z" fill="#00A23D"/>
                        </svg>
                        <span>
                            витамины А, В, С, Е, К, РР;
                        </span>
                    </li>
                    <li class="article__text_item">
                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4286 0H4.57143L0 6.5L4.57143 13H11.4286L16 6.5L11.4286 0Z" fill="#00A23D"/>
                        </svg>
                        <span>
                            5 натуральных ферментов;
                        </span>
                    </li>
                    <li class="article__text_item">
                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4286 0H4.57143L0 6.5L4.57143 13H11.4286L16 6.5L11.4286 0Z" fill="#00A23D"/>
                        </svg>
                        <span>
                            22 аминокислоты;
                        </span>
                    </li>
                    <li class="article__text_item">
                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4286 0H4.57143L0 6.5L4.57143 13H11.4286L16 6.5L11.4286 0Z" fill="#00A23D"/>
                        </svg>
                        <span>
                            органические кислоты, в том числе и Омега-3;
                        </span>
                    </li>
                    <li class="article__text_item">
                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4286 0H4.57143L0 6.5L4.57143 13H11.4286L16 6.5L11.4286 0Z" fill="#00A23D"/>
                        </svg>
                        <span>
                            растительные гормоны;
                        </span>
                    </li>
                </ul>

                <div class="article__text">
                    У продукта высокая энергетическая ценность, в 1 ст. л. липового меда содержится 115 ккал. Достаточно просто выпить чай вприкуску с 
                    натуральным продуктом, чтобы получить хороший заряд энергии и дневную норму витаминов.
                </div>

                <div class="article__text">
                    Липовый мед помогает укрепить иммунитет. Он благотворно воздействует на сердечно-сосудистую систему, способствует нормализации 
                    пищеварения, улучшает обмен веществ, очищает печень, борется с патогенной микрофлорой, выводит токсины из организма, оптимизирует 
                    работу мочеполовой системы, эффективно борется с хронической усталостью, нормализует работу ЦНС за счет большого количества витаминов 
                    группы В, улучшает интеллектуальную деятельность. Кроме этого, липовый мед помогает бороться с бессонницей, стрессами и депрессией.
                </div>

                <div class="article__text">
                    Липовый мед помогает укрепить иммунитет. Он благотворно воздействует на сердечно-сосудистую систему, способствует нормализации 
                    пищеварения, улучшает обмен веществ, очищает печень, борется с патогенной микрофлорой, выводит токсины из организма, оптимизирует 
                    работу мочеполовой системы, эффективно борется с хронической усталостью, нормализует работу ЦНС за счет большого количества витаминов 
                    группы В, улучшает интеллектуальную деятельность. Кроме этого, липовый мед помогает бороться с бессонницей, стрессами и депрессией.
                </div>

                <div class="article__switch_buttons">
                    <button class="article__switch_button">
                        <svg width="55" height="16" viewBox="0 0 55 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M55 8H2M2 8L13.093 1M2 8L13.093 15" stroke="#A5A3A3" stroke-width="2"/>
                        </svg>
                        <span>
                            Предыдущая статья
                        </span>
                    </button>

                    <button class="article__switch_button">
                        <span>
                            Следующая статья
                        </span>
                        <svg width="55" height="16" viewBox="0 0 55 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.57628e-07 8H53M53 8L41.907 1M53 8L41.907 15" stroke="#A5A3A3" stroke-width="2"/>
                        </svg>
                    </button>
                </div>

                <AppBlogSocials class="article-socials2"></AppBlogSocials>
            </div>

            <div class="blogs-related">
                <div class="blogs-related_title">
                    Похожие статьи:
                </div>
                <AppArticles v-bind:articles="articles" v-bind:marginBottom="'3.75rem'"></AppArticles>
            </div>
        </article>
    </div>
</template>

<script>
export default {
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
                }
            ],
            articles: [
                {
                    id: 1,
                    title: 'Британские ученые заявили, что жизнь прекрасна!',
                    path: 'blog_honey.png',
                    desciption: `
                        Как уже неоднократно упомянуто, 
                        предприниматели в сети интернет, 
                        вне зависимости от их уровня, 
                        должны быть функционально разнесены на независимые элементы...`,

                },
                {
                    id: 2,
                    title: 'Британские ученые заявили, что жизнь прекрасна!',
                    path: 'blog_honey.png',
                    desciption: `
                        Как уже неоднократно упомянуто, 
                        предприниматели в сети интернет, 
                        вне зависимости от их уровня, 
                        должны быть функционально разнесены на независимые элементы...`,

                },
                {
                    id: 3,
                    title: 'Британские ученые заявили, что жизнь прекрасна!',
                    path: 'blog_honey.png',
                    desciption: `
                        Как уже неоднократно упомянуто, 
                        предприниматели в сети интернет, 
                        вне зависимости от их уровня, 
                        должны быть функционально разнесены на независимые элементы...`,

                }
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
.article__info {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    margin-bottom: 1.25rem;
}

.article__title {
    font-family: 'OrchideaPro-Bold';
    font-size: 1.5rem;

    margin-bottom: 0.625rem;
}

.article__date {
    color: #BDBDBD;

    font-family: 'OrchideaPro-SemiBold';
}

.article__views {
    @extend .article__date;

    margin-right: 2rem;
}

.article__button-subscribe {
    padding: 1rem 2.5rem;
}

.article__nav_title {
    font-size: 1.25rem;
    
    margin-bottom: 1.25rem;
}

.article__navigations_items {
    margin-bottom: 0.625rem;

    &:hover {
        color: #00A23D;
    }

    &:last-child {
        margin-bottom: 0;
    }
}

.article__subtitle {
    font-family: 'OrchideaPro-Bold';
    font-size: 1.5rem;

    margin-bottom: 1.5rem;
}

.article__text {
    margin-bottom: 1rem;
}

.article__alert {
    color: #000000;

    svg {
        margin-right: 2.25rem;
    }
}

.article__img {
    img {
        border-radius: 5px;

        margin-top: 0.625rem;
        margin-bottom: 1.875rem;

        width: 100%;
    }
}

.article__text_ul {
    margin-bottom: 1.25rem;
}

.article__text_item {
    display: flex;
    align-items: start;

    margin-bottom: 1rem;

    &:last-child {
        margin-bottom: 0;
    }

    svg {
        margin-right: 0.625rem;
    }
}

.article__switch_buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 1.875rem;
    margin-bottom: 3rem;
}

.article__switch_button {
    background: none;

    color: #A5A3A3;

    display: flex;
    align-items: center;

    & > *:first-child {
        display: block;

        margin-right: 1.25rem;
    }
}

.article__products {
    margin-top: 3.75rem;
    margin-bottom: 2.5rem;
}

.article-socials1 {
    margin-top: 2.5rem;
}

.article-socials2 {
    margin-bottom: 3.75rem;
}



.blogs-related_title {
    font-family: 'OrchideaPro-Bold';
    font-size: 1.5rem;

    margin-bottom: 1.875rem;
}
</style>