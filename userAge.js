// Alert, Prompt & Confirm: Write a JavaScript program that prompts the user to enter their age. If the age is greater than or equal to 18, display an alert saying "You are an adult". Otherwise, display an alert saying "You are a minor".

var userAge = Number(prompt("Enter your age : "))

if (userAge >= 18) {
    alert("You are an adult");
} else {
    alert("You are a minor")
}