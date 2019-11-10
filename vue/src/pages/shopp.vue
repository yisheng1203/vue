<template>
  <div class="shopp">
    <van-nav-bar
      title="信息"
      left-text="返回"
      left-arrow
      @click-left="goback"
    />
  
  <van-card
    desc="西西弗-客满中心"  
    title="我是今天的值班客服，很高兴为您服务……"
    :thumb="imageURL1"
  />
  <van-card
    title="西西弗-系统消息"  
    :thumb="imageURL2"
  />
  <van-card
    title="西西弗-我的包包"  
    :thumb="imageURL3"
  />
  
  </div>
</template>

<script>
export default {
  data(){
    return{
      value:'',
      list:[],
      imageURL1:'/img/kefu.png',
      imageURL2:'/img/shezhi.png',
      imageURL3:'/img/xinxi.png',
    }
  },
    methods:{
        goback(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
.home-product {
  background-color: white;
  margin-top:10px;
  padding: 0 10px;
}
.home-product-col1 {
  /* padding-top: 10px; */
  /* padding-bottom: 10px; */
  /* height: 70px; */
  text-align: center;
  /* background: red; */
}
.home-product-col1 img {
  width:70%;
}
.home-product-col1 span {
  display: block;
  color: #555;
  font-size: 12px;
  /* margin-bottom: 10px; */
}
.van-card__title{margin-top: 22px;color: #7d7e80;margin-bottom: 12px;width: 206px}
.van-card__content{margin-left: 6px;}
.van-card{background: #fff;border-bottom: 2px solid #D9D9D9;padding-left: 6px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}
</style>

