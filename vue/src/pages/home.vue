<template>
  <div class="home">
    <van-row>
      <van-col span="4">
        <a href="#" class="logo">CJZC</a>
      </van-col>
      <van-col span="16">
        <van-search 
          label="搜索"
          shape="round"
          placeholder="马格兰" 
          v-model="value" 
        />
      </van-col>
      <van-col span="4">
        <van-icon class="qr" name="qr" size="30px" color="#399" />
      </van-col>
    </van-row>

    <van-swipe :heigth="150" :autoplay="3000" vertical indicator-color="#399">
      <van-swipe-item
        v-for="(item,index) of imgs"
        :key="index"
      >
        <img :src="item" class="swipe-item-img">
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell title="突击步枪"/>
    </van-cell-group>

    <list :list="list"></list>
    
    <van-cell-group>
      <van-cell title="狙击枪"/>
    </van-cell-group>

    <ju :lst="lst"></ju>
  </div>
</template>

<script>
import list from './list'
import ju from './ju'
export default {
  data(){
    return{
      value:'',
      imgs:[
        './img/a1.jpeg',
        './img/a2.jpg',
        './img/a3.jpg',
        './img/a4.png',
        './img/a5.jpeg',
      ],
      list:[],
      lst:[],
    }
    
  },
    components:{list,ju},
    mounted(){
      axios({url:"http://localhost:3008/api/banner"}).then(
        // res=>console.log(res.data.data)
        res=>this.list=res.data.data
      )
      axios({url:"http://localhost:3008/api/home"}).then(
        // res=>console.log(res.data.data)
        res=>this.lst=res.data.data
      )
    }
}
</script>


<style scoped>
.van-swipe{height: 150px;}
.swipe-item-img{width: 100%;}
.logo{line-height: 54px;margin-left: 10px;color: #399;}
.van-icon-qr:before {
  margin-top: 10px
}
.van-cell__title {
width: 130px;
flex:none;
}
.van-cell__value{
  text-align: left
}

</style>