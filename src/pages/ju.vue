<template>
  <div class="ju">
      
    <ul>
        <router-link v-for="(item,index) in lst" :key="item.id" tag="li"
         :to="{name:'detail',params:{id:item._id}}"
         >{{index+1}}.{{item.title}}：{{item.value}}</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  props:["lst"]
};
</script>


<style>
.ju a {
  text-decoration: none;
  color: #323233;
}
.ju ul li {
  white-space: nowrap;
  text-overflow: ellipsis;
  border-bottom: 1px solid #ebedf0;
  font-size: 14px;
  overflow: hidden;
  box-sizing: border-box;
  color: #323233;
  line-height: 24px;
  background-color: #fff;
  padding: 10px 15px;
}
</style>

