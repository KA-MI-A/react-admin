import service from '../../src/utils/request'

export function DepartmentAddd(data){
  return service.request({
    method:'post',
    data,
    url:'/department/add/'
  })
}