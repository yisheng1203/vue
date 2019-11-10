<template>
  <div class="footer">
    <van-tabbar v-model="active" active-color="#07c160">
      <van-tabbar-item icon="home-o" to='/home'>首页</van-tabbar-item>
      <van-tabbar-item icon="chat-o" to="shopp">信息</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/gocar">栏目</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    }
  }
}
</script>


<style scoped>

</style>
