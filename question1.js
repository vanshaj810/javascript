console.log("fizz buzz");
for(let i=1; i<=20;i++){
    // console.log("The value of i is",i);
    if(i%3==0){

        console.log("fizz",i);
    }
    
    if(i%5==0){
        console.log("bizz",i);
    }
    if(i%3==0 && i%5==0){
        console.log("fiz buzz",i);
    }
    else{
        console.log("i is",i);
    }
}