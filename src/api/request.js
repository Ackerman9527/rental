import axios from 'axios'

export function request(config) {
  const instance = new axios.create({
    // baseURL:'',
    baseURL:'https://httpbin.org/'+config.url,
    timeout:10000
  });

  // 请求拦截器
  instance.interceptors.request.use(config => {
    //拦截后需要将拦截下来的请求数据返回发送
    return config;
  }, 
  err => {
    // do something with request error
    return Promise.reject(err)
  }
  )

  // 相应拦截器
  instance.interceptors.response.use(res => {
    // 拦截后需要将拦截下来处理成的结果返回
    return res.data
  }, err => {
    console.log(err)
  })

  return instance(config)
}