"use strict";
//아래 예들처럼 변수가 가질 값을 명시해줄 수 있다. dynamic -> static
let id = 5;
let company = 'Traversy Media';
let isPublished = true;
//any는 모든 타입이 가능함을 의미
let x = 'hello';
//숫자 배열
let ids = [1, 2, 3, 4, 5];
//모든 타입의 원소를 가질 수 있는 배열
let array = [1, true, 'ts'];
//튜플이 가질 수 있는 값의 개수와 타입을 지정
let person = [26, 'Yoo', true];
//튜플 배열
let employee;
employee = [
    [1, 'tiger'],
    [2, 'lion'],
    [3, 'cat'],
];
//Union. 이런식으로 a 또는 b 타입의 값을 가질 수 있음을 명시
let pid;
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
//Object 
const user = {
    id: 1,
    name: 'test'
};
//Type Assertion
let cid = 1;
let customerId = cid;
let customerId2 = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//Classes
class Person {
    constructor() {
        console.log('시벌');
    }
}
const su = new Person();
