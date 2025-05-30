let name = '염진우';
console.log('hello js');
console.log(name);
name = '염진욱';
console.log(name);
const age = 32;
console.log(age);
// const 는 상수이기 때문에 재대입이 불가능
// age = 33;
// console.log(age);

/* 연산자 */
let data1 = 10;
let data2 = '10';
let result1 = data1 == data2;
console.log(result1);
let result2 = data1 === data2;
console.log(result2);
console.log(typeof(data1), typeof(data2));
console.log("1" + "2");
console.log(1, 2);

// not연산 활용법
console.log(!1);
console.log(!0);
console.log(!"a");
console.log(!"");
console.log(!null);
console.log(!!null);

console.log("".length > 0);
console.log(!!"");

let data = {
    name : "염진우",
    age : 30
}

if (!data) {
    console.log("사용자 정보가 없습니다.");
} else if (data.name === "염진욱") {
    console.log("사용자 이름이 일치 합니다.");
} else if (data.age === 30) {
    console.log("사용자 이름은 일치하지 않지만 나이는 일치합니다.");
} else {
    console.log("사용자가 일치하지 않습니다.");

}
for(let i = 0; i < 10; i++){
    console.log(i); 
}