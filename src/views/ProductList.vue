
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
  <el-button type="" @click="PeoplesGet">PeoplesGet</el-button>
  <el-button type="" @click="PeoplesGetList">PeoplesGetList</el-button>

  <button @click="getAllPromos">getAllPromos</button>

  <el-button type="" @click="productGetList">productGetList</el-button>
  <el-button type="" @click="productPost">productPost</el-button>
  <el-button type="" @click="productPut">productPut</el-button>
  <el-button type="" @click="productDelete">productDelete</el-button>
  <el-button type="" @click="productSelectPage">productSelectPage</el-button>

  <el-button type="" @click="mongoInsertTest">mongoInsertTest</el-button>

  <div :key="item.id" v-for="item in products">
    <div>{{ item }}</div>
    <!-- <button @click="publishPromo(item)">推送活动</button>
    <button @click="getPromoItem(item)">查看促销商品</button> -->
    <!-- <el-button type="" @click="PeoplesGet">PeoplesGet</el-button> -->
    <!-- <van-button type="default" @click="PeoplesGet">PeoplesGet</van-button> -->

    <!-- <div>{{ item.item }}</div> -->
  </div>

  <div :key="item.id" v-for="item in promos">
    <div>{{ item }}</div>
    <button @click="publishPromo(item)">推送活动</button>
    <button @click="getPromoItem(item)">查看促销商品</button>
    <!-- <el-button type="" @click="PeoplesGet">PeoplesGet</el-button> -->
    <!-- <van-button type="default" @click="PeoplesGet">PeoplesGet</van-button> -->

    <div>{{ item.item }}</div>
  </div>

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
import HttpUtil from "../util/HttpUtil";
import T from "../util/T";

// HttpUtil
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
let products: any = ref([]);

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

const PeoplesGet = () => {
  console.log("get do productUrl Peoples");
  // fetch(Common.productUrl+ "/Peoples").then((res) => {
  //   console.log("res Peoples");
  //   console.log(res);
  // });
  // HttpUtil.get(Common.productUrl+ "/Peoples").then((res) => {
  //   console.log("res Peoples");
  //   console.log(res);
  // });

  HttpUtil.fetchGet(Common.productUrl + "/Peoples", {}).then((res) => {
    console.log("res Peoples");
    console.log(res);
  });
  // axios.get(Common.axiosUrl + "item/publishpromo?id=1").then((res) => {
  //   console.log("res");
  //   console.log(res);
  // });
};

const PeoplesGetList = () => {
  console.log("get do productUrl Peoples");

  HttpUtil.getList(Common.entityName.Peoples)
    // HttpUtil.fetchGet(Common.productUrl+ "/Peoples",{})
    .then((res) => {
      console.log("res Peoples");
      console.log(res);
    });
};

const mongoInsertTest = () => {
  console.log("get do productUrl Peoples");

  let data = {
    id: "1195398?idx=9",
    titleMessage:
      "\n                    \n                        产品运营\n                    \n                    \n                                                    7500-8499\n                                                \n                                                            |\n                                浙江省杭州市滨江区                                                        |\n                            全职                            |\n                            本科                        \n                    \n                ",
    title: "产品运营",
    salary: "7500-8499",
    education:
      "\n                                                            |\n                                浙江省杭州市滨江区                                                        |\n                            全职                            |\n                            本科                        ",
    jobDetail:
      "<p><strong>岗位描述：</strong></p><p>1.在快速理解公司业务的基础上，开展产品运营日常工作，包括但不限于部分产品策划、运营需求梳理、维护项目进度表、跟进需求上线时间、梳理沉淀标准使用流程等；</p><p>2.对于业务开展进行支持工作，为前端销售同事提供产品相关支持工作，包括但不限于提供市场物料、培训手册、产品介绍、使用流程介绍等；</p><p>3.履行沟通与支持工作，听取客户实际问题，及时答复并跟踪将问题闭环，提升客户满意度；</p><p>4.总结所负责产品的各类用户反馈问题，并总结成产品或运营优化建议。</p><p><strong>岗位要求：</strong></p><p>1.熟练掌握办公软件，如Word、Excel、PPT等；</p><p>2.热爱教育行业，较强的理解和表达能力，能快速理解业务，对业务逻辑敏感；</p><p>3 .具备良好的沟通协调能力和抗压能力，高度的责任心、具有团队协作精神；</p><p>4.基本掌握一款产品设计软件优先，如墨刀、sketch、axure等。</p><p><strong>工作地点：杭州市滨江区 &nbsp;薪资：</strong><strong>6</strong><strong>k-</strong><strong>8</strong><strong>k</strong></p><p><br></p>",
    address:
      "\n                    杭州市滨江区滨安路 1168 号施强广场 1 号楼20 层\n                    点击查看地图                ",
    mapImg:
      '<img src="http://api.map.baidu.com/staticimage/v2?ak=zE4Ts9dMMD3FQblaGnifcU6hG0GP2IT1&amp;markers=120.17966510201,30.183712147487&amp;width=800&amp;height=200&amp;zoom=18&amp;markerStyles=l,,0xff0000" alt="">',
    location_href: "http://career.zucc.edu.cn/job/view/id/1195398?idx=9",
    detailsList: [
      { title: "职能类别：", value: "产品/设计/运营" },
      { title: "招聘人数：", value: "4人" },
      { title: "工作经验：", value: "不限" },
      { title: "语言要求：", value: "不限" },
      { title: "联系人: ", value: "寿清" },
      { title: "联系人电话: ", value: "0571-88034922" },
      {
        title: "需求专业：",
        value: "【本科】商务英语、日语、汉语言文学、英语",
      },
    ],
  };
  HttpUtil.postData(`http://localhost:8003/api/all/mongoInsert`, {
    data: data,
    collectionName: "job",
  })
    // HttpUtil.fetchGet(Common.productUrl+ "/Peoples",{})
    .then((res) => {
      console.log("res Peoples");
      console.log(res);
    });
};

const productPost = () => {
  // new Date() stringfy
  // let productPostData = {
  //   id: null,
  //   create_time: new Date(),
  //   name: "string",
  //   product_code: "string",
  //   specification: "string",
  // };

  let productPostData = {
    id: null,
    create_time: new Date(),
    name: "good",
    product_code: "good",
    specification: "good",
  };
  // let jsonStr=JSON.stringify(productPostData)
  console.log("get do productUrl product");
  // console.log("get do productUrl product jsonStr");
  // console.log(jsonStr);

  HttpUtil.create(T.product, productPostData).then((res) => {
    console.log("res Peoples create");
    console.log(res);
    // products=res
    // products.value =res
  });

  // HttpUtil.create(Common.entityName.product,productPostData).then((res) => {
  //   console.log("res Peoples create");
  //   console.log(res);
  //   // products=res
  //   // products.value =res
  // });
};

const productPut = () => {
  let productPostData = {
    id: 4,
    create_time: new Date(),
    name: "put4",
    product_code: "put4",
    specification: "put4",
  };
  // let jsonStr=JSON.stringify(productPostData)
  console.log("get do productUrl product");
  // console.log("get do productUrl product jsonStr");
  // console.log(jsonStr);

  HttpUtil.put(T.product, productPostData).then((res) => {
    console.log("res Peoples create");
    console.log(res);
    // products=res
    // products.value =res
  });
};

const productDelete = () => {
  let productPostData = {
    id: 10,
    create_time: new Date(),
    name: "put4",
    product_code: "put4",
    specification: "put4",
  };
  console.log("productDelete productUrl productDelete");

  HttpUtil.delete(T.product, productPostData).then((res) => {
    console.log("res Peoples create");
    console.log(res);
  });
};

const productSelectPage = () => {
  // let productPostData = {
  //   id: 10,
  //   create_time: new Date(),
  //   name: "put4",
  //   product_code: "put4",
  //   specification: "put4",
  // };
  let productPostData = {
    id: 1,
    create_time: null,
    name: null,
    product_code: null,
    specification: null,
  };
  console.log(" productUrl productSelectPage");

  HttpUtil.selectPage(T.product, productPostData).then((res) => {
    console.log("res Peoples create");
    console.log(res);
  });
};

const productGetList = () => {
  console.log("get do productUrl product");

  HttpUtil.getList(Common.entityName.product).then((res) => {
    console.log("res Peoples");
    console.log(res);
    // products=res
    products.value = res;
  });
};

const publishPromo = (item: any) => {
  console.log("get do");
  axios
    .get(Common.dbSecKillUrl + `item/publishpromo?id=${item.id}`)
    .then((res) => {
      console.log("res");
      console.log(res);
    });
};
const getPromoItem = (item: any) => {
  console.log("get do");
  let url = `item/mysql/get?id=${item.itemId}`;
  // let url=`item/get?id=${item.itemId}`
  axios.get(Common.dbSecKillUrl + url).then((res) => {
    console.log("res");
    console.log(res);
    item.item = res.data.data;
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
    .post(
      Common.dbSecKillUrl + "promo/create",
      {
        id: null,
        promoName: "promoName",
        // startDate: "2022/6/4 11:01",
        itemId: item.id,
        promoItemPrice: 1.0,
        // endDate: "2022/6/4 11:01",
        startDate: null,
        endDate: null,
      },
      Common.configJsonHeader
    )
    .then((res) => {
      console.log("res");
      console.log(res);
      let result = res.data.data;
      alert(result);
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
