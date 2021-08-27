//아래 예들처럼 변수가 가질 값을 명시해줄 수 있다. dynamic -> static
let id:number=5;
let company:string='Traversy Media';
let isPublished:boolean =true;

//any는 모든 타입이 가능함을 의미
let x:any='hello';

//숫자 배열
let ids:number[]=[1,2,3,4,5]

//모든 타입의 원소를 가질 수 있는 배열
let array:any[]=[1, true, 'ts']

//튜플이 가질 수 있는 값의 개수와 타입을 지정
let person:[number, string, boolean]=[26,'Yoo',true]

//튜플 배열
let employee:[number,string][]
employee=[
    [1,'tiger'],
    [2,'lion'],
    [3,'cat'],
]

//Union. 이런식으로 a 또는 b 타입의 값을 가질 수 있음을 명시
let pid: string | number; 


//Enum
enum Direction1{
    Up,
    Down,
    Left,
    Right,
}

//Object 
const user:{
    id:number,
    name:string,
}={
    id:1,
    name:'test'
}

//Object에 지정할 타입을 미리 만들수도 있다.
type User={
    id:number,
    name:string
} 

//Type Assertion
let cid:any=1;
let customerId=<number>cid
let customerId2=cid as number


//Functions
function addNum(x:number,y:number):number{
    return x+y
}

function log(message:string|number):void{
    console.log(message)
}

//Interfaces
interface UserInterface{
    readonly id:number,
    name:string,
    age?:number
}

const user1: UserInterface={
    id:1,
    name:'John'
}

interface MathFunc{
    (x: number, y:number):number
}

const add:MathFunc=(x:number, y:number):number=>x+y
const sub:MathFunc=(x:number, y:number):number=>x-y

//Classes
//클래스 내부 변수, 함수 생성 시엔 let, const, function등을 사용할 수 없음
class Person{
    private id:number;
    name:string;

    constructor(id:number, name:string){
       this.id=id;
       this.name=name;
    }

}

const su=new Person(20,'young')
su.name='changed';

class Employee extends Person{
    position:string

    constructor(id:number, name:string, position:string){
        super(id,name);
        this.position=position
    }
}

const emp=new Employee(3,'Nodi','Developer')

//Generic
function getArray<T>(items:T[]):T[]{
    return new Array().concat(items)
}

let numArray=getArray<number>([1,2,3,4]);
let strArray=getArray<string>(['brad','Jogn','Kim']);

numArray.push(5)


//any와 generic 사용 시 유념할 점. 
//예를 들면 Stack 클래스를 만든다고 할 때, 리스트가 가질 수 있는 값을 any[] 와 같이 지정할 경우
//[1,'1',true] 와 같이 모든 값을 다 갖는 배열이 생길 수 있다. 그래서 이럴 때 generic을 사용해야 한다.
class Stack<T>{
    stack:<T>[];

    constructer(){}
}

//이제 이런식으로 사용할 수 있다. 
const s=new Stack<number>;
const s2=new Stack<string>; 
    

interface itf{
    func1():string;
    func2():number;
}

abstract class vehicle{
    name:string;
    color:string;
    constructor(name:string,color:string){
        this.name=name;
        this.color=color;
        }

    abstract introduce():void
} 
