<template>
    <footer class="footer">
			<div class="container">
				<div class="footer-top">
					<div class="footer-top__catalog">
						<h5 class="footer-top__h5">
							Каталог:
						</h5>
						<ul class="footer-top__ul">
							<li class="footer-top__li">
								<a href="">
									Мёд
								</a>
							</li>
							<li class="footer-top__li">
								<a href="">
									Пчелопродукты
								</a>
							</li>
							<li class="footer-top__li">
								<a href="">
									Травяные чаи
								</a>
							</li>
							<li class="footer-top__li">
								<a href="">
									Диабетическое питание
								</a>
							</li>
							<li class="footer-top__li">
								<a href="">
									Корпоративные сувениры
								</a>
							</li>
							<li class="footer-top__li">
								<a href="">
									Подарки
								</a>
							</li>
						</ul>
					</div>
					<div class="footer-top__help">
						<h5 class="footer-top__h5">
							Помощь:
						</h5>
						<li class="footer-top__li">
							<a href="">
								Способы доставки
							</a>
						</li>
						<li class="footer-top__li">
							<a href="">
								Способы оплаты
							</a>
						</li>
						<li class="footer-top__li">
							<a href="">
								Возврат товара
							</a>
						</li>
						<li class="footer-top__li">
							<a href="">
								Вопрос-ответ
							</a>
						</li>
					</div>
					<div class="footer-top__partner">
						<h5 class="footer-top__h5">
							Партнерам:
						</h5>
						<li class="footer-top__li">
							<a href="">
								О нас
							</a>
						</li>
						<li class="footer-top__li">
							<a href="">
								Партнерам
							</a>
						</li>
						<li class="footer-top__li">
							<a href="">
								Личный кабинет
							</a>
						</li>
						<li class="footer-top__li">
							<a href="">
								Блог
							</a>
						</li>
					</div>
					<div class="footer-top__feedback">
						<div class="footer-top__feedback_first">
							<h5 class="footer-top__h5">
								Контакты:
							</h5>
							<span class="footer-top__feedback_number">
                                <img src="@/img/footer_phone.svg" alt="">
								8 (913) 897-65-98
							</span>
						</div>
						<div class="footer-top__feedback_second">
							<h5 class="footer-top__h5">
								Подписаться:
							</h5>
							<ul class="footer-top__socials">
								<li class="footer-top__socials__item">
									<a href="">
										<img src="@/img/instagram.svg" alt="инстаграм">
									</a>
								</li>
								<li class="footer-top__socials__item">
									<a href="">
										<img src="@/img/pinterest.svg" alt="пинтрест">
									</a>
								</li>
								<li class="footer-top__socials__item">
									<a href="">
										<img src="@/img/odnoklassniki.svg" alt="одноклассники">
									</a>
								</li>
								<li class="footer-top__socials__item">
									<a href="">
										<img src="@/img/vk.svg" alt="вконтакте">
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="footer-bottom">
					<a class="footer-bottom__href" href="">
						<span class="footer-bottom__span">
                            <img src="@/img/copyright.svg" alt="">
							2022. Все права защищены.
						</span>
						<span class="footer-bottom__span">
							Политика конфидециальности.
						</span>
					</a>
				</div>
			</div>
		</footer>
</template>

<style lang="scss">
.footer {
    background: #00A23D;
    color: #FFFFFF;

    padding: 2.5rem 0;

    .footer-top {
        display: flex;
        justify-content: space-between;
    }
    
    .footer-top__h5 {
        font-family: 'OrchideaPro-Bold';
    
        margin-bottom: 1.875rem;
    }
    
    .footer-top__li {
        margin-bottom: 0.625rem;
    
        a {
            color: #FFFFFF;
        }
    }
    
    .footer-top__li:last-child {
        margin-bottom: 0;
    }
    
    .footer-top__feedback {
        
        .footer-top__h5 {
            margin-bottom: 1.5rem;
        }
    }

    .footer-top__feedback_first {
        margin-bottom: 2.25rem;
    }
    
    .footer-top__feedback_number {
        display: flex;
    
        font-family: 'OrchideaPro-Bold';
        font-size: 1.125rem;
    }
    
    .footer-top__feedback_number img { 
        margin-right: 0.625rem;
    }
    
    .footer-top__socials {
        display: flex;
    
        & > * {
            margin-right: 1rem;
        }
    
        & > *:last-child {
            margin-right: 0;
        }
    }
    
    .footer-bottom {
        margin-top: 2.5rem;
    }
    
    .footer-bottom__href {
        display: flex;
        justify-content: center;
    }
    
    .footer-bottom__span {
        display: flex;
        color: #FFFFFF;
    
        &:first-child {
            margin-right: 0.625rem;
        }
    
        & img {    
            margin-right: 0.5rem;
        }
    }
}
</style>