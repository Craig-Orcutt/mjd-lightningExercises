let ages  = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102];
let fave_demo = [];
let fave_demo2 = [];
for(let i = 0; i < ages.length; i++){
    if(ages[i] >17 && ages[i] <50){
        fave_demo += ages[i] + ' ';
    };
}

ages.forEach((age) =>{
    if (age >17 && age <50){
        fave_demo2 += age + ' ';
    }
})




let filterAge = ages.filter((age)=> age >17 && age <50  );


console.log(fave_demo);
console.log(fave_demo2);
console.log(filterAge);


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


  let yoda_quote = ['the', 'greatest', 'teacher', 'failure', 'is'];
  console.log(yoda_quote.map((word) => {
      if (word === 'the')
          word = word.charAt(0).toUpperCase() + word.slice(1)
      if (word === 'teacher')
        word = word + ' ,'
    return word    
  }). join (' '))

