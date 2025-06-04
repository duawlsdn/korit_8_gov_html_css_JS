/*
    단축 평가 논리 연산
    && 연산 -> 앞의 값이 true 일 때 뒤의 값을 리턴, false 일때 false 리턴
    || 연산 -> 앞의 값이 false 일 때 뒤의 값을 리턴, true 일때 true 리턴
    ?? 연산 -> 앞의 값이 null 또는 undefined 가 아니면 앞의 값, 그 외에는 뒤의 값
*/
const name = '염진우';

console.log(!!name && !!'염진욱');
console.log(false && name);
// A && B
// A가 true 이면 뒤에 있는 값(B)를 반환
// A가 false 이면 false를 반환


console.log(true || false); // true
console.log(true || 10);
console.log(false || 10);
// A || B
// A가 true 이면 true를 반환
// A가 false 이면 뒤에 있는 값(B)를 반환


console.log(null ?? 100);   // 100
console.log(undefined ?? 100);  // 100
console.log(20 ?? 100); // 20
// A ?? B (nullish 병합 연산)
// A가 null 또는 undefined이면 뒤의 값
// A가 null 또는 undefined 가 아니면 앞의 값