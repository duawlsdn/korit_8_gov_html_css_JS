/*
    비구조화 할당(구조분해)

    객체 구조분해할 때 주의할 점
    객체의 속성명이 강으면 이름을 바꿔줘야 함
*/

const student = {
    name : '염진우',
    age : 30,
    address: '부산진구',
};

const studentName = student.name;
const studentAge = student.age;
// const { studentName2, studentAge2 } = student;
const { name : studentName2, age : studentAge2 } = student;
console.log(studentName);   // 염진우
console.log(studentAge);    // 30
// console.log(studentName2);  // undefined
// console.log(studentAge2);   // undefined
console.log(studentName2);
console.log(studentAge2);

// 구조 분해 시
function printStudentInfo( {name, age} ) {
    console.log(name);
    console.log(age);
}
printStudentInfo(student);

// 구조 분해 안할 시
// function printStudentInfo(name, age) {
//     console.log(name);
//     console.log(age);
// }
// printStudentInfo(student.name, student.age);

// 구조 분해 시 매개변수가 많아질 경우
// 원하는 매개변수만 넣어서 사용 가능, 순서 관여 없음
// (key 값과 변수명이 동일해야 한다.)
function printStudentInfo( {name, address, age} ) {
    console.log(address);
    console.log(name);
    console.log(age);
}
printStudentInfo(student);

// :(콜론) 을 사용하여 변수명을 변경 가능
function printStudentInfo( {name, address: addr, age} ) {
    console.log(addr);
    console.log(name);
    console.log(age);
}
printStudentInfo(student);

// 객체의 속성명이 같을 경우
const s1 = {
    name : "염진우",
    age : 30,
};

const s2 = {
    name : "염진욱",
    age : 31,
};

// 오류 상황 속성명이 동일
// const {name, age} = s1;
// const {name, age} = s2;

// 속성명 변경
const {name : n1 , age : a1} = s1;
const {name : n2 , age : a2} = s1;


// 배열 비구조할당 
// => 순서대로 가지고 와야 함, 변수명을 명시해야 함.
const numbers = [1,2,3,4,5];
const [num1,num2,num3] = numbers;
console.log(num1);
console.log(num2);
console.log(num3);

const useState = (data) => {
    const dataState = {
        data : data,
        setData: (d) => {
            console.log(d, "데이터 set");
        },
    }
    return [ dataState.data, dataState.setData ];
};

const [ userData, setUserData ] = useState({username : "test", password: "1234"});
console.log(userData);
setUserData({username : "test2", password: "5678"});