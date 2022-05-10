// 1.将new操作单独封装
// 2.遇到new时，就要考虑是否使用工厂模式

class Product {
  constructor(name) {
    this.name = name
  }
  init() {
    console.log(this.name + 'init')
  }
  fun1() {
    console.log('fun1')
  }
}

class Creator {
  create(name) {
    return new Product(name)
  }
}

let creator = new Creator()
let p = creator.create('p1')
p.init()
p.fun1()