
//   D:\proj\vue\vite-project\src\util\HttpUtil.ts
// class HttpUtil ts export

import Common from "./Common";

    //get请求封装
    const fetchGet = function(url="", params:any) {
        let list = [];
        for (let key in params) {
            let str = `${key}=${params[key]}`
            list.push(str);
        }
        const data = list.join('&');
        let allUrl = `${url}?${data}`;
        // debugger
        return fetch(allUrl).then(res => {
            return res.json();
        }).catch(err => {
            console.log(err);
        });
    };
class HttpUtil {
    static fetchGet=fetchGet
    static getList(entityName:string, params:any={}) {
      return  HttpUtil.fetchGet(Common.productUrl+ "/"+entityName,params)
        // .then((res) => {
        //     console.log("res Peoples");
        //     console.log(res);
        //   });
        
    }

    static create(entityName:string, params:any={}) {
        return  HttpUtil.postData(Common.productUrl+ "/"+entityName,params)
      }
      static delete(entityName:string, params:any={}) {
        return  HttpUtil.postData(
            `${Common.productUrl}/${entityName}/delete`,params)
      }
      static put(entityName:string, params:any={}) {
        return  HttpUtil.postData(
            `${Common.productUrl}/${entityName}/put`,params)
      }
      static selectPage(entityName:string, params:any={}) {
        return  HttpUtil.postData(
            `${Common.productUrl}/${entityName}/selectPage`,params)
      }
    //   [Route("api/product/delete")]
    // function
    // Example POST method implementation:
    static async postData(url = "", data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }


    //   export 
    static get(url: string, params: any) {
        if (params) {
            let paramsArray: Array<string> = [];
            //拼接参数  
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        //fetch请求  
        return fetch(url, {
            method: 'GET',
        })
        // .then((response) => {}).catch((error) => {  
        //     alert(error)  
        // })  
    }
}
//   postData("https://example.com/answer", { answer: 42 }).then((data) => {
//     console.log(data); // JSON data parsed by `data.json()` call
//   });

export default HttpUtil