<template>
  <div id="app">
    <v-head></v-head>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Head from '@/components/Head'
import Footer from '@/components/Footer'

export default {
  name: 'app',
  components: {
    'v-head': Head,
    'v-footer': Footer
  }
}
</script>

<style lang="css">
@import './assets/style/reset.css';
@import '../node_modules/font-awesome/css/font-awesome.min.css';
</style>
