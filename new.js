
//callback function


function main(){
  console.log("hello")


}
function main2(a,b,callback){
   console.log("hi...")
   callback();
   console.log(a+b)
}
main2(2,2,main)

