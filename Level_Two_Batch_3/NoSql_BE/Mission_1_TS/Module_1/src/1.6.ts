// learning Function 
// Normal Function 
// Arrow Function 

function add(num1:number, num2:number=10) :number{
    return num1 + num2; 
}
add(2,2)

const addArrow = (num1:number, num2:number) : number =>{
    return num1 + num2;
}

addArrow(2,2)  

// object --> function --> method 

const user={
    name:'Srayo',
    balance: 100,
    addBalance(balance: number):string{
        return `My new balance is : ${this.balance + balance}`;
    }
}
user.addBalance(10);

const arr : number[] = [1,2,3 ,4,5]

const newArray: number[]= arr.map((el:number): number => el*el);