<template>
  <div class="app-container">
    <el-form
      :model="queryParams"
      ref="queryRef"
      :inline="true"
      v-show="showSearch"
    >
      <el-form-item label="name" prop="name">
        <el-input
          v-model="queryParams.name"
          placeholder="请输入name"
          clearable
          style="width: 200px"
          @keyup.enter="handleQuery"
        /> </el-form-item
      ><el-form-item label="specification" prop="specification">
        <el-input
          v-model="queryParams.specification"
          placeholder="请输入specification"
          clearable
          style="width: 200px"
          @keyup.enter="handleQuery"
        /> </el-form-item
      ><el-form-item label="productCode" prop="productCode">
        <el-input
          v-model="queryParams.productCode"
          placeholder="请输入productCode"
          clearable
          style="width: 200px"
          @keyup.enter="handleQuery"
        /> </el-form-item
      ><el-form-item label="createTime" prop="createTime">
        <el-input
          v-model="queryParams.createTime"
          placeholder="请输入createTime"
          clearable
          style="width: 200px"
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="Search" @click="handleQuery"
          >搜索</el-button
        >
        <el-button icon="Refresh" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- v-hasPermi="['system:post:add']" -->
    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="Plus"
          @click="handleAdd"
       
          >新增</el-button
        >
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="Edit"
          :disabled="single"
          @click="handleUpdate"
        
          >修改</el-button
        >
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="Delete"
          :disabled="multiple"
          @click="handleDelete"
          >删除</el-button
        >
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="Download"
          @click="handleExport"
          >导出</el-button
        >
      </el-col>
      <right-toolbar
        v-model:showSearch="showSearch"
        @queryTable="getList"
      ></right-toolbar>
    </el-row>

    <el-table
      v-loading="loading"
      :data="postList"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column
        label="name"
        align="center"
        prop="name"
      /><el-table-column
        label="specification"
        align="center"
        prop="specification"
      /><el-table-column
        label="productCode"
        align="center"
        prop="productCode"
      /><el-table-column label="createTime" align="center" prop="createTime" />

      <el-table-column
        label="操作"
        width="180"
        align="center"
        class-name="small-padding fixed-width"
      >
        <template #default="scope">
          <el-button
            link
            type="primary"
            icon="Edit"
            @click="handleUpdate(scope.row)"
            >修改</el-button
          >
          <el-button
            link
            type="primary"
            icon="Delete"
            @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total > 0"
      :total="total"
      v-model:page="queryParams.pageNum"
      v-model:limit="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改岗位对话框 -->
    <el-dialog :title="title" v-model="open" width="500px" append-to-body>
      <el-form ref="postRef" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="岗位名称" prop="postName">
          <el-input v-model="form.postName" placeholder="请输入岗位名称" />
        </el-form-item>
        <el-form-item label="岗位编码" prop="postCode">
          <el-input v-model="form.postCode" placeholder="请输入编码名称" />
        </el-form-item>
        <el-form-item label="岗位顺序" prop="postSort">
          <el-input-number
            v-model="form.postSort"
            controls-position="right"
            :min="0"
          />
        </el-form-item>
        <el-form-item label="岗位状态" prop="status">
          <el-radio-group v-model="form.status">
            <el-radio
              v-for="dict in sys_normal_disable"
              :key="dict.value"
              :label="dict.value"
              >{{ dict.label }}</el-radio
            >
          </el-radio-group>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input
            v-model="form.remark"
            type="textarea"
            placeholder="请输入内容"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="submitForm">确 定</el-button>
          <el-button @click="cancel">取 消</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
 
 <script setup name="Post">
// import {
//   listPost,
//   addPost,
//   delPost,
//   getPost,
//   updatePost,
// } from "@/api/system/post";
// import { ComponentInternalInstance, getCurrentInstance } from 'vue';
// import {  getCurrentInstance } from 'vue';
import { ref, getCurrentInstance,reactive ,toRefs  } from 'vue';
import Common from '../util/Common';
import HttpUtil from '../util/HttpUtil';
import T from '../util/T';

// 添加断言
// const { proxy } = getCurrentInstance() as ComponentInternalInstance


const { proxy } = getCurrentInstance();
// const { sys_normal_disable } = proxy.useDict("sys_normal_disable");

const postList = ref([]);
const open = ref(false);
const loading = ref(true);
const showSearch = ref(true);
const ids = ref([]);
const single = ref(true);
const multiple = ref(true);
const total = ref(0);
const title = ref("");

const data = reactive({
  form: {},
  queryParams: {
    pageNum: 1,
    pageSize: 10,
    postCode: undefined,
    postName: undefined,
    status: undefined,
    "name":null ,
         "id":null ,
         "specification":null ,
         "productCode":null ,
         "createTime":null 
  },
  rules: {
    postName: [
      { required: true, message: "岗位名称不能为空", trigger: "blur" },
    ],
    postCode: [
      { required: true, message: "岗位编码不能为空", trigger: "blur" },
    ],
    postSort: [
      { required: true, message: "岗位顺序不能为空", trigger: "blur" },
    ],
  },
});

const { queryParams, form, rules } = toRefs(data);

/** 查询岗位列表 */
function getList() {
  loading.value = true;

  for(let o in queryParams.value){
  let  val=  queryParams.value[o] 
  console.log("key ");

  console.log(o);
  console.log(val);
    if(val==""){
      queryParams.value[o] =null
    }
  }
  console.log("queryParams.value");
  console.log(queryParams.value);


  HttpUtil.selectPage(T.product,queryParams.value)
  // HttpUtil.getList(T.product,queryParams.value)
//   HttpUtil.getList("system/post/list",queryParams.value)
  .then((response) => {
    console.log("response il.getList(T.produc");
    console.log(response);
    postList.value = response||response.rows;
    // postList.value = response.rows;
    total.value = response.total;
    loading.value = false;
  });
//   listPost(queryParams.value).then((response) => {
//     postList.value = response.rows;
//     total.value = response.total;
//     loading.value = false;
//   });
}
/** 取消按钮 */
function cancel() {
  open.value = false;
  reset();
}
/** 表单重置 */
function reset() {
  form.value = {
    postId: undefined,
    postCode: undefined,
    postName: undefined,
    postSort: 0,
    status: "0",
    remark: undefined,
  };
  proxy.resetForm("postRef");
}
/** 搜索按钮操作 */
function handleQuery() {
  queryParams.value.pageNum = 1;
  getList();
}
/** 重置按钮操作 */
function resetQuery() {
  proxy.resetForm("queryRef");
  handleQuery();
}
/** 多选框选中数据 */
function handleSelectionChange(selection) {
  ids.value = selection.map((item) => item.postId);
  single.value = selection.length != 1;
  multiple.value = !selection.length;
}
/** 新增按钮操作 */
function handleAdd() {
  reset();
  open.value = true;
  title.value = "添加岗位";
}
/** 修改按钮操作 */
function handleUpdate(row) {
  reset();
  const postId = row.postId || ids.value;
//   Htt
//   getPost(postId).then((response) => {
//     form.value = response.data;
//     open.value = true;
//     title.value = "修改岗位";
//   });
}
/** 提交按钮 */
function submitForm() {
  proxy.$refs["postRef"].validate((valid) => {
    if (valid) {
      if (form.value.postId != undefined) {
        // updatePost(form.value).then((response) => {
        //   proxy.$modal.msgSuccess("修改成功");
        //   open.value = false;
        //   getList();
        // });
      } else {
        // addPost(form.value).then((response) => {
        //   proxy.$modal.msgSuccess("新增成功");
        //   open.value = false;
        //   getList();
        // });
      }
    }
  });
}
/** 删除按钮操作 */
function handleDelete(row) {
  const postIds = row.postId || ids.value;
  proxy.$modal
    .confirm('是否确认删除岗位编号为"' + postIds + '"的数据项？')
    .then(function () {
        return null;
    //   return delPost(postIds);
    })
    .then(() => {
      getList();
      proxy.$modal.msgSuccess("删除成功");
    })
    .catch(() => {});
}
/** 导出按钮操作 */
function handleExport() {
  proxy.download(
    "system/post/export",
    {
      ...queryParams.value,
    },
    `post_${new Date().getTime()}.xlsx`
  );
}

getList();
</script>
 