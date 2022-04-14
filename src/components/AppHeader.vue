<template>
    <header class="header">
		<div class="container">
			<div class="header-top">
				<div class="header-top__logo">
                    <a href="#"><img src="@/img/logo.svg" alt="RumHerb"></a>
                </div>
                
				<div class="header-top__phone">8 (913) 897-65-98</div>
				<div class="header-top__burger"><span></span></div>
			</div>
		</div>

		<hr class="header__hr">

		<div class="container">
			<div class="header-bottom">
				<div class="header-bottom__catalog">
					<div class="header-bottom__burger">
						<span></span>
					</div>
					<span>
						Каталог товаров
					</span>
				</div>

				<div class="header-bottom__input">
					<input type="text" placeholder="Поиск по сайту">
				</div>

				<button class="header-bottom__transition">
					Перейти в блог
				</button>

				<ul class="header-bottom__interaction">
					<li class="header-bottom__interaction_item favorite">
						<a href="#">
							<img src="@/img/favorite_icon.svg" alt="favorite">
						</a>
					</li>
					<li class="header-bottom__interaction_item log">
						<a href="#">
							<img src="@/img/log_icon.svg" alt="log">
						</a>
					</li>
					<li class="header-bottom__interaction_item cart">
						<a href="#">
							<img src="@/img/cart_icon.svg" alt="cart">
						</a>
					</li>
				</ul>
			</div>
		</div>
	</header>
</template>

<style lang="scss">
.header {
    padding-top: 1rem;

    .header-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .header-top__phone {
        display: flex;
    
        font-family: 'OrchideaPro-SemiBold';
        font-size: 1.125rem;
    
        &::before {
            content: url('../img/phone_icon.svg');
            margin-right: 0.5rem;
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
    
    .header-bottom__interaction_item.favorite > *::before {
        content: "1";
        background: #FAAF3A;
        border-radius: 50%;
    
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
    
    .header-bottom__interaction_item.cart > *::before {
        content: "1";
        background: #FAAF3A;
        border-radius: 50%;
    
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