// Types

let num: any = 6

num = "556"
num = {}
num = []

//type in function
function sum(n1: number,n2: number) : string{
    return (n1+n2).toString();
}

sum(1,3);

interface Person {
    name: string,
    lastname: string,
    years: number,
    active:boolean,
}

// Object
let person1: Person = {
    name:"Maria",
    lastname:"Giraldo",
    years: 56,
    active: true,
};

let person2: Person = {
    name:"Maria",
    lastname:"Giraldo",
    years: 56,
    active: true,
};

// Type
type MyList = [number?,string?,boolean?]

// Arrays

let arr:MyList=[];
arr.push(1);
arr.push("number");
arr.push(true);
arr=[1,"number",true];

// Class
class Observable<T>{
    constructor(public value: T){
        //
    }
}

let y: Observable<Person>;
let x: Observable<number>;
let z = new Observable(23);