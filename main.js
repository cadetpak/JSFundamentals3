function personConstructor(name){
  var person = {}; // Person Object
  person.name = name;
  person.distance_traveled = 0;

  person.say_name = function(){
    console.log(person.name);
  }, 
  person.say_something = function(quote){
    console.log(person.name + " says " + quote);
  },
  person.walk = function(){
    console.log(person.name + " is walking.");
    person.distance_traveled += 3;
    return person;
  },
  person.run = function(){
    console.log(person.name + " is running.");
    person.distance_traveled += 10;
    return person;
  },
  person.crawl = function(){
    console.log(person.name + " is crawling.");
    person.distance_traveled += 1;
    return person;
  }

  return person;

};


var tester = personConstructor('Mizoguchi');
tester.say_name();
tester.say_something('Come My Cherry Boys!');
tester.walk().walk();
console.log(tester.distance_traveled); // Output: 6
tester.run();
console.log(tester.distance_traveled); // Output: 16
tester.crawl().crawl();
console.log(tester.distance_traveled); // Output: 18





// Create Cheerleader Object with LevelUp method
function cheerleaderConstructor(name){
  var cheerleader = {}; // Cheerleader Object
  cheerleader.name = name;
  cheerleader.points = 0;
  cheerleader.level = "Beginner";
  console.log(cheerleader);

  cheerleader.levelUp = function(){
    cheerleader.points += 1;
    if (cheerleader.points <= 5){
      cheerleader.level = "Beginner";
      console.log(cheerleader.level);
    } else if (cheerleader.points > 5){
      cheerleader.level = "Senior";
      console.log(cheerleader.level);
    };

    return cheerleader;
  }

  return cheerleader;
}

var captain = cheerleaderConstructor('Mizoguchi');
captain.levelUp().levelUp().levelUp().levelUp().levelUp().levelUp().levelUp();
console.log(captain); // Output: points: 7, level 'Senior'

