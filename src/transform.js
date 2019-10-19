const groupAdultsByAgeRange = function (arr) {
    if (arr.length === 0) {
        return {};
    }
    const groups = arr.filter(person => person.age >= 18)
        .reduce((adultObject, adult) => {
            switch (true) {
                case adult.age <= 20:
                    adultObject['20 and younger'].push(adult);
                    break;
                case adult.age > 20 && adult.age <= 30:
                    adultObject['21-30'].push(adult);
                    break;
                case adult.age > 30 && adult.age <= 40:
                    adultObject['31-40'].push(adult);
                    break;
                case adult.age > 40 && adult.age <= 50:
                    adultObject['41-50'].push(adult);
                    break;
                case adult.age > 50:
                    adultObject['51 and older'].push(adult);
                    break;
            }
            return adultObject;
        }, {
            '20 and younger': [],
            '21-30': [],
            '31-40': [],
            '41-50': [],
            '51 and older': []
        });
        const nonEmptyGroups = {};
        for (var property in groups) {
            if(groups[property].length > 0){
                nonEmptyGroups[property] = groups[property];
            }
        };
    return nonEmptyGroups;
}

const people = [
    { name: "pete", age: 10 },
    { name: "dove", age: 17 },
    { name: "dave", age: 18 },
    { name: "hall", age: 19 },
    { name: "donn", age: 20 },
    { name: "trey", age: 21 },
    { name: "hann", age: 29 },
    { name: "chew", age: 30 },
    { name: "cloe", age: 31 },
    { name: "dart", age: 39 },
    { name: "this", age: 40 },
    { name: "dame", age: 41 },
    { name: "henk", age: 49 },
    { name: "anna", age: 50 },
    { name: "olga", age: 51 },
    { name: "bert", age: 52 },
    { name: "oldd", age: 120 },
];

console.log(groupAdultsByAgeRange(people));
module.exports = {
    groupAdultsByAgeRange
};

// - `20 and younger`
// - `21-30`
// - `31-40`
// - `41-50`
// - `51 and older`