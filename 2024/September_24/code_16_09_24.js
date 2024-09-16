
// shallow copy vs DeepCopy

// original object
const obj = {
    name: 'John',
    address: {
        city: 'City A',
        building: "C block"
    }
}

// A shallow copy creates a new object or array and copies the references of the nested objects/arrays rather than duplicating them. 

const shallowCopy = Object.assign({}, obj);
// const shallowCopy = {...obj}
shallowCopy.address.city = 'City B';
//  shallow copy  just only the references
console.log('shallow', obj.address.city); //City B
console.log('shallow', shallowCopy.address.city);// City B


// A deep copy creates a new object or array, and recursively copies all nested objects or arrays. This ensures that the original and copied structures are entirely independent of each other, so changes to nested objects in the copied structure do not affect the original structure.

const deepCopy = JSON.parse(JSON.stringify(obj));

deepCopy.address.city = 'City C';

console.log(deepCopy.address.city); // City C
console.log(obj.address.city); // City A