// 1. Define an array containing at least five numerical values
let numbers = [10, 25, 30, 45, 50];

// 2. Initialize a variable to store the sum, starting at 0
let totalSum = 0;

// 3. Write logic to calculate the sum using a loop structure
for (let i = 0; i < numbers.length; i++) {
    totalSum += numbers[i]; // Add the current number to totalSum
}

// 4. Display the final result
console.log("The values in the array are: " + numbers);
console.log("The sum of all values is: " + totalSum);

// Optional: If you want it to pop up on the screen
// alert("The sum of all values is: " + totalSum);