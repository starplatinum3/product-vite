<template>
  <!-- <img src="./assets/logo.png"> -->
  <div>
    <!-- <p>
      If Element Plus is successfully added to this project, you'll see an
      <code v-text="'<el-button>'"></code>
      below
    </p> -->
    <el-button type="primary">el-button</el-button>
    <el-button type="" @click="ProductListGo">ProductListGo</el-button>
  </div>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import router from './router'
// import { useRouter } from 'vue-router'
// const router = useRouter()
// router = useRouter() undefined
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods:{
    ProductListGo(){
      router.push('/ProductList')
      // const router = useRouter()
      // router.push('/ProductList')
      // vue3 router push
      // console.log("getDo")
    }
  }
}
</script>

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
