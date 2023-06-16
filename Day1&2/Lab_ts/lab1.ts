// 1-	Create array that accept  number only the cast value to string
let arr: number [];
arr = [1,2,3,4,5];
console.log(arr.toString());

// 2-	Create array that accept string and number only and print all items
let arr2:(number| string)[];
arr2=[1,2,3,"fatma","gad"];
console.log(arr2);

// 3-	Create enum and add  a unique number values for each enum 
enum Colors{
    Red=100,
    Blue=200,
    Pink=300,
    Purple=400
}
let red = Colors.Red;
console.log(red);

// 4-	Create a variable that accept number and Boolean only 
let x:number|boolean;
x=1;
x=false;

//5-	Create function overloading with two parameter 
// let Sum = (x:number,y:number) => x+y;
// let sum = (x:string,y:string) => x+y;

function sum (x:number,y:number):number;
function sum (x:string,y:string):string;
function sum (x:any,y:any):any
{
    x+y;
}
sum(1,2);
sum("ahmed","mohamed");

//6-  Iemployee & employee
interface Iemployee{
    readonly id:number;
    get getUsername();
    name:string;
    email:string;
    get getAddress();
    city:string;
    zipcode:string;
    geo:{lat:string,lng:string};
}
class Employee implements Iemployee{
    constructor(_id: number, _name: string, _username:string, _email: string,_address:{street:string,suite:string}, _city: string, _zipcode:string, _geo: { lat: string; lng: string; }){
        this.id = _id;
        this.name = _name;
        this.username = _username;
        this.email = _email;
        this.address = _address;
        this.city = _city;
        this.geo = _geo;

    }
    readonly id: number;
    name: string;
    private username:string;
    email: string;
    protected address:{street:string,suite:string};
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string; };
    get getUsername() {
        return this.username;
    }
    set setUsername(_userName:string){
        this.username = _userName;
    }
    get getAddress() {
        return this.address;
    }
    set setAddress(_address:{street:string,suite:string}){
        this.address = _address;
    }
}
 let emp = new Employee(1,"Leanne Graham","Bret","Sincere@april.biz",{street: "Kulas Light",suite: "Apt. 556"},"Gwenborough","92998-3874",{lat: "-37.3159",lng: "81.1496"});
 console.log(emp);

 //7-  Manager class
 class Manager extends Employee{
    constructor(public ManagerId:number ,_id: number, _name: string, _username:string, _email: string,_address:{street:string,suite:string}, _city: string, _zipcode:string, _geo: { lat: string; lng: string; }){
        super(_id, _name, _username, _email,_address, _city, _zipcode, _geo);
    }      
 }

 let Mang = new Manager(100,1,"Leanne Graham","Bret","Sincere@april.biz",{street: "Kulas Light",suite: "Apt. 556"},"Gwenborough","92998-3874",{lat: "-37.3159",lng: "81.1496"});
 console.log(Mang.ManagerId,Mang.getAddress);

 
