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


  // lightning exercise:
// Loop through this object and add each member object's key as an ID. Log the results.
let customers = {
    active: {
      a87b6345: {
        name: "Gary Harrison",
        age: 23,
        member_level: "gold"
      },
      b345hy66: {
        name: "Harry Garrison",
        age: 34,
        member_level: "silver"
      },
      nh56yht8: {
        name: "Mary Terryson",
        age: 78,
        member_level: "platinum"
      },
      j677yd456: {
        name: "Barry Sonnyman",
        age: 44,
        member_level: "gold"
      }
    },
    inactive: {
      ur56tfgt: {
        name: "Barb Justice",
        age: 56,
        member_level: "none"
      },
      d56gt6: {
        name: "Jane L'eggo",
        age: 11,
        member_level: "none"
      }
    }
  }

  let idNumbers = []
  let users = Object.keys(customers)
  let active = customers.active;

for(let status in customers){
    let keys  = Object.keys(customers[status]);
    console.log(keys);
    keys.forEach( (key) =>{
        customers[status][key].id = key;
        console.log(key);
        idNumbers.push(key);
    });
}
console.log(idNumbers);
  
