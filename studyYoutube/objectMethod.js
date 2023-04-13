//화살표 함수는 일반 함수와는 달리 자신만의 this를 가지지 않음
//화살표 함수 내부에서 this를 사용하면, 그 this는 외부에서 값을 가져옴 => 여기서 this는 전역객체(브라우저환경:window/Node js:global)

//method
// let boy = {
//     name:"Mike",
//     showName:function(){
//         console.log(boy.name)
//     }
// };

//boy.showName(); //->Mike

//let man = boy;
//man.name = "Tom"
//console.log(boy.name)  //->Tom

//let man = boy;
//man.showName();//->Mike

//let man = boy;
//boy = null;
//man.showName(); //->오류

//boy.name을 this.name으로 수정
//method의 this는 해당 객체를 가리키기 때문 
// let boy = {
//     name:"Mike",
//     showName:function(){
//         console.log(this.name)
//     }
// };
 
// let man = boy;
// boy = null;
// man.showName(); //->Mike


//화살표함수
// let boy = {
//     name:"Mike",
//     sayThis: function(){
//         console.log(this) //여기서 this는 객체를 의미
//     }
// };
// boy.sayThis(); //->Object{name:"Mike",sayThis:function(){<=>}}

let boy = {
    name:"Mike",
    sayThis: () => {
        console.log(this) //여기서 this는 객체를 의미
    }
};
boy.sayThis();  //->오류+윈도우:화살표함수에서 this는 위도우 전역객체를 가리키게 됨.

 