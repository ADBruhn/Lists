// numbs.filter //will walk through each spot and look for a return of true or false
// numbs.map //will make a new list from an old list one by one
// numbs.forEach (numbs => count = count + 1) //shortened version

//strings
//are a list of characters
//don't have the built in functions of forEach and Map
//can acess a particular character in a string
//let word = "apple"
//word[0] = "a"

//you can hover over a word and press ctrl + D over and over to select all instances of that word,
//you can then edit it however and all of htem will change as well
//press esc to exit that mode

///***CHALLENGES***/// 

let numbs = [1,2, 3,7 , 4, 5, 10 ] //lists are also known as an array. they have an index and length associated with them

//*/given a list of numbers, find the biggest \\DONE
let x = 0

for (i=0;i<=numbs.length; i++) {
    if (x<i) {
        x=i
    }
}
console.log(`biggest = ${x}`)

//*/given a list of numbers, find the average of all time //DONE

let total = 0
let average = 0
for (i=0; i<=numbs.length; i++) {
    total += i
}

if (i = numbs.length) {
    average = total/numbs.length
}

console.log(`average = ${average}`)

//*/given a list of integers, count how many odd numbers there are  //DONE

let count = 0

    for (i=0; i<=numbs.length; i++) {
        if (i%2 === 0) {
            
        } else {
             count++
         }
    }
 console.log(`# of odd numbers = ${count}`)

 //Given a list of animals at ta zoo, and a favorite animal, determine whether the favorite is at the zoo

 let animals = ['lion', 'bear', 'penguin' , 'giraffe']
 let favAnimal = 'dragon'

animals.forEach(animal => {
    if (animal = favAnimal) {
     console.log (`favorite animal, ${favAnimal} is at the zoo`)
    } else {
        console.log (`favorite animal, ${favAnimal} is not at the zoo...`)
    }
 })



//Given a list of Farenheight temperatures, convert the entire list to Celcius (new list)

let tempF = [32, 50, 75, 100, 0, 80]
let y = 0

let tempC = tempF.map (temp => {
    y = tempF - 32
    y = y * 5
    y = y/9
    return y
})

console.log (tempF)
console.log (tempC)

//((tempF-32)*5)/9


//Given a list of integers, find the index of the first number divisible by 5 DONE

let divisByFive = 0

numbs.forEach (numb => {
    if (numb%5 === 0) {
        if (divisByFive === 0) {
        divisByFive = numbs.indexOf(numb)   
        }
        console.log (`index of number disivable by five = ${divisByFive}`)
    }
    
})

//Count how many vowels exist in a word (Strings act like lists, but don't have the built in traversal functions. Instead, you can use word[x] to access one character, and a for loop to traverse)

let word = ['abcdefghiABCDEFGHI']
// let vowels = 0

// for (i=0; i<=word.indexOf(word);i++) {
//     if (word[i] = 'a')  {
//         vowels++
//         // console.log (`i = ${i}`)
//     }
    
// }
// console.log (`# of vowels = ${vowels}`)
// console.log (`index = ${word.indexOf(word)}`)
// || word === 'e' || word === 'i' || word === 'o' || word === 'u' || word === 'A' || word === 'E' || word === 'I' || word === 'O' || word === 'U' )




//Reverse a word. example: "apple" -> "elppa"
// let otherWord = ['apple', 'orange']
// for (i=0; i<=otherWord.lastIndexOf(otherWord); i++) {

// }
// console.log (otherWord.lastIndexOf(i))
    




//Determine whether or not a given word is a palindrome

//Find the distance from the biggest number to the smallest number in a list of integers. If there are duplicate biggests or smallests, choose the largest possible distance.
let biggest = 0
let smallest = 0

for (i=0; i<=numbs.length; i++) {
    if (i<smallest) {
        i = smallest
    }

    if (i>biggest) {
        i = biggest
    }
}
console.log (biggest)
console.log (smallest)


//Given a sentence, reverse each individual word inside the sentence.
