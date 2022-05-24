
<template>
  promo
  da

  af
  a
  fa
  f
  a
<!--  <h1>{{ msg }}</h1>-->
  <!--  <div class="box" @onclick="getDo">getDo</div>-->

<!--  <button @onclick="getDo">getDo</button>-->
  <button @click="getDo2">getDo</button>

  <div>{{`${person.name}今年${person.age}岁`}}</div>
  <button @click="changeAge">加1岁</button>
</template>

<script setup lang="ts">
  import axios from 'axios'
import { ref } from 'vue'
  import Common from "../util/Common";

// defineProps<{ msg: string }>()
// props
// const count = ref(0)

  // const getDo=()=>{
  const getDo2=()=>{
    console.log("get do")
    axios.get(  Common.axiosUrl+"item/publishpromo?id=1").then(res=>{
      console.log("res")
      console.log(res)
    })
  }

  import { reactive } from 'vue'
  const person = reactive({
    name: '小明',
    age: 18
  })


  // 声明methods方法
  const changeAge = () => {
    console.log(11)
    person.age += 1
  }


// 发布商品的请求 URL 是：http://82.156.200.100:82/item/publishpromo?id=1（最后的 id 根据你在链接上看到的自己来就行）
</script>



<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
  .box{
    background: #4d46ff;
  }
</style>
