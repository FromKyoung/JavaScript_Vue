//array
let days = ["mon" , "tue", "wed"];

//두번째 배열 요소 출력
//console.log(days[1]); //->tue

//두번째 요소 바꾸기
//days[1] = '화요일'
//console.log(days); //->['monn','화요일','wen']

//배열길이 출력 - 배열명.length
//console.log(days.length); //->3

//배열 가장뒤에 요소 추가 - push
//days.push('thu')
// console.log(days);  //->[ 'mon', 'tue', 'wed', 'thu' ]

//배열 가장 앞에 요소 추가 - nushift
days.unshift("sun");
//onsole.log(days);  //->[ 'sun', 'mon', 'tue', 'wed' ]

//for문으로 반복
// for(let index=0; index < days.length; index++){
//     console.log(days[index]);
// }  //-> sun     mon       tue      wed

//for of문
for(let day of days){
        console.log(day);
} //-> sun     mon       tue      wed

