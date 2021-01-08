/*
 * @Author: shilei
 * @Date: 2021-01-08 10:13:43
 * @LastEditors: shilei
 * @LastEditTime: 2021-01-08 15:44:16
 * @Description: 这是一个什么文件...
 * @FilePath: /react04/src/utils/request.js
 */
import axios from 'axios'
import { cloneDeep } from 'lodash'
import { message } from 'antd'
import { CANCEL_REQUEST_MESSAGE } from './constant'

const { parse, compile } = require("path-to-regexp")
const { CancelToken } = axios
window.cancelRequest = new Map()

export default function request(options) {
  let { data, url, method = 'get' } = options
  const cloneData = cloneDeep(data)

  try {
    let domain = ''
    const urlMatch = url.match(/[a-zA-z]+:\/\/[^/]*/)
    if (urlMatch) {
      ;[domain] = urlMatch
      url = url.slice(domain.length)
    }

    const match = parse(url)
    url = compile(url)(data)

    for (const item of match) {
      if (item instanceof Object && item.name in cloneData) {
        delete cloneData[item.name]
      }
    }
    url = domain + url
  } catch (e) {
    message.error(e.message)
  }

  options.method = method
  options.url = url
  options.params = cloneData
  options.baseURL = process.env.NODE_ENV === 'development' ? '' : process.env.REACT_APP_API_URL
  options.cancelToken = new CancelToken(cancel => {
    window.cancelRequest.set(Symbol(Date.now()), {
      pathname: window.location.pathname,
      cancel,
    })
  })
  
  return axios(options)
    .then(response => {
      const { statusText, status, data } = response

      let result = {}
      if (typeof data === 'object') {
        result = data
        if (Array.isArray(data)) {
          result.list = data
        }
      } else {
        result.data = data
      }

      return Promise.resolve({
        success: true,
        message: statusText,
        statusCode: status,
        ...result,
      })
    })
    .catch(error => {
      const { response, message } = error

      if (String(message) === CANCEL_REQUEST_MESSAGE) {
        return {
          success: false,
        }
      }

      let msg
      let statusCode

      if (response && response instanceof Object) {
        const { data, statusText } = response
        statusCode = response.status
        msg = data.message || statusText
      } else {
        statusCode = 600
        msg = error.message || 'Network Error'
      }

      return Promise.reject({
        success: false,
        statusCode,
        message: msg,
      })
    })
}
