const name = '염진우';
const age = 30;

const person = {
    "name" : name,
    "age" : age,
}

// key값과 value 값이 동일할 경우 아래와 같이 가능
const person2 = {
    name,
    age,
    address : "부산진구",
}

console.log(person);
console.log(person2);



const title1 = document.getElementById("title");

// {} 중괄호로 감쌀 시 객체로 볼 수 있음
console.log({title1});

// 하나의 클래스만 존재하더라도 리스트 형태로 콘솔에 나옴
const titles = document.getElementsByClassName("title");
console.log(titles);

// 위와 동일하게 리스트의 형태로 나옴
const h3s = document.getElementsByTagName("h3");
console.log(h3s);

// document는 html의 문서를 객체화한것
console.log(document);

const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");

const title1q = document.querySelector("#title");

// 복수의 클래스명을 가진것을 가지고 오는데 querySelector를 사용하면 첫번째 것만 가져오게 된다.
// const titles2 = document.querySelector(".title"); 

// 복수의 클래스명을 가진것을 가지고 오고 싶다면 querySelectorAll을 사용
const titles2 = document.querySelectorAll(".title"); 
console.log(titles2);

const h3s2 = document.querySelectorAll("h3");

// 위 document와 달리 d12 안에서 d22의 id를 가지고 올 수 있음.
const d12 = document.querySelector("#d1");
const d22 = d12.querySelector("#d1");
console.log(d12);
console.log(d22);
const d23 = document.querySelector("#d1 > #d2");
console.log(d23);

d23.innerText = "<p>innerText</p>";
d23.innerHTML += "<p>innerText</p>";

const students = [
    {
        name : "김준일",
        age : 32,
        address : "부산 동래구",
    },
    {
        name : "김준이",
        age : 33,
        address : "부산 부산진구",
    },
    {
        name : "김준삼",
        age : 34,
        address : "부산 북구",
    },
];

const studentTableBody = document.querySelector(".student-table > tbody");

const studentTrs = students.map((s, index) => {
    return `<tr>
        <td>${index + 1}</td>
        <td>${s.name}</td>
        <td>${s.age}</td>
        <td>${s.address}</td>
    </tr>`;
});

console.log(studentTrs);
console.log(studentTrs.join(""));

studentTableBody.innerHTML = studentTrs.join("");

const tdList = studentTableBody.querySelectorAll("td");

// tdList.forEach(td => td.setAttribute("style", "border: 1px solid #000"));
tdList.forEach(td => td.style = "border: 1px solid #000;");

const studdentTable = document.querySelector(".student-table");
studdentTable.classList.add("table-border");