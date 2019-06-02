// 解析上传的execl表格
const readExcel = e => {
  return new Promise((resolve, reject) => {
    const files = e.target.files
    if (files.length <= 0) {
      // 如果没有文件名
      return false
    } else if (!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())) {
      this.$message('上传格式不正确，请上传xls或者xlsx格式')
      return false
    }
    const fileReader = new FileReader()
    fileReader.onload = ev => {
      try {
        const data = ev.target.result
        const workbook = XLSX.read(data, {
          type: 'binary'
        })
        const wsname = workbook.SheetNames[0] // 取第一张表
        const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]) // 生成json表格内容
        resolve(ws)
      } catch (error) {
        reject(error)
      }
    }
    fileReader.readAsBinaryString(files[0])
  })
}
// 配合使用

var filesData = []
this.$refs.upload.addEventListener('change', async e => {
  const files = await excel.readExcel(e)
  for (var i = 0; i < files.length; i++) {
    var sheetData = {
      fileItem: files[i].表头 //execl表的第一行表头
    }
    filesData = filesData.push(sheetData) //获取到
  }
  let newfilesData = filesData.map(v => {
    return v.fileItem
  })
  newfilesData = new Set(newfilesData)
  if (JSON.stringify(filesData).slice(1, 3) === '{}') {
    // 该判断不够健壮
    return '导入文件有误,请检查文件重新导入'
  } else if (newfilesData.size !== filesData.length) {
    return '导入文件有误,请检查文件重新导入'
  } else {
    return '导入文件成功'
  }
})

// 代码还是有些不够健壮，不如检查出其他东西 只能一味得拿到所属表头得数据
