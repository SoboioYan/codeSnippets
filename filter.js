/**
 * 记录下来的一些常用到得过滤函数
 */

// 时间戳转换（基础） 转化后格式为  yyyy-mm-dd hh:mm:ss
const cutTime = time => {
  if (!time) return ''
  let date = new Date(time)
  let y = date.getFullYear()
  let MM = date.getMonth() + 1
  MM = MM < 10 ? '0' + MM : MM
  let d = date.getDate()
  d = d < 10 ? '0' + d : d
  let h = date.getHours()
  h = h < 10 ? '0' + h : h
  let m = date.getMinutes()
  m = m < 10 ? '0' + m : m
  let s = date.getSeconds()
  return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s
}

// 金额转换（根据正则表达式）转化后格式为  300,000.00
const sumfiler = amount => {
  if (!amount) return '0.00'
  var intPart = String(amount)
  var intPartFormat = intPart.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
  var floatPart = '.00'
  var value2Array = intPart.split('.')
  if (value2Array.length === 2) {
    floatPart = value2Array[1].toString() //拿到小数部分
    var numPart = value2Array[0].toString() //拿到整数部分
    numPart = numPart.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
    if (floatPart.length === 1) {
      return numPart + '.' + floatPart + '0' //补0
    } else if (floatPart.length > 2) {
      return numPart + '.' + floatPart.slice(0, 2) //一旦超过2位  截取至2位
    } else {
      return numPart + '.' + floatPart
    }
  } else {
    return intPartFormat + floatPart
  }
}

// 数据省略 （超过多少字后以省略号代替） 转化后格式为  weqweqwe...
const tailorStr = (str, number = 8) => {
  //number为到第几个之后为...
  const str2 = String(str).replace(/↵/g, '')
  return str2.slice(0, number) + '...'
}
