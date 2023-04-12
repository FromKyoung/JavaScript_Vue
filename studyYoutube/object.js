//객체
const superman = {
    name:'clark',
    age:30,
}

//추가
// superman.hairColor = 'black';
// superman['hobby'] = 'football';

//삭제
// delete superman.age;
// console.log(superman)

//객체 함수 사용 예제
// function makeObject(name, age){
//     return{
//         name:name,
//         age:age,
//         hobby:"football"
//     };
// }

// const Mike = makeObject("Mike", 30);
// console.log(Mike);

//프로퍼티와 변수명이 동일할 경우 축약 가능
// function makeObject(name, age){
//     return{
//         name,
//         age,
//         hobby:"football"
//     };
// }

// const Mike = makeObject("Mike", 30);
// console.log(Mike);

//in으로 존재여부 확인(실용적인 예제X)
// console.log("age" in Mike); //->true
// console.log("birthday" in Mike); //->false

//객체 in
// function isAdult(user){
//     if (user.age<20){
//         return false;
//     }
//     return true;
// }

// const Mike = {
//     name:"Mike",
//     age:30
// };

// const Jane = {
//     name:"Jane"
// };

// console.log(isAdult(Mike)) //->true
//console.log(isAdult(Jane))//->true
//age정보가 없는 것도 ture로 반환
//age가 없는 경우 false가  나오도록 수정
// function isAdult(user){
//     if (!('age' in user) || //age가 user안에 없거나
//     user.age<20){ //20살 미만인 경우
//         return false;
//     }
//     return true;
// }

// const Mike = {
//     name:"Mike",
//     age:30
// };

// const Jane = {
//     name:"Jane"
// };

// console.log(isAdult(Jane))//->false


//객체 for...in
const Mike = {
    name:"Mike",
    age:30
};
for(x in Mike){
    //console.log(x)  //->name  age
    console.log(Mike[x])  // Mike['age'] -> Mike  30

}
