/*
    async(비동기 함수 정의 키워드), await(비동기 함수 동기 호출 키워드)
    await 키워드는 async 함수 안에서만 사용 가능!!!(단, 전역 호출은 가능)
*/

async function fx1(isOk) {
    console.log("fx1 호출");
    if (!isOk) throw new Error ("오류 발생!");
    return "정상 리턴";
}

const fx2 = async (isOk) =>  {
    console.log("fx2 호출");
    if (!isOk) throw new Error ("오류 발생!");
    return "정상 리턴";
}

async function main () {
    let r1 = null;

    fx1(true)
        .then(result => r1 = result)
        .then(() => console.log(r1))
        .catch(error => console.error(error));

    try {
        let r2 = await fx1(true);
        console.log(r2);
    } catch(error) {
        console.error(error);
    }
}

main();
