
// shallow copy vs DeepCopy

// shallow copy
const obj = {
    name: 'John',
    address: {
        city: 'City A',
        building: "C block"
    }
}

const shallowCopy = Object.assign({}, obj);
// const shallowCopy = {...obj}
shallowCopy.address.city = 'City B';
//  shallow copy  just only the references
console.log('shallow', obj.address.city); //City B
console.log('shallow', shallowCopy.address.city);// City B


// deep copy is means we copy the values of the object

const deepCopy = JSON.parse(JSON.stringify(obj));

deepCopy.address.city = 'City C';

console.log(deepCopy.address.city); // City C
console.log(obj.address.city); // City A