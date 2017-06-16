<template lang="html">
  <div class="index">
    <v-banner></v-banner>
    <v-btn></v-btn>
  </div>
</template>

<script>
import Banner from './Banner'
import Btn from './Btn'

export default {
  components: {
    'v-banner': Banner,
    'v-btn': Btn
  }
}
</script>

<style lang="css">
</style>
