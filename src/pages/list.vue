<template>
  <div class="list">
      
    <ul>
      <!-- <router-link
    :to="{name:'detail',params:{id:list[item]._id}}"
    > -->
        <router-link v-for="(item,index) in list" :key="index" tag="li" 
        :to="{name:'detail',params:{id:item._id}}"
        >{{item.id}}.{{item.title}}：{{item.value}}</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  props:[ 'list' ],
};
</script>


<style>
.list a {
  text-decoration: none;
  color: #323233;
}
.list ul li {
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

