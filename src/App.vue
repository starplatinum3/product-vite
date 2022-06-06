<script setup lang="ts">
    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
    import HelloWorld from './components/HelloWorld.vue'


    import {useRouter} from "vue-router";
    // const router = useRouter();
    //  import router from "@/router/index.ts";
    // router.push("/");

    //  undefined useRouter();

    // 跳路由
    // import router from "@/router/index"
    // import router from "../router/index"
    import router from "./router";
    // 获取路由参数
    import {useRoute} from 'vue-router'

    const route = useRoute()


    // const routerpath = () => {
    // router.push('/Find')
    // console.log(route.query.id);
    // console.log(route.params.id);
    // ————————————————
    // 版权声明：本文为CSDN博主「天气晚来秋~」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
    // 原文链接：https://blog.csdn.net/TianQiWanLaiQiu/article/details/120039272
    //
    console.log("router");
    console.log(router);
    const toGithub = async () => {
        await router.push("Github")

    };
    const toWelcome = async () => {
        await router.push("Welcome")

    };
    const toNoteBook = async () => {
        await router.push("NoteBook")

    };
    const toZhihu = async () => {
        await router.push("zhihu")

    };
    const toPerson = async () => {
      await router.push("Person")

    };

    // const toPublishPromo = async () => {
    //     // await router.push("Promo")
    //   router.push("Promo")
    //
    // };

    const toPublishPromo =  () => {
      // await router.push("Promo")
      router.push("Promo")

    };
    const toVanListTest =  () => {
        router.push("VanListTest")
    };
    // 怎么去
    const toSecKill =  () => {
        router.push("SecKill")
    };
        const toItemManager =  () => {
        router.push("ItemManager")
    };


// Promo
    // 添加商品
    // 发布商品的请求 URL 是：http://82.156.200.100:82/item/publishpromo?id=1（最后的 id 根据你在链接上看到的自己来就行）


</script>

<template>
<!--    <img alt="Vue logo" src="./assets/logo.png"/>-->
<!--    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite"/>-->
    <router-view></router-view>
    <div @click="toGithub">toGithub</div>
    <div @click="toWelcome">toWelcome</div>
    <!-- <div @click="toPublishPromo">toPublishPromo</div> -->
        <button @click="toPublishPromo">toPublishPromo</button>
    <div @click="toPerson">toPerson</div>
    <div @click="toVanListTest">toVanListTest</div>
    <div @click="toSecKill">toSecKill</div>
      <button @click="toItemManager">toItemManager</button>
        <!-- <div @click="Promo">Promo</div> -->


</template>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
