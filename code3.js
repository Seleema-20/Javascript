function checkpalindrome(){
let str="hello";
let reversed="";

for(let i =str.length-1;i>=0;-i--)
{
    reversed=reversed+str[i];

}
if(reversed==str){
    console.log("palindrome");
}
else{
    console.log("not palindrome")
}
}
checkpalindrome();