let iveMember = [
  '안유진',
  '장원영',
  '레이',
  '리즈',
];

// 1. map() : 원래 배열 변형 시킴 -> 새것으로 준다. 
// *** : React 에서 for 문을 map으로 돌린다.

console.log('1. map()');
console.log(iveMember.map((x)=> x));
console.log(iveMember.map((x)=>`아이브 : ${x}`));
console.log(iveMember);
// 안유진만... 아이브 : 안유진으로 출력
 console.log('2.아이브 : 안유진');
 console.log(iveMember.map((x)=> {
  if(x ==='안유진'){
    return `안유진 : ${x}`
  }else return x;
 }))


//  3. map을 반복문으로 처리
let i =1;
iveMember.map((x)=>{
console.log(i);
i++;
})

// 4. filter 사용하기
console.log('4. filter 사용하기');
let values =[
  1,
  9,
  8,
  5,
  3,
];

// 전체 출력하기 
console.log('전체 : ' + values.filter((x) => x));

// 짝수 출력하기
console.log('짝수 : ' + values.filter((x)=> (x % 2) === 0));

// 3보다 큰 수 출력
console.log('3보다 큰 수 : ' + values.filter((x) => x > 3 ));

// 3보다 큰 수 찾아서 오름차순 정렬하기
console.log('3보다 큰 수 오름차순  : ' + values.filter((x) => x > 3 ));
values.sort((x,y)=>{
  return x - y;
});


// find() 함수

// reduce() 함수 