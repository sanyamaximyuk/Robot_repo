const personInfo = {
    name: 'Ben',
    age: 30,
    hobbies: ['cars', 'football', 'music'],
    address: {
        city: 'Lviv',
        country: 'Ukraine'
    },
    func: function(){
        console.log('Hello! My name ' + this.name);
        console.log('I am ' + this.age);
        console.log('I am from ' + this.address.country);
    }
};

console.log(personInfo);
console.log(Object.keys(personInfo));
console.log(Object.values(personInfo));
console.log(Object.values(personInfo.address));
console.log(Object.entries(personInfo));

const obj2 = Object.assign({}, personInfo);
console.log(obj2);

const obj3 = JSON.parse(JSON.stringify(personInfo));
obj3.name = 'Donald';
obj3.address.city = 'Chop';
console.log(obj3, personInfo);

personInfo.func();
