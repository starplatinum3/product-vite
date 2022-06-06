
<template>

    <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
    >
        <van-cell v-for="item in list" :key="item" :title="item" />
<!--        <van-cell>1</van-cell>-->
    </van-list>
</template>
<!--lang="ts"-->
<script >
    export default {
        data() {
            return {
                list: [],
                loading: false,
                finished: false
            };
        },
        methods: {
            onLoad() {
                // 异步更新数据
                // setTimeout 仅做示例，真实场景中一般为 ajax 请求
                setTimeout(() => {
                    console.log("load data")
                    for (let i = 0; i < 10; i++) {
                        this.list.push(this.list.length + 1);
                    }
                    // https://www.w3cschool.cn/vantlesson/vantlesson-mps735w2.html
                    // 加载状态结束
                    this.loading = false;

                    // 数据全部加载完成
                    if (this.list.length >= 40) {
                        this.finished = true;
                    }
                    console.log("list")
                    // console.log(list)
                    console.log(this.list)
                }, 1000);
            }
        }
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
