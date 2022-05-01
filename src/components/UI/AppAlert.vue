<template>
    <div class="alert">
        <div class="alert__container">
            <div class="alert__img">
                <slot name="img">
                    
                </slot>
            </div>

            <div class="alert__text">
                <slot name="text"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppAlert',

}
</script>

<style lang="scss" scoped>
.alert {
    background: linear-gradient(90deg, #ECE9E6 0%, #FFFFFF 100%);
    background-size: cover;

    border-radius: 5px;
}

.alert__container {
    display: flex;
    align-items: center;

    padding: 1.75rem 3.25rem;

    @media (max-width: 576px) {
        & {
            padding: 0.75rem 1.5rem;
        }
    }
}

.alert__img {
    & > * {
        margin-right: 2.25rem;
    }
}
</style>