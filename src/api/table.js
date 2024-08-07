import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}

export function getOrders(params) {
  return request({
    url: 'https://v3.fsggroup.io/v3/orders/',
    method: 'get',
    params,
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxvbmdkdC4xOUBnbWFpbC5jb20iLCJzdWIiOiJsb25nZHQuMTlAZ21haWwuY29tIiwidGVhbSI6IkxEVCIsInN0YXR1cyI6dHJ1ZSwiZXhwIjoxNzI1NDM4OTcwLCJpYXQiOjE3MjI4NDY5NzAsImVtYWlsX3ZlcmlmaWVkIjp0cnVlfQ.WQXSOptu8Sh3jF-0KSJZgb8ajg53VEkhaNURHSRFEv8'
    }
  })
}

export function getProducts(params) {
  return request({
    url: 'https://v3.fsggroup.io/v3/products/',
    method: 'get',
    params,
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxvbmdkdC4xOUBnbWFpbC5jb20iLCJzdWIiOiJsb25nZHQuMTlAZ21haWwuY29tIiwidGVhbSI6IkxEVCIsInN0YXR1cyI6dHJ1ZSwiZXhwIjoxNzI1NDM4OTcwLCJpYXQiOjE3MjI4NDY5NzAsImVtYWlsX3ZlcmlmaWVkIjp0cnVlfQ.WQXSOptu8Sh3jF-0KSJZgb8ajg53VEkhaNURHSRFEv8'
    }
  })
}
