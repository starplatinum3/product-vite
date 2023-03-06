// import Vue from 'vue';
// import router from "@vue/cli-service/generator/router/template/src/router";

const ip = 'localhost'
// const port = '8081'
// const port = '82'
const port = '8889'
// baseUrl: "https://localhost:44384/api",
const dbSecKill={
    //  host : 'localhost',
     ip : 'localhost',
     port :'82'
}

const dbBoe={
    //  host : 'localhost',
     ip : 'localhost',
     port :'8443'
}


function makeDbBaseUrl(dbInfo:any){
    // let  axiosUrl = `http://${dbInfo.host}:${dbInfo.port}/`
    let  axiosUrl = `http://${dbInfo.ip}:${dbInfo.port}/`
    return axiosUrl
}

const dbSecKillUrl=  makeDbBaseUrl(dbSecKill)
const dbBoeUrl=  makeDbBaseUrl(dbBoe)
export const axiosUrl = `http://${ip}:${port}/`
// "https://localhost:44384/api"
const productUrl ="https://localhost:44384/api"
console.log("axiosUrl 后端地址");
console.log(axiosUrl);
const code = {
    success: 200,
    // codeSuccess = 200;
    error: 400
}

const routerDic = {
    exchange: '/exchange',
    city: '/city'
}
const configJsonHeader = {
    headers: {
        "Content-Type": "application/json;charset=utf-8", // 头部信息
    },
};
let  entityName ={
    Peoples: "Peoples",
    product:"product"
}

// 使用 Event Bus
const Common = {
    axiosUrl,
    debugMode: true,
    code: code,
    routerDic:routerDic,
    dbSecKillUrl,
    configJsonHeader,
    dbBoeUrl,
    productUrl,
    entityName

}
// Common.debugMode = true
// let routerDic=function () {
//     let exchange ="/exchange"
// }


// Common.code = code
// Common.routerDic = routerDic
export default entityName
// refactoring  preview
// 没有 do refactor

