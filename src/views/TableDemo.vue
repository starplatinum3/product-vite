<template>
    <h1>这里是Demo！</h1>
    <el-row>
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
        <el-button @click='showinfo'>更新infos</el-button>
      </el-row>
      <p>{{info}}</p>
      <p>{{infos}}</p>
       <el-table :data="infos" border style="width: 100%">
          <el-table-column prop="id" label="Date" width="180" />
          <el-table-column prop="name" label="Name" />
        </el-table>
</template>

<script>
  export default{
      name: "demo",
      data() {
          return {
              infos: [{id: 1,name: 'phyger'}],
              info: "hello vue...",
          }
      },
      methods: {
          showinfo(){
              this.$axios.get('/test/info')
              .then(response=>{
                  this.infos = response.data;
                  console.log(response.data);
              })
              .catch(error=>{
                  console.log(error);
              });
          },
      },
  }
</script>

<style>
</style>