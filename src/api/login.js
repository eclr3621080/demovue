import request from '@/utils/request'

export function login(employeeNo, secret) {
  return request({
    url: '/user/loginuser',
    method: 'post',
    data: {
      employeeNo,
      secret
    }
  })
}

export function getInfo() {
  return request({
    url: '/user/info',
    method: 'post',
  })
}

export function logout() {
  return request({
    url: '/user/loginuser',
    method: 'post'
  })
}

export function fetchList(params) {
  return request({
    url: '/user/listuser',
    method: 'get',
    params: params
  })
}

export function createAdmin(data) {
  return request({
    url: '/user/register',
    method: 'post',
    data: data
  })
}

export function updateAdmin(id, data) {
  return request({
    url: '/user/update/' + id,
    method: 'post',
    data: data
  })
}

export function updateStatus(id, params) {
  return request({
    url: '/user/updateStatus/' + id,
    method: 'post',
    params: params
  })
}

export function deleteAdmin(id) {
  return request({
    url: '/user/delete/' + id,
    method: 'post'
  })
}

export function getRoleByAdmin(id) {
  return request({
    url: '/user/role/' + id,
    method: 'get'
  })
}

export function allocRole(data) {
  return request({
    url: '/user/role/update',
    method: 'post',
    data: data
  })
}
