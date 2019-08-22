import axios from 'axios'

export default function (params) {
  let baseURL = 'https://challenge.thef2e.com/api/thef2e2019/stage6'

  const { method, path, data, auth } = params

  let headers = {
    'Accept': 'application/json'
  }

  const tempToken = 'TnFpFQmSUwqqjfMMDC7QM8Hm5EmyjJnVWHCV76xVZcEPlHpOZWGECuISDKVM'
  if (auth) {
    headers['Authorization'] = `Bearer ${tempToken}`
  }

  return axios({
    method: method || 'get',
    url: baseURL + path,
    headers,
    data
  })
}
