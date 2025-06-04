const userList = [
    {id : 1, username : "aaa"},
    {id : 2, username : "bbb"},
    {id : 3, username : "ccc"},
    {id : 4, username : "ddd"},
];

function findUserById(id) {
    return userList.find(user => user.id === id);
}

function getUserById(id) {
    return new Promise((rs, rj) => {
        const foundUser = findUserById(id);
        if (!!foundUser) {
            rs(foundUser);
        } else {
            rj(new Error("해당 ID의 사용자를 찾을 수 없습니다."));
        }
    });
}

let user1 = await getUserById(1);
console.log("!!",user1);

getUserById(1)
    .then(result => user1 = result)
    .catch(error => console.error(error));

getUserById(5)
    .then(result => console.log(result))
    .catch(error => console.error(error));


async function getUserById2(id) {
    const foundUser = findUserById(id);
    if(!foundUser) {throw new Error("해당 ID의 사용자를 찾을 수 없습니다.")};
    return foundUser;
}

getUserById(2)
    .then(result => console.log(result))
    .catch(error => console.error(error));

getUserById(6)
    .then(result => console.log(result))
    .catch(error => console.error(error));

    