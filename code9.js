function removeduplicates(){
let arr=[10,20,10,40,30];
let unique=[];

for(let i=0;i<arr.length;i++)
{
    if(!unique.includes(arr[i])){
        unique.push(arr[i]);
    }
   
}
console.log(unique);
}
removeduplicates();