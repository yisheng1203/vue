<template>
  <div class="detail">
    <div class="gocar">
      <van-nav-bar title="详情" left-text="返回" left-arrow @click-left="goback"/>
    </div>

    <van-card :desc="title2" :title="title1" :thumb="imageURL"/>

    <span class="span">评分：</span>
    <van-rate v-model="value"/>

    <van-collapse v-model="activeNames">
      <van-collapse-item title="知己知彼:" name="1">只有当你真正了解了装备的性能，才能更好的帮助你顺利吃鸡！</van-collapse-item>
      <van-collapse-item :title="title3" name="2">{{title4}}</van-collapse-item>
      <van-collapse-item title="性价比:" name="3">{{title5}}</van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageURL: "./img/a1.jpeg",
      value: 4,
      activeNames: ["1"],
      list: [],
      title1: "",
      title2: "",
      title3: "",
      title4: "",
      title5: ""
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  },
  mounted() {
    axios({ url: "http://localhost:3008/api/banner" }).then(
      // res=>console.log(res.data.data[0].id)
      // res=>console.log(res.data.data.length)
      res => {
        this.list = res.data.data;
        // console.log(this.list);
        for (let i = 0; i < this.list.length; i++) {
          // console.log(i)
          // console.log(this.list.length)
          if (this.list[i]._id == this.$route.params.id) {
            this.title1 = this.list[i].data.title1;
            this.title2 = this.list[i].data.title2;
            this.title3 = this.list[i].data.title3;
            this.title4 = this.list[i].data.title4;
            this.title5 = this.list[i].data.title5;
            // this.imageURL = this.list[i].data.img
            // console.log(this.list[i].data)
          }
        }
      }
    );

    // console.log(this.$route.params.id)

    axios({ url: "http://localhost:3008/api/home" }).then(res => {
      this.list = res.data.data;
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i]._id == this.$route.params.id) {
          this.title1 = this.list[i].data.title1;
          this.title2 = this.list[i].data.title2;
          this.title3 = this.list[i].data.title3;
          this.title4 = this.list[i].data.title4;
          this.title5 = this.list[i].data.title5;
        }
      }
    });
  }
};
</script>


<style scoped>
.van-card__title {
  margin-top: 28px;
  color: #7d7e80;
  margin-bottom: 6px;
}
.span {
  display: inline-block;
  margin-left: 14px;
}
.van-rate {
  display: inline-block;
  padding-top: 6px;
}
</style>