import Cookies from 'js-cookie'

const TokenKey = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxvbmdkdC4xOUBnbWFpbC5jb20iLCJzdWIiOiJsb25nZHQuMTlAZ21haWwuY29tIiwidGVhbSI6IkxEVCIsInN0YXR1cyI6dHJ1ZSwiZXhwIjoxNzI1NDM4OTcwLCJpYXQiOjE3MjI4NDY5NzAsImVtYWlsX3ZlcmlmaWVkIjp0cnVlfQ.WQXSOptu8Sh3jF-0KSJZgb8ajg53VEkhaNURHSRFEv8'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
