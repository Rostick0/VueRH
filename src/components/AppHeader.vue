<template>
    <header class="header">
		<div class="container">
			<div class="header-top">
				<div class="header-top__logo">
                    <router-link to="/">
                        <img src="@/img/logo.svg" alt="RumHerb">
                    </router-link>
                </div>
                
				<div class="header-top__phone">
                    <AppGreyPhone></AppGreyPhone>
                </div>
				<button v-on:click="setShow" class="header-top__burger">
                    <span>
                        <AppHeaderMenu v-bind:show="show"></AppHeaderMenu>
                    </span>
                </button>
			</div>
		</div>

		<hr class="header__hr">

		<div class="container">
			<div class="header-bottom">
                <div class="header-bottom__left">
                    <router-link to="/catalog" class="header-bottom__catalog">
                        <div class="header-bottom__burger">
                            <span></span>
                        </div>
                        <span>
                            Каталог товаров
                        </span>
                    </router-link>

                    <form class="header-bottom__input" method="POST" onsubmit="return false;">
                        <input v-model="search" type="text" placeholder="Поиск по сайту">
                    </form>

                    <router-link class="header-bottom__href" to="/blogs">
                        <button class="header-bottom__transition">
                            Перейти в блог
                        </button>
                    </router-link>
                </div>

				<ul class="header-bottom__interaction">
                    <li class="header-bottom__interaction_item">
                        <button v-on:click="setShow" class="header-top__burger">
                            <span>
                                <AppHeaderMenu v-bind:show="show"></AppHeaderMenu>
                            </span>
                        </button>
                    </li>
					<li class="header-bottom__interaction_item favorite">
						<router-link to="/cart">
                            <span>{{ checkCountFavorite() }}</span>
							<img src="@/img/favorite_icon.svg" alt="favorite">
                        </router-link>
					</li>
					<li class="header-bottom__interaction_item log">
						<router-link to="/user">
                            <img src="@/img/log_icon.svg" alt="log">
                        </router-link>
					</li>
					<li class="header-bottom__interaction_item cart">
						<router-link to="/cart">
                            <span>{{ this.count }}</span>
							<img src="@/img/cart_icon.svg" alt="cart">
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</header>
</template>

<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            show: false,
            search: '',
            count: 0
        }
    },
    methods: {
        setShow() {
            return this.show = !this.show
        },
        parseLocalStorage(name) {
            let parse = localStorage.getItem(name);
            parse = parse ? JSON.parse(parse) : 0;
            return parse;
        },
        checkCountFavorite() {
            let count = this.parseLocalStorage('Favorite');
            return count.length
        },
        checkCountCart() {

        }
    },
    watch: {
        search() {
            console.log(this.search)
        }
    }
}
</script>

<style lang="scss">
.header {
    padding-top: 1rem;

    .header-top {
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media (max-width: 576px) {
            .header-top__burger {
                display: none;
            }
        }
    }
    
    .header-top__burger {
        background: #00A23D;
        border-radius: 5px;
    
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    
        width: 4rem;
        height: 2.5rem;
    
        padding: 0.625rem 1.125rem;

        position: relative;
    
        span {
            background: #FFFFFF;
    
            display: inline-block;
        
            width: 100%;
            height: 2px;
        }
    
        &::after {
            content: "";
            
            background: #FFFFFF;
    
            display: inline-block;
    
            width: 100%;
            height: 2px;
        }
    
        &::before {
            content: "";
            
            background: #FFFFFF;
    
            display: inline-block;
    
            width: 100%;
            height: 2px;
        }

        &:hover {
            background: #FFFFFF;
            outline: 2px solid #00A23D;

            span {
                background: #424242;
            }

            &::before {
                background: #424242;
            }

            &::after {
                background: #424242;
            }
        }
    }
    
    .header__hr {
        background: #BDBDBD;
    
        width: 100%;
        height: 1px;
    
        margin: 0.625rem 0 1.5rem;
    }
    
    .header-bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .header-bottom__left {
        align-items: stretch;
        grid-template-columns: 1fr 2.25fr 1fr;
        display: grid;
        grid-gap: 2.375rem;

        width: 100%;
    }

    @media (max-width: 576px) {
        .header-bottom__left {
            grid-template-columns: 1fr;
        }
    }
    
    .header-bottom__catalog {
        background: #00A23D;
        border-radius: 5px;
    
        display: flex;
        align-items: center;
    
        color: #FFFFFF;
    
        padding: 0.625rem;
        padding-right: 1rem;

        &:hover {
            background: #FFFFFF;
            outline: 2px solid #00A23D;
            color: #424242;

            .header-bottom__burger {
                span {
                    background: #424242;
                }

                &::before {
                    background: #424242;
                }

                &::after {
                    background: #424242;
                }
            }
        }
    }

    @media (max-width: 576px) {
        .header-bottom__catalog {
            display: none;
        }
    }
    
    .header-bottom__burger {
        @extend .header-top__burger;

        &:hover {
            outline: 0;
        }

        background: none;
        
        padding: 0;
        width: 14px;
        height: 10px;
    
        margin-right: 9px;
    }
    
    .header-bottom__input {
    
        input {
            border: 1.5px solid #424242;
            border-radius: 5px;
    
            padding: 0.625rem 1.5rem;
    
            width: 100%;
        }
    }
    
    @media (max-width: 576px) {
        .header-bottom__href {
            display: none;
        }
    }

    .header-bottom__transition {
        background: #FAAF3A;
        border-radius: 5px;
    
        padding: 0.625rem 2rem;

        height: 100%;
    }
    
    .header-bottom__interaction {
        grid-template-columns: 1fr 1fr 1fr;
        display: grid;
        grid-gap: 2.5rem;
    }

    @media (max-width: 576px) {
        .header-bottom__interaction {
            position: fixed;
            bottom: 0;

            z-index: 10000;
        }
    }
    
    .header-bottom__interaction_item {
        &:first-child {
            display: none;
        }
        
        & > * {
            display: flex;
        }
    }
    
    .header-bottom__interaction_item.favorite > * span {
        background: #FAAF3A;
        border-radius: 50%;

        color: #000000;
    
        display: flex;
        justify-content: center;
        align-items: center;
    
        font-family: 'PT Sans', sans-serif;
        font-size: 11px;
    
        width: 15px;
        height: 15px;
    
        top: -2px;
        left: 35px;
    
        position: relative;
    
        z-index: 1000;
    }
    
    .header-bottom__interaction_item.cart > * span {
        background: #FAAF3A;
        border-radius: 50%;

        color: #000000;
    
        display: flex;
        justify-content: center;
        align-items: center;
    
        font-family: 'PT Sans', sans-serif;
        font-size: 11px;
    
        width: 15px;
        height: 15px;
    
        top: -2px;
        left: 35px;
    
        position: relative;
    
        z-index: 1000;
    }
    
    .header-bottom__interaction_item.log > *::before {
        content: "+";
    
        color: #FAAF3A;
    
        display: flex;
        justify-content: center;
        align-items: center;
    
        font-family: 'PT Sans', sans-serif;
        font-size: 16px;
    
        width: 16px;
        height: 16px;
    
        top: 13px;
        left: 29px;
    
        position: relative;
    
        z-index: 1000;
    }
}
</style>