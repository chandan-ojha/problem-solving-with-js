// Setup
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let i = 0; i < contacts.length; i++) {
      const contact = contacts[i];
      if (contact.firstName === name && contact.hasOwnProperty(prop)) {
          return contact[prop];
      } else if (contact.firstName === name && !contact.hasOwnProperty(prop)) {
          return "No such property";
      }
  }
  return "No such contact";
  // Only change code above this line
}

//lookUpProfile("Akira", "likes");
console.log(lookUpProfile("Akira", "likes"));

