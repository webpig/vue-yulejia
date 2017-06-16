<template lang="html">
  <div class="footer">
    <div class="main">
      <router-link to="/">
        首页
      </router-link>
    </div>
    <div class="lazy">
      <router-link to="/lazy">
        懒加载
      </router-link>
    </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
@import '../assets/style/footer.css';
</style>
