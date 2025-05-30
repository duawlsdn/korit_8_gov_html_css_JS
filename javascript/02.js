/*
    자바스크립트 함수
*/

// 일반함수 정의
function 함수명(매개변수1, 매개변수2) {
    let 리턴데이터 = null;
    console.log(매개변수1);
    console.log(매개변수2);
    console.log("함수 호출");
    return 리턴데이터;  // 리턴이 필요할 때 명시하면 됨
}

const 리턴값 = 함수명();
console.log(리턴값);
const 함수명2 = 함수명;
const 리턴값2 = 함수명2(10,20);
console.log(리턴값2);
const 리턴값3 = 함수명2(10);
console.log(리턴값3);

// 익명 함수
const 함수명3 = function (매개변수1, 매개변수2) {
    let 리턴데이터 = null;
    console.log(매개변수1);
    console.log(매개변수2);
    console.log("함수 호출");
    return 리턴데이터;
}

// 화살표함수
/*
    1. 매개변수 한개 라면 () 생략가능
    2. 실행문이 한줄이면 {} 생략가능
    3. {} 생략시 값만 입력하면 return값이 됨. 
        - {} 생략을 안하고 return 하려면 return 키워드 명시해야함
*/
const 함수명4 = (매개변수1, 매개변수2) => {
    let 리턴데이터 = null;
    console.log(매개변수1);
    console.log(매개변수2);
    console.log("함수 호출");
    return 리턴데이터;
}

// 실행문 한줄
const fx1 = () => console.log("fx1 호출");

// 매개변수 하나
const fx2 = n => console.log(n, "출력");

// 실행문 한줄 + 매개변수 하나
const fx3 = n => n + 1;

// 매개변수 하나 실행문 두줄(return 키워드 명시)
const fx4 = n => {
    console.log(n, "출력");
    return n + 1;
}

// 매개변수 2개 실행문 한 줄
const fx5 = (a, b) => a * b;

// 아래 방식도 가능 단 결과 값은 undefined
console.log(console.log());

console.log("------------------");
const 리턴값5 = 함수명;
console.log("텍스트", 리턴값5());


console.log("----------------------------------");
// function aa() {
//     console.log("aa 호출");
//     return "aa함수 리턴값";
// }

const aa = () => {
    console.log("aa 호출");
    return "aa함수 리턴값";
}

// function bb(fxx) {
//     console.log("bb 함수 호출");
//     return fxx;
// }
const bb = fxx => {
    console.log("bb 함수 호출");
    return fxx;
}

// function aaa(fxx, fxx2) {
//     console.log("aaa 호출");
//     console.log(fxx());
//     console.log(fxx2());
//     return "aaa함수 리턴값";
// }

const aaa = (fxx, fxx2) => {
    console.log("aaa 호출");
    console.log(fxx());
    console.log(fxx2());
    return "aaa함수 리턴값";
}

console.log(aaa(bb(aa), bb(aa)));