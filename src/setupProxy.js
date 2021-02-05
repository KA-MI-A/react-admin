const {createProxyMiddleware} =require('http-proxy-middleware');


/**
 *
 * 匹配到devapi的时候开始做代理 请求服务器的地址
 * 查找到devapi就会匹配为空
 */
module.exports=function(app){
  app.use(createProxyMiddleware("/devapi",{
    target:"http://admintest.happymmall.com",//配置请求的服务器地址
    changeOrigin:true
  }))
  // app.use(proxy("/manage/api",{
  //   target:"https://admintest:happymall.com:7000",
  //   changeOrigin:true
  // }))
}

