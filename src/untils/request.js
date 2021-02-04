import {configData} from "./apiConfig"
import axios from 'axios';
import Qs from 'qs'
const BASE_FORNT="service"

const service=axios.create({
  baseURL:"devapi",
  timeout:5000
})


service.interceptors.request.use(function(config){
  //处理token
  config.url=`${configData.apiUrl}/${BASE_FORNT}/${config.url}`
  for(let key in config.data){
    if(config.data &&config.data._NOCLEAR){
      if(config.data[key] === "" ||config.data[key] === undefined || config.data[key] === null){
        if (config.data._EMPTYITEM && config.data._EMPTYITEM.indexOf(key) !== -1) {

        }else{
          delete config.data[key]
        }
      }
    }
  }

  if (config.data && config.data._DELETEITEM) {
    config.data._DELETEITEM.forEach(item=>{
      delete config.data[item]
    })
    delete config.data._DELETEITEM
  }

  if(config.data && config.data._EMPTYITEM){
    delete config.data._EMPTYITEM
  }

  if(config.data && config.data._NOCLEAR){
    delete config.data._NOCLEAR
  }

  config.data=Qs.stringify(config.data)
  config.headers['Content-Type']='application/x-www-form-urlencoded; charset=UTF-8';
  return config
},function(error){
  return Promise.reject(error)
})

service.interceptors.response.use(function(response){
  return response
},function(error){
  return Promise.reject(error)
})

export default service
