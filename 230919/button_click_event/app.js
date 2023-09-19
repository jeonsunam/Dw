// app.js
const friends = ['짱구', '흰둥이', '철수', '훈이', '유리', '맹구', '짱아'];
console.log(friends);

// 친구들은 총 몇명인가요 console.log() - 배열의 길이
console.log(friends.length);
// 흰둥이를 출력해주세요
console.log(friends[1]);
// 짱아를 배열에서 빼주세요
friends.pop();
console.log(friends);

friends.push('짱아');
console.log(friends);

// for문
// for(초기화 변수; 조건; 증가/감소연산자) {}
    // 실행
//}

for(let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}

const numbers = [1,2,3,4,5];

// numbers를 for문을 이용해서 차례대로 출력

const add = (x) => {
    return console.log(x * 2);
    
}

for(let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]);
    // add함수를 이용해서 2, 4, 6, 8, 10
    add(numbers[i]);
}

const showName = (name) => {
    return console.log(`제 이름은 ${name}입니다`);
    // console.log('테스트 완료') 리턴 아래 있는 내용은 실행되지 않는다.
}
showName('전수남');

// friends = ['짱구', '흰둥이', '철수', '훈이', '유리', '맹구', '짱아'];

// friends의 내용을 for문으로 차례대로 꺼내 showName함수에 전달

for(let i = 0; i < friends.length; i++) {
    showName(friends[i]);
}
