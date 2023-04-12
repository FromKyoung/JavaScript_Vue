//함수 표현식
//showError();

//let showError = function(){
//    console.log('error');
//}

//함수 선언식
//showError();

// function showError(){
//     console.log("error");
// }

//화살표 함수
// let showError = () => {
//     console.log("error");
// }

//예제1
//함수 선언식
// const sayHello = function (name)
//  {
//     const msg = `Hello, ${name}`;
//     console.log(msg);
//  };
//화살표 함수
// const sayHello = (name) => {
//     const msg = `Hello, ${name}`;
//     console.log(msg);
//  };

//예제2
//함수선언식
// const add = function (num1,num2){
//     const result = num1+ num2;
//     return result;
// };
//화살표 함수
// const add = (num1,num2) => {
//     const result = num1+ num2;
//     return result;
// };
//리턴문 하나로 만들기
// const add = (num1,num2) => {
//         return num1+ num2;
// };
//더 간결하게
const add = (num1,num2) => num1+ num2;
