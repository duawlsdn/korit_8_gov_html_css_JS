const student = {
    name : "염진우",
    age : 30,
}

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student['name']);
console.log(student['age']);

const a = 'name';
const b = 'age';
console.log(student[a]);
console.log(student[b]);
student[a] = '염진욱';
console.log(student);
student.name = '염진운';
console.log(student);

student.printName = () => console.log("이름 :" ,student.name);
student.printName();

const loginButton = {
    text: "로그인",
    value: "값",
    onClick: () => {
        console.log(loginButton.text);
    },
}

loginButton.onClick();
loginButton.onClick = () => {
    console.log("로그인 버튼을 클릭하였습니다.");
}
loginButton.onClick();

console.log(typeof(loginButton));

console.log("-------------------");
const loginButtonKeys = Object.keys(loginButton);
for(let i = 0; i < loginButtonKeys.length; i++) {
    console.log(loginButtonKeys[i]);
    const keyName = loginButtonKeys[i];
    console.log(loginButton[keyName]);
}

const loginButtonValues = Object.values(loginButton);
for(let i = 0; i < loginButtonValues.length; i++) {
    console.log(loginButtonValues[i]);
}


const loginButtonEntries = Object.entries(loginButton);
console.log(loginButtonEntries);
// entries는 객체 형태를 배열 형태로 변화하는 것
for(let i = 0; i < loginButtonEntries.length; i++) {
    const entry = loginButtonEntries[i];
    const key = entry[0];
    const value = entry[1];
    console.log(entry, key, value);
}

for(let entry of loginButtonEntries) {
    const key = entry[0];
    const value = entry[1];
    console.log(entry, key, value);
}