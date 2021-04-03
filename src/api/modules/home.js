import {request} from "../request";

export function getHomeMultidata() {
   return request({
     url:'/home/'
   })
}

export  function getHomeData(type,page) {
   return request({
     url:'/home/',
     params:{
       type,
       page
     }
   })

}