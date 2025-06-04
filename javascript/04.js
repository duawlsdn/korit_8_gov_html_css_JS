/*
    배열(Array)
*/
const arr1 = [];
const arr2 = new Array();

arr1.push(10);
arr1.push(20);
arr1.push(30);
arr1.push(40);
console.log(arr1);

arr2.push(10);
arr2.push(20);
arr2.push(30);
arr2.push(40);
console.log(arr2);

console.log(arr1 === arr2); // false : 값은 같더라도 주소값이 다름

const obj1 = {key1:"value1", key2: "value2"};
const obj2 = {key1:"value1", key2: "value2"};
console.log(obj1 === obj2);

// JSON
// JS 객체 또는 배열을 JSON 문자열로 변환해주는 메서드 JSON.stringify();
// JSON 문자열을 JS 객체 또는 배열로 변환해주는 메서드 JSON.parse();

const json1 = JSON.stringify(arr1);
const json2 = JSON.stringify(arr2);

console.log(json1);
console.log(json2);
console.log(json1 === json2);

const json3 = JSON.stringify(obj1);
const json4 = JSON.stringify(obj2);

console.log(json3);
console.log(json4);
console.log(json3 === json4);

/*
    배열의 기본 내장 함수
*/

const names = ['염진우','염진욱','염진운'];

// 값 추가
names.push('염진욷');

// 값 제거 - 어떤 값을 제거했는지 리턴값이 존재
console.log(names.pop());

// 값 수정 - .splice(시작 위치, 제거 위치까지, 추가할 항목)
names.splice(1, 0, '염진움');
console.log(names);

// 값 찾기
const findFx = n => n === '염진움';
const foundName = names.find(findFx);
console.log(foundName);

const students = [
    {name : '염진우', age : 30},
    {name : '염진욱', age : 31},
    {name : '염진운', age : 30},
    {name : '염진욷', age : 31},
    {name : '염진읃', age : 30},
];
console.log(students.find(s => s.name === '염진욷' && s.age === 31));

// 값 존재 유무
console.log(names.includes('염진움'));

// 필터링
const numbers = [1,2,3,4,5];
console.log(numbers.filter(n => n % 2 === 0));
console.log(students);
console.log(students.filter(student => student.age === 30));
// java의 filter
// students.stream().filter(student -> student.getAge() == 30).collect(Collection.toList());

// 값 변화
console.log(numbers.map(n => n * 10));
console.log(students.map(student => {
    if(student.age === 30){
        return {
            name : student.name,
        }
    }
    return student;
}));

function map(array, fx) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(fx(array[i]));
    }
    return newArray;
}

console.log(map(students, student => {
    if(student.age === 30){
        return {
            name : student.name,
        }
    }
    return student;
}));

const filter = (array, fx) => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (fx(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(filter(students, student => student.age === 31 ));