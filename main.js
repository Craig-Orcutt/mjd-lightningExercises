let ages  = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102];
let fave_demo = [];
let fave_demo2 = [];
// log ages that are between 17 and 50 using a for loop
for(let i = 0; i < ages.length; i++){
    if(ages[i] >17 && ages[i] <50){
        fave_demo += ages[i] + ' ';
    };
}
// log ages that between 17 and 50 using a forEach
ages.forEach((age) =>{
    if (age >17 && age <50){
        fave_demo2 += age + ' ';
    }
})



// log ages between 17 and 50 using .filter
let filterAge = ages.filter((age)=> age >17 && age <50  );


console.log(fave_demo);
console.log(fave_demo2);
console.log(filterAge);

// console the 'meaning of life'
hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
      copies_sold: 14000000,
      formats: ["radio", "TV", "film", "graphic novel"],
      ultimate_answer: {
        meaning_of_life: 42
      }
    }
  };

  console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life);

// capitalize 'The' and place a comma after 'not'
  let yoda_quote = ['the', 'greatest', 'teacher', 'failure', 'is'];
  console.log(yoda_quote.map((word) => {
      if (word === 'the')
          word = word.charAt(0).toUpperCase() + word.slice(1)
      if (word === 'teacher')
        word = word + ' ,'
    return word    
  }). join (' '))




//   Choose a loop method of your choice to get this result from this array:
let newNumArr = [];
let parseNum;
let nums = [1, 2, 3, 4, "5", 6, "7"]
// expected result: [3, 5, 7, 9, 11, 13]
  for(i = 0; i < nums.length-1; i++){
    newNumArr.push(+nums[i] + +nums[i + 1])
}

console.log(newNumArr);



