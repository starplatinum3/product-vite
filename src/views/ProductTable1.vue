<template>
    <div>
       1


    </div>
</template>

<script>

    import axios from "axios";
    // import Common from '../util/Common';
    // import DateUtil from "../util/DateUtil";

    // import Common from '../../util/Common';
    // import DateUtil from "../../util/DateUtil";
    // import Common from '@/utils/Common';
    // import DateUtil from "@/utils/DateUtil";
    // import Common from '../../utils/Common';
    // import DateUtil from "../../utils/DateUtil"
export default {
    name: 'company',
    data() {
        return {
            selectedRow:{

            },


            query: {  
         "createTime":null ,
         "id":null ,
         "name":null ,
         "productCode":null ,
         "specification":null 
                  },
            // pageIndex: 0,
            pageIndex: 1,
            pageSize: 10,
            pageNumber:1,
            tableData: [],
            multipleSelection: [],
            delList: [],
            editVisible: false,
            editVisible2: false,
            pageTotal: 0,
            radio:false,
            form: {
            },
        showVisible:false,
            idx: -1,
            id: -1,
            editAss: false,
            query2: {  
         "createTime":null ,
         "id":null ,
         "name":null ,
         "productCode":null ,
         "specification":null 
                  },
            pageTotal2: 0,
            tableData2: [],
            radio2:false,
            companyoptions:[],
            company: '',
            selectedRows:[],
        };
    },
    created() {
      

    },
    methods: {}
};
</script>

<style scoped>
.handle-box {
    margin-bottom: 20px;
}

.handle-select {
    width: 120px;
}

.handle-input {
    width: 200px;
    display: inline-block;
}
.table {
    width: 100%;
    font-size: 14px;
}
.red {
    color: #ff0000;
}
.green {
    color: green;
}
.mr10 {
    margin-right: 10px;
}
.table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
}
</style>
