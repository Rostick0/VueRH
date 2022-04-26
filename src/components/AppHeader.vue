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
				<router-link to="/catalog" class="header-bottom__catalog">
					<div class="header-bottom__burger">
						<span></span>
					</div>
					<span>
						Каталог товаров
					</span>
				</router-link>

				<div class="header-bottom__input">
					<input type="text" placeholder="Поиск по сайту">
				</div>

				<router-link to="/blogs">
                    <button class="header-bottom__transition">
                        Перейти в блог
                    </button>
                </router-link>

				<ul class="header-bottom__interaction">
					<li class="header-bottom__interaction_item favorite">
						<router-link to="/cart">
                            <span>{{ checkCountFavorite() }}</span>
							<img src="@/img/favorite_icon.svg" alt="favorite">
                        </router-link>
					</li>
					<li class="header-bottom__interaction_item log">
						<a href="#">
							<img src="@/img/log_icon.svg" alt="log">
						</a>
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
            count: 0
        }
    },
    methods: {
        setShow() {
            return this.show = !this.show
        },
        parseLocalStorage(name) {
            let parse = localStorage.getItem(name);
            parse = JSON.parse(parse);
            return parse;
        },
        checkCountFavorite() {
            let count = this.parseLocalStorage('Favorite');
            return count.length
        },
        checkCountCart() {

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
    
    .header-bottom__catalog {
        background: #00A23D;
        border-radius: 5px;
    
        display: flex;
        align-items: center;
    
        color: #FFFFFF;
    
        padding: 0.625rem;
        padding-right: 1rem;
    }
    
    .header-bottom__burger {
        @extend .header-top__burger;
        
        padding: 0;
        width: 14px;
        height: 10px;
    
        margin-right: 9px;
    }
    
    .header-bottom__input {
        width: 23vw;
    
        input {
            border: 1.5px solid #424242;
            border-radius: 5px;
    
            padding: 0.625rem 1.5rem;
    
            width: 100%;
        }
    }
    
    .header-bottom__transition {
        background: #FAAF3A;
        border-radius: 5px;
    
        padding: 0.625rem 2rem;
    }
    
    .header-bottom__interaction {
        display: flex;
    
        & > * {
            margin-right: 2.5rem;
        }
    
        & > *:last-child {
            margin-right: 0;
        }
    }
    
    .header-bottom__interaction_item {
        
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