<template>
    <div id="app">
        <NavBar></NavBar>
        <router-view></router-view>
        <footerBar></footerBar>
    </div>
</template>

<script>
    import NavBar from '@/components/Header.vue'
    import FooterBar from '@/components/FooterBar.vue'

    export default {
        name: 'app',
        components: {
            NavBar,
            FooterBar,
        }
    }
</script>

<style>

</style>
