<template>
  <div class="gocar">
    <van-nav-bar
      title="栏目"
      left-text="返回"
      left-arrow
      @click-left="goback"
    />

    <!-- <van-card
      :num="item.number"
      :price="item.price"
      :desc="item.content"  
      :title="item.title"
      :thumb="item.img"
      v-for="(item,index) in imgs" :key="index"
    /> -->
    <van-card
      :desc="item.content"  
      :title="item.title"
      :thumb="item.img"
      v-for="(item,index) in imgs" :key="index"
    />
  </div>

  
</template>

<script>
export default {
  data(){
    return{
      imageURL:[],
      imgs:[]
    }
  },
  methods: {
    onClose(clickPosition, instance) {
      switch (clickPosition) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          Dialog.confirm({
            message: '确定删除吗？'
          }).then(() => {
            instance.close();
          });
          break;
      }
    },
    goback(){
        this.$router.go(-1)
    }
  },
  mounted(){
    axios({url:"/data/imgs.json"}).then(
      // res=>console.log(res.data)
      res=>this.imgs=res.data
    )
  }
}
</script>

<style scoped>
.van-card__title{margin-top: 26px;color: #7d7e80;}
.van-card__content{margin-left: 6px;}
</style>