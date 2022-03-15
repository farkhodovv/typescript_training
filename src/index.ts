import { Animal, DomesticAnimal, Pet } from "./animal";
import { Person, PetOwner } from "./person";

const firstOwner = new PetOwner({
  name: "Navruz",
  birth: {
    day: 21,
    month: 3,
    year: 2000,
  },
});

const dog = new Pet({
  name: "Casper",
  voice: "Wow",
  maxLife: 15,
  gender: 'male'
});

const cat = new Pet({
  name: "Tom",
  voice: "Meow",
  maxLife: 8,
  gender: 'female'

});

const perrot = new Pet({
  name: "Gosha",
  voice: "Whistle",
  maxLife: 5,
  gender: 'male'
}); 

dog.addCommand('sit')
dog.doCommand('sit')
dog.feed('lavash')
dog.walk()
cat.walk()

// firstOwner.addPets(dog, perrot, cat);

// firstOwner.petsList

// firstOwner.setLovelyPet(cat);

// firstOwner.getlovelyPet;