// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray) {
    let option = " "
    
    for (let i = 0; i <= sentence.length; i++) {
        let plusOne = i + 1;
        option = option + sentence[i] + " ";
    
        console.log(option);
    }
}

// Invoke the function and pass in the array
addExcitement(sentence)