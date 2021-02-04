import service from "../utils/request";

/*
登录接口
 */
export function login(data){
  return service.request({
    method:"post",
    data,
    url:""
  })
}

//获取验证码
export function getCode(data){
  return service.request({
    method:"post",
    data,
    url:""
  })
}