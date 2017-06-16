<template lang="html">
  <div class="Lazy">
    <div class="img" v-for="item in 100">
      <img v-lazy="item.src" v-for="item in lazys" key="item.id">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lazys: [
        { id: '0', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKf68bbd8H_AmM4wK_iOzl1lFl71yhqexRPnJIgpXSMXaiVRARew' },
        { id: '1', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvsgj1zwKCL4lavdJjPKhXm-T15INfuLy97bwNGoW2FH3ekRr2dg' },
        { id: '2', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI0R43PvDiRRcbmcLAMigdxRyiJxNubYSv-vgzTFuf4XYOuweNOQ' },
        { id: '3', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQShKTuu2M6fA8un06nQHQ09e8Wu2dBwKuzxv8cGvngu2X91HEv' },
        { id: '4', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTKv1VtNB0dpD7DRsdBpTgMWWmixQtOJS5-kiY42RZvbicKI2' }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
@import '../assets/style/lazy.css';
</style>
