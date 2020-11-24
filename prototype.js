// var superObj = { superVal: "super" }
// var subObj = { subVal: "sub" }
// subObj.__proto__ = superObj
// console.log("subObj.subVal=>", subObj.subVal)
// console.log("subObj.superVal=>", subObj.superVal)

// var superObj = { superVal: "super" }
// var subObj = Object.create(superObj)
// subObj.subVal = "sub"

// var kim = {
//   name: "kim",
//   first: 10,
//   second: 20,
//   sum: function () {
//     return this.first + this.second
//   }
// var jang = Object.create(kim);
//  {
//       name='lee',
//       first:10, second:10,
//       avg:function(){
//           return(this.first+this.second)/2;
//       }
//   }
//   lee.__proto__=kim;
//   console.log(lee.sum());
//   console.log(lee.avg());

// }

// console.log(kim.sum())

//  var name = "global";

// function a(){
//    var home = "homeover";
//   for(let i=0; i<100; i++){
//     console.log(i)
//   } 
//    console.log(i)
// }
// a();

// var list = document.querySelectorAll("li");
// for(var i=0; i<list.length; i++){
//   list[i].addEventListener("click",function(){
//     console.log(i + "번째 리스트입니다");
//   });
// }


// function home() {
//   const homename = [1,2,3,3];
//    homename =["1"]
// //   homename = "your house";
//   console.log(homename);
  
// }

//home();
//const를 기본으로 사용한다
//그런데 변경이 될 수 있는 변수는 let을 사용한다.

function home() {
    const list = ["apple", "orange", "watermelon"];
    list.push("banana");
    console.log(list);
  }
  //immutable array를 어떻게 만들지?
  const list = ["apple", "orange", "watermelon"];
  list2 = [].concat(list, "banana");
  console.log(list === list2);
  
  //const 는 재할당은안되지만 오브젝트나 배열을 추가하거나 삭제할수있다
  //지금까지 배웠던 let과 const 의미와 그 외에것 복습하기
  //내일부터 다시 시작
  //이력서준비