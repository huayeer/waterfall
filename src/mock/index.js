// 将所有的mock文件引入
// // require('@/mock/usermock')
// // require('@/mock/wxmock')

// 在这里可以做一些通用的配置
const Mock = require("mockjs")
// 设置所有ajax请求的超时时间，模拟网络传输耗时
Mock.setup({
  timeout: 0-300
})


const Random = Mock.Random
const ProduceListData = function () {
  let list = [];
  for (let i = 0; i < 100; i++) {
    let listObject = {
      title: Random.csentence(5, 30),
      img_src: Random.dataImage(),
    }
    list.push(listObject)
  }
  return {
    list: list
  }
}
Mock.mock('/api/list', 'get', ProduceListData)
