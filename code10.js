function findDuplicates(){
let numbers=[10,20,30,40,30,10];
let duplicates=[];

for(let i=0;i<numbers.length;i++)
{
    for(let j=i+1;j<numbers.length;j++)
    {
        if(numbers[i]===numbers[j]){
            if(!duplicates.includes(numbers[i])){
                duplicates.push(numbers[i]);
            }
        }
    }
}
console.log(duplicates);
}
findDuplicates();