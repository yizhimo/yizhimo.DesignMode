// 系统中被唯一使用
// 一个类只能有一个实例

class SingleObject {
  login() {
    console.log('login~')
  }
}
SingleObject.getInstance = (function() {
  let instance
  return function() {
    if(!instance) {
      instance = new SingleObject()
    }

    return instance
  }
})()

let obj1 = SingleObject.getInstance()
obj1.login()
let obj2 = SingleObject.getInstance()
obj2.login()

console.log('obj1必须和obj2强相等才是单例模式', obj1 === obj2)  // true
// jq的$ vuex和redux中的store
