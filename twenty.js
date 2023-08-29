//1st 

function one(sevem){
    console.log(sevem)
}
one("seven");

//2nd

function add(a,b){
    return a+b;
}
console.log(add(8,0))

//3rd rest opera...

function arrays(...rest){
    for(let i of rest){
        console.log(i)
    }
}
arrays(10,11,12,13,14,15,16,17)

//4 spread operator

const arr1=[1,2,3,4]

const arr2=[5,6,7,8]

const intrSection=[...arr1, ...arr2];

console.log(intrSection)

//async
//5th CallBack function

function form(CallBack){
    setTimeout(function(){
        var detail="name : sulmean"

        CallBack(detail);
    },1000);
    
}
function Data(detail){
    console.log("recived data ==> ", detail)
}
form(Data);

// 6th asyncronus

function sum(num1, num2){
    
    let i=num1+num2

    

    console.log(i+" " +"this is the answer")
}

sum(1,2)



//7th

function evennumber(){
    for(let i=0; i<=20;i++){
        if(i%2==0){
            console.log(i)
        }
    }
}
evennumber();


//8th odd number
console.log('odd numbers')
function oddnumber(){
    for(let i=0; i<=20;i++){
        if(i%2==1){
            console.log(i)
        }
    }
}
oddnumber();



//9th (for in loop)

const myDetail={
    name:'suleman',
    lst_name:'akhtar',
    age:19,
    country:'india'
}
for(let i in myDetail){
    console.log(i+" : "+myDetail[i])
}

//10th array/for of loop

const t=["suleman","akhtar","konain",29,74,true]

for(let m of t){
    console.log(m)
}

//concatination

let arrar1=["sulmean","akhter","konain","shifa"]

let arrar2=["kaif","saif"]

let arr4=[24,26]

let arr3=arrar1.concat(arrar2,arr4)

console.log(arr3)


// splice (to remove elements from array)

let nam=["suleman","saif","shifa","konain","kaif"]

nam.splice(0,4) //(index,length no.)
console.log(nam)


//for each

let dan=["sulmean","dan waste","robinson","smith","will"]
count=0;
dan.forEach((n)=>{
    count++;
})
console.log(count)


for(let i=0;i<dan.length;i++){
    console.log(dan[i])
}
//array element addition

let numbers=[1,2]
let n=0;
for(let i=0;i<numbers.length;i++){
    
    n+=numbers[i]
    
}
console.log(n)








