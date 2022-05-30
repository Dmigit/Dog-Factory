// Write your code here:
const dogFactory = (name, breed, weight) => {
  return {
    _name,
    _breed,
    _weight,
    get name() {
      if (typeof this._name === "string") {
        return `The dog\'s name is ${this._name}!`;
      } else {
        return "The dog's name wasn't set correctly!";
      }
    },
    set name(newName) {
      if (typeof name === "string") {
        this._name = name;
      } else {
        return "The dog's name must be a string!";
      }
    },
    get breed() {
      if (typeof this._breed === "string") {
        return `The dog\'s breed is ${this._breed}!`;
      } else {
        return "The dog's breed wasn't set correctly!";
      }
    },
    set breed(newBreed) {
      if (typeof breed === "string") {
        this._breed = breed;
      } else {
        return "The dog's breed must be a string!";
      }
    },
    get weight() {
      if (typeof this._weight === "number") {
        return `The dog\'s name is ${this._weight}!`;
      } else {
        return "The dog's weight wasn't set correctly!";
      }
    },
    set weight(newWeight) {
      if (typeof weight === "number") {
        this._weight = weight;
      } else {
        return "The dog's weight must be a number!";
      }
    },
  };
};
