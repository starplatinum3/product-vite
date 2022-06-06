
<template>

<!--    <van-list-->
<!--            v-model="loading"-->
<!--            :finished="finished"-->
<!--            finished-text="没有更多了"-->
<!--            @load="onLoad"-->
<!--    >-->
<!--        <van-cell v-for="item in list" :key="item" :title="item" />-->
<!--&lt;!&ndash;        <van-cell>1</van-cell>&ndash;&gt;-->
<!--    </van-list>-->
<!--    <div v-for="item in tableData">-->
<!--        {{item}}-->
<!--    </div>-->

    <div v-for="item in tableData">
        id
        {{item.id}}
        prez_name
        {{item.prezName}}
        describ
        {{item.describ}}
        price
        {{item.price}}
        img_res
        {{item.imgRes}}
        need_point
        {{item.needPoint}}
<!--        <img @src>-->
        <img class="img" :src="item.imgRes" />
        <span class="describ">{{item.describ}}</span>
        <span class="price">{{item.price}}</span>

        <PresentItem present="item"></PresentItem>
    </div>
<!--    <span class="describ">item.describ</span>-->
<!--    <span class="price">item.price</span>-->


</template>
<!--lang="ts"-->
<script >

    import axios from "axios";
    import Common from "../util/Common";
    // PresentItem.vue
    // import PresentItem from "@/components/PresentItem.vue";
    // import PresentItem from "@/components/PresentItem";
    import PresentItem from "../components/PresentItem.vue";
    // PresentItem.
    export default {
        data() {
            return {
                list: [],
                loading: false,
                finished: false,
                tableData:[]
            };
        },
        components:{
            PresentItem
        },
        created(){
            this.onLoad();
        },
        methods: {
            onLoad() {
                console.log("onLoad")
                // axios
                const data = {

                };
                const jsonDic = {
                    headers: {
                        "Content-Type": "application/json;charset=utf-8", // 头部信息
                    },
                };
                // Common.axiosUrl
                // Comment.asx
                // Common.code.error
                // /present/list?pageNumber=0&pageSize=10
                axios
                    .post(Common.axiosUrl + `present/list?pageNumber=0&pageSize=10`, data, jsonDic)
                    .then((response) => {
                        if (response.data.port === Common.code.error) {
                            // this.$message.error('账号或者密码有误');
                            // ElMessage.success("账号或者密码有误");
                            alert("账号或者密码有误")
                        } else {
                            // this.issues=response.data.data;
                            // this.tableData = response.data.data;
                            this.tableData = response.data.data||response.data.content;
                            console.log("response")
                            console.log(response)
                            console.log("response.data.data")
                            console.log(response.data.data)
                            // console.log("this.issues")
                            // console.log(this.issues)

                            console.log("this.tableData");
                            console.log(this.tableData);
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                // 异步更新数据
                // setTimeout 仅做示例，真实场景中一般为 ajax 请求
                // setTimeout(() => {
                //     console.log("load data")
                //     for (let i = 0; i < 10; i++) {
                //         this.list.push(this.list.length + 1);
                //     }
                //     // https://www.w3cschool.cn/vantlesson/vantlesson-mps735w2.html
                //     // 加载状态结束
                //     this.loading = false;
                //
                //     // 数据全部加载完成
                //     if (this.list.length >= 40) {
                //         this.finished = true;
                //     }
                //     console.log("list")
                //     // console.log(list)
                //     console.log(this.list)
                // }, 1000);
            }
        }
    }

    // 发布商品的请求 URL 是：http://82.156.200.100:82/item/publishpromo?id=1（最后的 id 根据你在链接上看到的自己来就行）
</script>



<style scoped>
    .img{
        width: 200px;
        height: 200px;
    }
    .describ{
        background: #42b983;
        width: 20px;
        height: 20px;
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
    .box{
        background: #4d46ff;
    }
</style>
