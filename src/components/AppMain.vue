<template>
    <main class="main">
        <router-view></router-view>

        <AppChat class="main__chat"></AppChat>
        <AppSubscription></AppSubscription>
    </main>
</template>

<script>
//import Main from '@/pages/Main';

export default {
    name: 'AppMain',
    // components: {
    //     Main
    // }
}
</script>


<style lang="scss" scoped>
.main__chat {
    position: fixed;
    top: 0;
}
</style>