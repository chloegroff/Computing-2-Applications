/**
 * This worksheet adapts the final question of Exam 1 of Computing 1 2020/21.
 * Here you should complete each of the functions as they are specified.
 * Of course, this time, the code is in Javascript.
 *
 * Original Python Code and Exam, Becky Stewart @TheLeadingZero.
 */
const Exam = Object.create(null);

// Lists

// Write a function that returns a list containig every third item in
// the original list starting with the first item.
//    for example:
//      an input list of [1,2,3,4,5,6,7,8]
//      returns [1,4,7]
Exam.every_third = function (array) {
    return array.filter((ignore, k) => k % 3 === 0);
};


// Strings

// Write a function that concatenates two sentences passed as inputs.
// The returned string is the first word from the first sentence,
// then the first word from the second sentence, alternating back forth.
// If the sentences are not the same number of words, a "ValueError" is thrown.
//    for example:
//       the input sentences "the cow jumped over the moon" and
//                            "jack and jill went up the"
//       returns "the jack cow and jumped jill over went the up moon the"
Exam.merge_sentences = function (sentence1, sentence2) {
    const s1_words = sentence1.split(' ');
    const s2_words = sentence2.split(' ');
    if (s1_words.length !== s2_words.length) {
        throw "ValueError";
    }
    const mergedArray = s1_words.flatMap((words1, words2) => [words1, s2_words[words2]]);
    return mergedArray.join(' ')
};

//console.log(Exam.merge_sentences('my name is chloe', 'hello i love pancakes'))

// Write a function that returns the number of lowercase letters in
// input string.
//     for example:
//          the input "sPonGe bOb"
//          returns 6
Exam.lowercase_count = function (sentence) {
    const arr = sentence.split('')
    const onlyLetters = arr.filter(letters => letters != ' ')
    const lowerCase = onlyLetters.filter(letter => letter === letter.toLowerCase())
    return lowerCase.length;

};




// Objects

// Write a function that returns the longest a key in the input object
// whose keys are all strings.
Exam.longest_key = function (dict) {
    const key = Object.keys(dict)
    const lengthOfKeys = key.map(words => words.length)
    const longestIndex = lengthOfKeys.indexOf(Math.max(...lengthOfKeys))
    return key[longestIndex];
};

console.log(Exam.longest_key({'lemon': [3,5,6,43,3,6,3,], 'foo': [87,65,3,45,7,8], 'oranges': [34,57,8,9,9,2],}))

// Write a function that returns the largest value that is an even value in the
// input dictionary whose values are all whole numbers.
Exam.value_greatest_even = function (dict) {
    const evenNum = Object.values(dict).filter(numbers => numbers % 2 === 0);
    return Math.max(...evenNum);
};


// Arguments

// Write a function with two input arguments "username" and "location".
// The function should return text "Hello, {name}, how is {location}?".
//
// The username argument should not be set to a default,
// but the location argument should default to "London".
Exam.greeting = function (username, location = 'London') {
    return `Hello, ${username}, how is ${location}`;
};


// Write a function three input arguments,
// the first one, x, is required and the second two are
// the following keywords with default values:
//     scalar with a default of 1
//     offset with a default of 0
// The function returns the calculation x * scalar + offset for the input x
// if the output value of the calculation is positive, otherwise it returns 0.
Exam.floor_line = function (x, scalar = 1, offset = 0) {
    let calc = x * scalar + offset
    if (calc >= 0) {
        return calc
    } else {
        return 0
    }
};

//console.log(Exam.floor_line(-1))

export default Object.freeze(Exam);
