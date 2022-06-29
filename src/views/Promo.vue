
<template>
  <!--  <h1>{{ msg }}</h1>-->
  <!--  <div class="box" @onclick="getDo">getDo</div>-->

  <!--  <button @onclick="getDo">getDo</button>-->
  Promo
  <button @click="getDo2">getDo</button>
  <!-- <button @click="getAllItems">getAllItems</button> -->

  <!-- <div>{{state.AllItems}}</div> -->
  <!-- <div>{{ AllItems }}</div> -->
  <!-- :key="item.id" -->
  <!-- <div  v-for="item in AllItems">
    <div>{{ item }}</div>
  </div> -->

  <div :key="item.id" v-for="item in AllItems">
    <div>{{ item }}</div>
    <button @click="onCreateClick(item)">创建活动</button>
  </div>

  <!-- <div>{{ `${person.name}今年${person.age}岁` }}</div>
  <button @click="changeAge">加1岁</button> -->
  <!-- <button @click="getAll">获得所有</button> -->

  <div :key="item.id" v-for="item in promos">
    <div>{{ item }}</div>
    <button @click="publishPromo(item)">推送活动</button>
      <button @click="getPromoItem(item)">查看促销商品</button>
      <div>{{item.item}}</div>
  </div>
    <button @click="getAllPromos">getAllPromos</button>


  <!-- <div :key="item.id" v-for="item in items">
    {{ item.title }}
    好的
  <button @click="onCreateClick(item)"></button>
  </div> -->

  <!--  <van-list-->
  <!--          v-model="loading"-->
  <!--          :finished="finished"-->
  <!--          finished-text="没有更多了"-->
  <!--          @load="onLoad"-->
  <!--  >-->
  <!--    <van-cell v-for="item in list" :key="item" :title="item" />-->
  <!--  </van-list>-->
</template>

<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import Common from "../util/Common";
import { reactive } from "vue";
const person = reactive({
  name: "小明",
  age: 18,
  // AllItems:[],
});

//   const state = reactive({
//   AllItems:[],
// })
// https://blog.csdn.net/qq_43750656/article/details/113987010
// let items= reactive([])
let items: any = ref([]);
// let AllItems = ref([]);
let AllItems: any = ref([]);
let promos: any = ref([]);
// 需要声明  any
// defineProps<{ msg: string }>()
// props
// const count = ref(0)

// const getDo=()=>{
const getDo2 = () => {
  console.log("get do");
  axios.get(Common.axiosUrl + "item/publishpromo?id=1").then((res) => {
    console.log("res");
    console.log(res);
  });
};

const publishPromo = (item:any) => {
  console.log("get do");
  axios.get(Common.dbSecKillUrl + `item/publishpromo?id=${item.id}`).then((res) => {
    console.log("res");
    console.log(res);
  });
};
const getPromoItem = (item:any) => {
  console.log("get do");
  let url=`item/mysql/get?id=${item.itemId}`
    // let url=`item/get?id=${item.itemId}`
  axios.get(Common.dbSecKillUrl + url).then((res) => {
    console.log("res");
    console.log(res);
    item.item= res.data.data
  });
};




const getAll = () => {
  console.log("get all do");
  axios.get(Common.axiosUrl + "item/list").then((res) => {
    console.log("res");
    console.log(res);
    // let items=  res.data.data
    // items.se
    items.value = res.data.data;
    // items=res.data.data
    console.log("items");
    console.log(items);
  });
};

const getAllItems = () => {
  console.log("get all do");
  axios.get(Common.dbSecKillUrl + "item/list").then((res) => {
    console.log("res");
    console.log(res);
    // AllItems.value = res.data;
    AllItems.value = res.data.data;
    // let items=  res.data.data
    // items.se
    // items.value = res.data.data;
    // // items=res.data.data
    // console.log("items");
    // console.log(items);
  });
};


const getAllPromos = () => {
  console.log("get all do");
  // http://localhost:82/promo/list
  axios.get(Common.dbSecKillUrl + "promo/list").then((res) => {
    console.log("res");
    console.log(res);
    // AllItems.value = res.data;
    promos.value = res.data.data;

  });
};

const onCreateClick = (item: any) => {
  console.log("item");
  console.log(item);
  console.log("item.id");
  console.log(item.id);
  //  const config = {
  //                   headers: {
  //                       "Content-Type": "application/json;charset=utf-8", // 头部信息
  //                   },
  //               };

  axios
    .post(Common.dbSecKillUrl + "promo/create", {
      id: null,
      promoName: "promoName",
      // startDate: "2022/6/4 11:01",
      itemId: item.id,
      promoItemPrice: 1.0,
      // endDate: "2022/6/4 11:01",
         startDate: null,
       endDate:null,
    },Common.configJsonHeader)
    .then((res) => {
      console.log("res");
      console.log(res);
      let result= res.data.data
      alert(result)
      // AllItems.value = res.data;
      // AllItems.value = res.data.data;
    });
  // http://localhost:82/promo/create
};

// http://localhost:82/item/list

// 声明methods方法
const changeAge = () => {
  console.log(11);
  person.age += 1;
};

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
.box {
  background: #4d46ff;
}
</style>
