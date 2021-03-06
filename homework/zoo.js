// Homework: Write Getter and Setter for Mammal Class
// Class for Animal Types.
class Animal {
    constructor(metabolism, expired){
        this.metabolism = metabolism;
        this.expired = expired;
    }
}
// Class for Fish types that inherits Animal properties and methods.
// Fish will inherit Animal write extends
// Extends will include all the things that Animal has.
class Fish extends Animal{
    constructor(tasty){
        // function super is a keyword. 
        // super will run the constructor and pass to class Animal constructor
        super("medium-blooded", "true"); 
        // for True or False
        this.tasty = tasty;
    }
}

// Class for Mammal types
class Mammal extends Animal{
    // constructor is a method must be included and will run when creating objects of this class. This one has many parameters.
    // the order of constructor properties matter because it has a index
    constructor(type, limbs, mouth, nose, eyes, tail, hair, mammary, life, heightInches, weightLb){
        // choosing true or false as a string refers to the expire in class Animal. It makes it easier to flip.
        super("warm-blooded", "false");
        // Keyword this refers to the current object being created. The value refers to the parameter.
        // the order of the keywords doe not matter
        // FIRST KEYWORDS
        this.type = type;
        this.limbs = limbs;
        this.mouth = mouth;
        this.nose = nose;
        this.eyes = eyes;
        this.tail = tail;
        this.hair = hair;
        this.mammary = mammary;
        this.lifeExpectancy = life;
        this.heightInches = heightInches;
        this.weightLb = weightLb;
        // Always ZERO for any mammals created. To control age, refer to live method in line 59
        this.age = 0;
        // THEN YOUR ACTION
        console.log(this.type + " was born.");
    }

  // GETTER & SETTER START
  // LIMBS
  get numOfLimbs() {
    return this.type + " has " + this.limbs + " limbs";
  }
  set numOfLimbs(numOfLimbs) {
    this.limbs = numOfLimbs;
  }
  // MOUTH
  get numOfMouth() {
    return this.type + " has " + this.mouth + " mouths";
  }
  set numOfMouth(numOfMouth) {
    this.mouth = numOfMouth;
  }
  // NOSE
  get numOfNose() {
    return this.type + " has " + this.nose + " noses";
  }
  set numOfNose(numOfNose) {
    this.nose = numOfNose;
  }
  // EYES
  get numOfEyes() {
    return this.type + " has " + this.eyes + " eyes";
  }
  set numOfEyes(numOfEyes) {
    this.eyes = numOfEyes;
  }
  // TAILS
  get numOfTails() {
    return this.type + " has " + this.tail + " tails";
  }
  set numOfTails(numOfTails) {
    this.tail = numOfTails;
  }

  // GETTER & SETTER END

    // This is a method like constructor
    // One of three methods that belong to the mammal class.
  eat(){
    console.log(this.type + " eats food.");
  }

  sleep(){
    console.log(this.type + " sleeps");
  }

  // The method live controls the age
  // Custom method that checks if the Mammal is dead or not after living a certain amount of years.
  live(years){
      this.age = this.age + years;
      if(this.lifeExpectancy < this.age){
          console.log(this.type + " is now dead.");
          this.expired = true;
      }else{
          console.log(this.type + " has successfully lived for an additional " + years + " years.");
      }
  }

  // This method creates a Mammal object similar to the "parent" object.
  // Custom weightLb and heightInches because it's reproduce
  reproduce(weightLb, heightInches){
    console.log(this.type + " created a baby");

    // How to create a new mammal here
    let baby = new Mammal(this.type, this.limbs, this.mouth, this.nose, this.eyes, this.tail, this.hair, this.mammary, this.lifeExpectancy, heightInches, weightLb);

    return baby;
  }

  die(){
      console.log(this.type + " has lived a full life.");
  }
}

// CREATING A DOG
// Use const here because you don't want to change the datatype here Mammal
const firstMammal = new Mammal("dog", 4, 1, 1, 2, 1, true, 2, 30, 24, 4); // Inside the new Mammal() are called properties


// Dog eats and sleeps.
firstMammal.sleep();
firstMammal.eat();

// Reproducing a dog
// Dog makes a baby
let secondMammal = firstMammal.reproduce(4, 6);
console.log(secondMammal.heightInches);

// First and Second Mammal
console.log(firstMammal, secondMammal);



// NEW 
// Create a Cat Mammal 
const firstCatMammal = new Mammal("cat", 4, 1, 1, 2,  1, true, 8, 13, 10, 10);

// This is an array. new Array(); is a class.
// Array holding all the cat babies.
let litter = new Array();

// To reproduce a baby
// .push add to the end of a Array
litter.push(firstCatMammal.reproduce(1, 2));
litter.push(firstCatMammal.reproduce(1, 2));
litter.push(firstCatMammal.reproduce(1, 3));

// This is a "console.log" for live control method. You don't need to write console.log because there's already console.log in the live method. See line 59
litter[1].live(5);
// lifeExpectancy should be higher than your code to trigger the Dead console.log message
litter[1].live(20);


// Create a Fish
// New Fish Object
let tilapia = new Fish(true);
console.log(tilapia.metabolism);


// GETTER & SETTER TEST START
// LIMBS
firstMammal.numOfLimbs = 23144;
console.log(firstMammal.numOfLimbs);
// MOUTH
firstMammal.numOfMouth = 2321;
console.log(firstMammal.numOfMouth);
// NOSE
firstMammal.numOfNose = 233;
console.log(firstMammal.numOfNose);
// EYES
firstMammal.numOfEyes = 12;
console.log(firstMammal.numOfEyes);
// TAILS
firstMammal.numOfTails = 2313;
console.log(firstMammal.numOfTails);
// GETTER & SETTER TEST END
