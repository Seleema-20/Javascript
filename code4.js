function findsmallest(){
let arr=[15,20,67,15,7,2];
let smallest=arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i]<smallest){
        smallest=arr[i];
    }
}
console.log(smallest);
}
findsmallest();