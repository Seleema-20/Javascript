function maxcharacter(){
    let str="hello";
    let frequency={};

    for (let i=0;i< str.length;i++){
        let char=str[i];

        if(frequency[char]){
            frequency[char]++;
        }
        else{
            frequency[char]=1;
        }
    }

    let maxChar="";
    let maxCount=0;

    for(let char in frequency)
    {
        if(frequency[char]>maxCount){
            maxCount=frequency[char];
            maxChar=char;
        }
    }
    console.log(maxChar);


}
maxcharacter();