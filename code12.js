function linearsearch(){
    let arr=[10,20,30,40];
    let target=20;

    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===target){
            console.log(i);
            return;

        }
     
    }
    console.log("not found");
}
linearsearch();