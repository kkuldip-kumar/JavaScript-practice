// call bind and apply 

// read this post for more information 

// link : https://www.linkedin.com/feed/update/urn:li:activity:7235890430226112512/

function greet(message) {
    console.log(`${message} ${this.name}`)
}

const personOne = {
    name: 'Jane',
}
const personTwo = {
    name: 'Foster',
}

//   greet.call(personTwo, 'Welcome');

//   greet.apply(personOne, ['Hi'])

const greetPerson = greet.bind(personOne, 'Hello');
greetPerson()