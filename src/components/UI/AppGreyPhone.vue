<template>
    <div class="header-top__phone">8 (913) 897-65-98</div>
</template>

<script>
export default {
    name: 'AppGreyPhone'
}
</script>

<style lang="scss" scoped>
.header-top__phone {
    display: flex;
    
    font-family: 'OrchideaPro-SemiBold';
    font-size: 1.125rem;
    
    &::before {
        content: url('../../img/phone_icon.svg');
        margin-right: 0.5rem;
    }

    @media (max-width: 576px) {
        font-size: 1rem;
    }
}
</style>