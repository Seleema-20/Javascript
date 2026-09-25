function findSecondLargest() {
    let numbers = [10, 25, 5, 30, 15];

    let largest = numbers[0];
    let secondLargest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {

        if (numbers[i] > largest) {
            secondLargest = largest;
            largest = numbers[i];
        } 
        else if (numbers[i] > secondLargest && numbers[i] !== largest) {
            secondLargest = numbers[i];
        }
    }

    console.log(secondLargest);
}

findSecondLargest();