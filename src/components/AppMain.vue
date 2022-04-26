<template>
    <main class="main">
        <router-view></router-view>

        <AppChat class="main__chat"></AppChat>
        <AppSubscription></AppSubscription>
    </main>
</template>

<script>
export default {
    name: 'AppMain',
}
</script>


<style lang="scss" scoped>
.main__chat {
    position: fixed;
    left: 2vw;
    bottom: 3vh;
}
</style>