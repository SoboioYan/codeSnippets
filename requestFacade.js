/**
 * .env
 * VUE_APP_HOST=http://192.168.1.1
 * REACT_APP_HOST= http://192.168.1.1
 */

// POST 关于文件请求
export const postWithFile = ({ url, data, fileForm }) =>
  new Promise((resolve, reject) => {
    data = data || {}
    let prefix = process.env.VUE_APP_HOST || `${config.protocol}://${config.host}:${config.port}` // 根据情况而定   这里使用的是.env

    url = [prefix, url].join('/')
    const formData = new FormData()
    Object.keys(fileForm).forEach(key => {
      formData.append(key, fileForm[key])
    })
    Object.keys(data).forEach(key => {
      formData.append(key, data[key])
    })
    const client = new XMLHttpRequest()
    client.open('post', url)
    if (localStorage.getItem(storageKeys.TOKEN)) {
      client.setRequestHeader('token', localStorage.getItem(storageKeys.TOKEN))
    }
    client.send(formData)
    client.onreadystatechange = () => {
      if (client.readyState === 4) {
        const handler = handlers.find(handler => handler.code === client.status)
        if (handler) {
          handler.handle(client.responseText, resolve, reject)
        }
      }
    }
  })

  // POST 表单式 请求
export const post = ({ url, data }) =>
  new Promise((resolve, reject) => {
    data = data || {}
    let prefix = process.env.VUE_APP_HOST || `${config.protocol}://${config.host}:${config.port}`
    url = [prefix, url].join('/')
    let client = new XMLHttpRequest()
    client.open('POST', url, true)
    client.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    const token = localStorage.getItem(storageKeys.TOKEN)
    if (token) {
      client.setRequestHeader('token', token)
    }
    client.send(
      Object.keys(data)
        .map(key => `${key}=${data[key]}`)
        .join('&')
    )
    client.onreadystatechange = () => {
      if (client.readyState === 4) {
        const handler = handlers.find(handler => handler.code === client.status)
        if (handler) {
          handler.handle(client.responseText, resolve, reject)
        }
      }
    }
  })

  // POST 传输JSON 请求
export const postJOSN = ({ url, data }) =>
  new Promise((resolve, reject) => {
    data = data || {}
    let prefix = process.env.VUE_APP_HOST || `${config.protocol}://${config.host}:${config.port}`
    url = [prefix, url].join('/')
    let client = new XMLHttpRequest()
    client.open('POST', url, true)
    client.setRequestHeader('Content-type', 'application/json')
    const token = localStorage.getItem(storageKeys.TOKEN)
    if (token) {
      client.setRequestHeader('token', token)
    }
    client.send(JSON.stringify(data))
    client.onreadystatechange = () => {
      if (client.readyState === 4) {
        const handler = handlers.find(handler => handler.code === client.status)
        if (handler) {
          handler.handle(client.responseText, resolve, reject)
        }
      }
    }
  })
