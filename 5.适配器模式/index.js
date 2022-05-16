// 旧接口和使用者不兼容
// 中间加一个适配转换接口
class Adaptee {
  specificRequest() {
    return '德国插头'
  }
}

class Target {
  constructor() {
    this.adaptee = new Adaptee()
  }
  request() {
    const info = this.adaptee.specificRequest()
    return `${info}-转换-中国插头`
  }
}

const target = new Target()
const res = target.request()
console.log(res)
// 旧接口封装  vue的computed
