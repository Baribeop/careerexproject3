// Assignment 3 - JavaScript 


// Create 3 variables that store name, age, and nationality respectively.

let name = 'Beop Leele'
let age = 34
let nationality = 'Nigeria'

// welcome message that combine and name, age, and nationality
const welcomeMessage = `Welcome ${name}, you are ${age} years old and from ${nationality}.`
console.log(welcomeMessage)


// Create a variable that stores favourite quote.
let myFavouriteQuote = 'the greatest gift given to man is not the gift of sight but the gift of vision because sight is a functon of the eyes while vision is a function of the mind'


// Change favourite quote to upper case.
let myFavouriteQuoteInUpperCase = myFavouriteQuote.toLocaleUpperCase()

// Change favourite quote to lower case.
let myFavouriteQuoteInLowerCase = myFavouriteQuote.toLocaleLowerCase()

console.log(myFavouriteQuoteInUpperCase)
console.log(myFavouriteQuoteInLowerCase)



// Take a word and rearrange it in reverse order, then log the reversed word.
// first convert string to array 
const myFavouriteQuoteArray = myFavouriteQuote.split(' ')
console.log(myFavouriteQuoteArray)

// Select a word from the myFavouriteQuoteArray using the any index number.
// The selected word is converted to array using split method.
// Then the letters of the word in the array are reversed using the reverse method.
// finally the letters are joined to a word using the join method.
let reverseWordFromQuote = myFavouriteQuoteArray[21].split('').reverse().join('')
console.log(reverseWordFromQuote)



// Create three different varaibles to represent 3 items and assign price to each item.
let costOfBook = 5000
let costOfLaptop = 300000
let costOfBag = 12000

// Calculation of the total price of items and message to display it 
const totalCostOfItems = (costOfBook + costOfLaptop + costOfBag)

const totalCostOfItemsMessage = `The total cost of the three items is ${totalCostOfItems}`

console.log(totalCostOfItemsMessage)

// Find the average of 5 test scores stored in variables and display the average with a message.

let firstTestScore = 60
let secondTestScore = 78
let thirdTestScore = 56
let fourthTestScore = 89
let fifthTestScore = 45


const averageScore = (firstTestScore + secondTestScore + thirdTestScore + fourthTestScore + fifthTestScore)/5
const averageScoreMessage = `The average of the five scores is ${averageScore}` 

console.log(averageScoreMessage)


// array of your 5 favorite foods and display of the first and last items.

const fiveFavouriteFoods = ['beans porriage ', 'fried rice', 'garri and soup', 'plantain porriage', 'yam peper soup']


let theFirstFavouriteFood = fiveFavouriteFoods[0]
let theLastFavouriteFood = fiveFavouriteFoods[fiveFavouriteFoods.length - 1]

console.log(theFirstFavouriteFood) 
console.log(theLastFavouriteFood)

// Addition of two more food items to the list: 
// one at the beginning and one at the end and display the new list.
let newFoodAddedAtTheBegining = fiveFavouriteFoods.unshift('bread and tea')
let newFoodAddedAtTheEnd = fiveFavouriteFoods.push('fried potato')
console.log(fiveFavouriteFoods)



// Craete three arrays containing 10 names each .

const jssOne = ['Gad', 'Dan', 'Mary', 'Kloe', 'Vivian', 'Queeneth', 'Joe', 'Henry', 'David', 'Loveth']
const jssTwo = ['Ethan', 'Winston', 'Success', 'Precious', 'Alice', 'Faith', 'Glory', 'Pharez', 'Scott', 'Donald']
const jssThree = ['Emmanuel', 'Winner', 'Peace', 'Deborah', 'Alyson', 'Florence', 'Great', 'Joy', 'Davina', 'Robert']

console.log(jssOne)
console.log(jssTwo)
console.log(jssThree)