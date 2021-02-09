const ossConfig={
  test:{
    region:"oss-cn-zhangjiakou",
  },
  idc:{
    region:"oss-cn-shanghai",
  }
}

const allConfigData={
  idc:{
    ossData:ossConfig.idc,
    apiUrl:"www.baidu.com",
    zhUrl:"www.baidu.com",
    enUrl:"www.baidu.com"
  },
  dev:{
    ossData:ossConfig.idc,
    apiUrl:"www.baidu.com",
    zhUrl:"www.baidu.com",
    enUrl:"www.baidu.com"
  },
  test:{
    ossData:ossConfig.idc,
    apiUrl:"www.baidu.com",
    zhUrl:"www.baidu.com",
    enUrl:"www.baidu.com"
  },
}


export const configData=allConfigData["test"]