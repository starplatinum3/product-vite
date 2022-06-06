<script setup lang="ts">
import { ref } from 'vue'
// msg: string,
defineProps<{
  // msg: string,
  present:any
}>()

// const count = ref(0)
</script>

<template>
<!--  <img :src="item.imgRes" />-->
<!--  <img src="https://cn.bing.com/images/search?view=detailV2&ccid=sHgs61C4&id=39D9CCE36D23A719852A4D0067DD5958052F5664&thid=OIP.sHgs61C4NMo_Mqu_bY7sawHaHE&mediaurl=https%3a%2f%2ftse1-mm.cn.bing.net%2fth%2fid%2fR-C.b0782ceb50b834ca3f32abbf6d8eec6b%3frik%3dZFYvBVhZ3WcATQ%26riu%3dhttp%253a%252f%252fimg.ewebweb.com%252fuploads%252f20190929%252f17%252f1569748436-befihVqzKQ.jpeg%26ehk%3dZzcvVJpaXx%252bdVx4nxyvjkLWxEaHg7pNtat%252bhhZzQbf4%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=1146&expw=1200&q=%e5%88%9d%e9%9f%b3%e5%9b%be%e7%89%87&simid=608014752084722557&FORM=IRPRST&ck=22A3B5A127104AB752E4B61D22710877&selectedIndex=5&ajaxhist=0&ajaxserp=0" />-->
<!--&lt;!&ndash;  https://cn.bing.com/images/search?view=detailV2&ccid=sHgs61C4&id=39D9CCE36D23A719852A4D0067DD5958052F5664&thid=OIP.sHgs61C4NMo_Mqu_bY7sawHaHE&mediaurl=https%3a%2f%2ftse1-mm.cn.bing.net%2fth%2fid%2fR-C.b0782ceb50b834ca3f32abbf6d8eec6b%3frik%3dZFYvBVhZ3WcATQ%26riu%3dhttp%253a%252f%252fimg.ewebweb.com%252fuploads%252f20190929%252f17%252f1569748436-befihVqzKQ.jpeg%26ehk%3dZzcvVJpaXx%252bdVx4nxyvjkLWxEaHg7pNtat%252bhhZzQbf4%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=1146&expw=1200&q=%e5%88%9d%e9%9f%b3%e5%9b%be%e7%89%87&simid=608014752084722557&FORM=IRPRST&ck=22A3B5A127104AB752E4B61D22710877&selectedIndex=5&ajaxhist=0&ajaxserp=0&ndash;&gt;-->
<!--  <span class="describ">item.describ</span>-->
<!--  <span class="price">item.price</span>-->

  <div class="col present">
    <img :src="present.imgRes" />
    <div class="row">
      <span class="describ">present.describ</span>
      <span class="price">present.price</span>
    </div>
  </div>


</template>

<style scoped>
  .present{
    width: 200px;
    height: 200px;
    background-color: #4d46ff;
  }
  .col{
    display: flex;
    flex-direction: column;
  }
  .row{
    display: flex;
   flex-direction: row;
  }
  .describ{
    background-color:#42b983;
  }
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
</style>
