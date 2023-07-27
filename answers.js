/* ////////////////////////////////
    Part I: HTML & CSS
//////////////////////////////// */

//5 - I got this! I am ready to code

/* ////////////////////////////////
    Part II: JavaScript Reps
//////////////////////////////// */

//-----------------------------
// Easy Going 
//-----------------------------

/* for(let i=1;i<21;i++){
    console.log(i);
} */
//-----------------------------
// Get Even
//-----------------------------
/* for(let i=0;i<201;i++){
    i%2===0 ? console.log(i) : null
} */
//-----------------------------
// Fizz Buzz
//-----------------------------
/* for(let i=1;i<101;i++){
    if(i%3===0 && i%5===0){
        console.log('Fizzbuzz')
    }
    if(i%3===0){
        console.log('Fizz')
    }
    if(i%5===0 ){
        console.log('Buzz')
    }
} */
//-----------------------------
// Wild Wild Life
//-----------------------------
/* const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
console.log(plantee[2]=5001)
console.log(plantee)
console.log(wolfy[3]='Gotham City')
console.log(wolfy)
console.log(dart.push('Hawkins'))
console.log(dart)
console.log(wolfy[0]='Gameboy')
console.log(wolfy) */
//-----------------------------
// Yell at the Ninja Turtles
//-----------------------------
/* const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
for(let el of ninjaTurtles){
    console.log(el.toUpperCase())
} */
//-----------------------------
// Methods, Revisited
//-----------------------------
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
/* console.log(favMovies.indexOf('Titanic')) */
// 1. the sort method rearranges the elements in the array to be in order according to their unicode CSSFontFeatureValuesRule, because the array elements are all SVGStringList, the elements were alphabetized.
/* console.log(favMovies.sort()) */
// 2. Use the method pop
// favMovies.pop()
/* console.log(favMovies.pop())
console.log(favMovies) */
// 3. push "Guardians of the Galaxy"
/* favMovies.push("Guardians of the Galaxy")
console.log(favMovies) */
// 4. Reverse the array
/* console.log(favMovies.reverse())
console.log(favMovies) */
// 5. Use the shift method
/* console.log(favMovies.shift())
console.log(favMovies) */
// 6. unshift - what does it return?
/* console.log(favMovies.unshift())
//returns the length of the array */
// 7. splice "Django Unchained" and add "Avatar" (try finding
// the index of "Django Unchained", instead of counting it
// yourself) Thought question: did this permanently alter our
// array?
/* favMovies.splice(favMovies.indexOf('Django Unchained'),1,'Avatar')
console.log(favMovies) */
// 8. slice the last half of the array (challenge yourself and
// try to programatically determine the middle of the array
// rather than counting it and hard coding it) - Thought
// question: did this permanently alter our array?
/* const midIndex = Math.floor(favMovies.length/2)
console.log(favMovies.slice(0,midIndex)) */
// 9. store the value of your slice in a variable, console.log it - Thought question: what is going on here?
/* const splicedMovies = favMovies.slice(0,midIndex) */
// 10. console.log your final results
/* console.log(splicedMovies) */
// 11. After running the above tasks, console.log the
// index of "Fast and Furious" -We removed it from the
// array, what value do we get when we look for the
// index of something that is not in the array?
/* console.log(splicedMovies.indexOf('Fast and Furious'))
// beacause it doesn't exist in the array, a value of -1
// is returned */
// 12. Thought question: that we declared the variable
// favMovies with const, and yet, we were allowed to
// change the array. Weird? Should we have used let?
//-----------------------------
// Where is Waldo
//-----------------------------
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert", ["Lucinda", "Jacc", "Neff", "Snoop"], ["Petunia", ["Baked Goods", "Waldo"]]];
// Remove Eggbert (hint look at the slice/splice method(s))
whereIsWaldo.splice(1,1)
console.log(whereIsWaldo)
// Change "Neff" to "No One"
whereIsWaldo[1].splice(2,1,"No One")
console.log(whereIsWaldo)
// Access and console.log "Waldo"
console.log(whereIsWaldo[2][1][1])
//-----------------------------
// subheading
//-----------------------------
// console.log(xxx)

//-----------------------------
// subheading
//-----------------------------
// console.log(xxx)

//-----------------------------
// subheading
//-----------------------------
// console.log(xxx)

//-----------------------------
// subheading
//-----------------------------
// console.log(xxx)

//-----------------------------
// subheading
//-----------------------------
// console.log(xxx)

//-----------------------------
// subheading
//-----------------------------
// console.log(xxx)

//-----------------------------
// subheading
//-----------------------------
// console.log(xxx)

//-----------------------------
// subheading
//-----------------------------
// console.log(xxx)
