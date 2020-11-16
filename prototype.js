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

 var name = "global";

function a(){
   var home = "homeover";
  for(let i=0; i<100; i++){
    console.log(i)
  } 
   console.log(i)
}
a();

var list = document.querySelectorAll("li");
for(var i=0; i<list.length; i++){
  list[i].addEventListener("click",function(){
    console.log(i + "번째 리스트입니다");
  });
}