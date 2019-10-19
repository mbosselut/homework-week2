const groupAdultsByAgeRange = function (arr) {
    // Return empty object if empty array provided
    if (arr.length === 0) {
        return {};
    }
    // Filtering out people below 18
    const groups = arr.filter(person => person.age >= 18)
        // Categorising people based on age
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
    // Removing empty object properties
    const nonEmptyGroups = {};
    for (var property in groups) {
        if (groups[property].length > 0) {
            nonEmptyGroups[property] = groups[property];
        }
    };
    return nonEmptyGroups;
}

module.exports = {
    groupAdultsByAgeRange
};
