<template>
    <div class="subscription">
		<div class="subscription__text">
			Подпишитесь и получите скидку  5% на все!
		</div>
		<div class="subscription__form">
			<div class="subscription__input">
				<input type="text" placeholder="Введите Ваш e-mail">
			</div>
			<AppButton class="subscription__button">
				Отправить
			</AppButton>
		</div>
	</div>
</template>

<script>
export default {
    name: 'AppSubscription',
}
</script>

<style lang="scss" scoped>
.subscription {
    background: linear-gradient(90deg, #ECE9E6 0%, #FFFFFF 100%);

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 3.25rem 0;
    margin-top: 6rem;
    margin-bottom: 2.75rem;
}

.subscription__text {
    font-family: 'OrchideaPro-Bold';
    font-size: 1.5rem;

    margin-right: 2.75rem;
}

.subscription__form {
    border: 2px solid #00A23D;
    box-sizing: border-box;
    border-radius: 4px;

    display: flex;
}

.subscription__input {
    input {
        font-size: 0.875rem;

        padding: 0.625rem 0.75rem;
    }

    input::placeholder {
        color: #BDBDBD;
    }
}

.button {
    border-radius: 0;

    padding: 0.625rem 1rem;

    width: 100%;
}
</style>