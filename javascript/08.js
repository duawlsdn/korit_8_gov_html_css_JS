const student = {
    name : "염진우",
    age : 30,
    address : "부산진구",
    phone : "010-5699-9701",
};

// 비구조 할당
const { name, address } = student;
console.log(name, address);

// REST 문법
// 비구조 할당으로 해당되지 않는 나머지 속성들을 출력
const { age, phone, ...rest} = student;
console.log(age, phone, rest);

const numbers = [1,2,3,4];
const [n1,n2, ...ns] = numbers;
console.log(n1,n2, ns);


// spread = 안에 있는 값만 복사!
// 객체 spread
const newStudent = {
    ...student,
    gender : "남",
};

console.log(newStudent);

// 배열 spread
const newNumbers = [...numbers, 5, 6];
console.log(newNumbers);


let names = [];

function addName(name) {
    // names.push(name);
    names = [...names, name];
}

let obj = {
    data1 : "data1",
    data2 : "data2",
};

function addProps(props) {
    obj = {
        ...obj,
        ...props
    }
}
addProps({data3:"data3", data4:"data4"});
console.log(obj);

/*
    단축 평가 논리
    비구조화 할당(구조분해)
    REST 문법과 spread
    Promise
*/