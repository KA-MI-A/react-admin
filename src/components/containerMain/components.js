/**
 * 自动化工程 自动引入页面
 */
//第一个参数目录路径
//第二个参数true或者false 是否自动查找子级目录
    //第三个参数查找指定的文件
//声明组件对象
const components=[]
//建立上下文关系
const files=require.context("../../views",true,/\.js$/);
console.log(files)
files.keys().map(key => {
  if (key.includes('./index/') ||key.includes('./login/') ){
    return false
  }
  const splitFilesName =key.split('.')
  const jsonObj={}
  //拿到路径
  const path = `/index${splitFilesName[1].toLowerCase()}`
  const component = files(key).default
  jsonObj.path=path
  jsonObj.component=component
  components.push(jsonObj)
})

export default components