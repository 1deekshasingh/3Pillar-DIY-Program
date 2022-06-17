// Create an empty object called dog
// Print the the dog object on the console
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
// Get name, legs, color, age and bark value from the dog object
// Set new properties the dog object: breed, getDogInfo


//1

const dog = {};

//2

console.log(dog);

//3

dog["name"] = "Sky";
dog["legs"] = 4;
dog["color"] = "white";
dog["bark"] = () => "woof woof";

//4

console.log(dog.name, dog.legs, dog.color, dog.bark());

//5

dog["breed"] = "Labrador";
dog["getDogInfo"] = () => {
  return `${dog.name} is a ${dog.color} ${dog.breed}`;
};

console.log(dog.getDogInfo());
