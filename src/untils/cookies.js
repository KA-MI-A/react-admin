import cookies from 'react-cookies'

//存储token
export function setToken(value){
  cookies.save('adminToken',value)
}

export function getToken(){
  return cookies.load('adminToken')
}

//存储用户名
export function setUsername(value){
  cookies.save('adminname',value)
}

export function getUsername(){
  return cookies.load('adminname')
}