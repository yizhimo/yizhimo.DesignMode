// 为对象添加新功能
// 不改变其原有的结构和功能
class Circle {
  draw() {
    console.log('画了一个圆形')
  }
}

class Decorator {
  constructor(circle) {
    this.circle = circle
  }
  draw() {
    this.circle.draw()
    this.setRedBorder(this.circle)
  }
  setRedBorder(circle) {
    console.log('设置红色边框')
  }
}

let circle = new Circle()
circle.draw()

let dec = new Decorator(circle)
dec.draw()

// ES7装饰器
