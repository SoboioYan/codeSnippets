// // JS基础
//  console.log(null == undefined); // true 相等但不全等
//  console.log(0.1 + 0.2 == 0.3); // false  前端存在于丢失精度问题
//  console.log(typeof NaN); // number  NaN typeof 属于数字
//  console.log(typeof Function); // function
//  console.log(typeof Object); // function
//  console.log(typeof {}); // object
//  console.log(Function instanceof Object); // true
//  console.log(Object instanceof Function); // true 相互存在
 

//  let name = 'Jay'
//  let person = {
//     name: 'Wang',
//     pro:{
//         name: 'Michael',
//         getName: function (){
//             console.log(this);
//             return this.name
//         }
//     }
//  }

// console.log(person.pro.getName()); // Michael
// let pepole = person.pro.getName
// console.log(pepole()); // undefined

(function a(){
    console.log(a);
    a=4;
    console.log(a);
})()

function a(){}
a = 4
console.log(a);