<template>
  <div class="user">
    <van-nav-bar
      title="用户"
      left-text="返回"
      right-text="登陆"
      left-arrow
      @click-left="goback"
      @click-right="go"
    />

    <van-card :title="'昵称:'+$store.state.user.data.nikename" :thumb="imageURL"/>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="个性签名" name="1">大家好！我是名侦探毛利小五郎。</van-collapse-item>
    </van-collapse>

    <van-cell title="我的皮肤" is-link/>
    <van-cell title="我的战绩" is-link/>
    <van-cell title="我的好友" is-link/>

    <van-collapse v-model="activeNames">
      <van-collapse-item title="每日记录" name="2">1.狭路相逢勇者胜</van-collapse-item>
    </van-collapse>

    <van-button type="default" @click="logout">退出</van-button>
  </div>
</template>

<script>
import store from "../plugins/store.js";
export default {
  data() {
    return {
      imageURL: "./img/a1.jpeg",
      activeNames: ["1"]
    };
  },
  beforeRouteEnter(to, from, next) {
    if (store.state.user.error == 0) {
      next();
    } else {
      console.log(store.state.user.error)
      
      next("/login");
    }
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    go() {
      this.$router.push("/login");
    },
    logout() {
      axios({ url: "http://localhost:3008/api/logout", method: "PUT" }).then(res => {
        if (res.data.error == 0) {
          this.$store.commit("USER", { error: 1 });
          localStorage.removeItem("vue_user");
          this.$router.push("/home");
        }
      });
    }
  }
};
</script>

<style scoped>
.van-card__title {
  margin-top: 38px;
  color: #7d7e80;
  margin-bottom: 6px;
}
.van-button {
  width: 100%;
  margin-top: 30px;
}
</style>