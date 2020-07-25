class Person {
  constructor(name, first, second) {
    this.name = name
    this.first = first
    this.second = second
  }
  sum() {
    return this.first + this.second
  }
  // avg() {
  //   return (this.first + this.second) / 2
  // }
}
class PersonPlus extends Person {
  constructor(name, first, second, third) {
    super(name, first, second)
    this.third = third
  }
  sum() {
    return super.sum() + this.third
  }
  avg() {
    return (this.first + this.second + this.third) / 3
  }
}
//new 객체를 생성할때 클래스에서 constructor함수를생성해줘야한다

var jang = new PersonPlus("jang", 10, 20, 30)
console.log("jang.avg()", jang.avg())
console.log("jang.sum()", jang.sum())

// jang.sum = function () {
//   return "this : " + (this.first + this.second)
// }
// var kim = new Person("kim", 10, 10, 10)
// console.log(jang.name, jang.sum())
// console.log(kim.name, kim.sum())
