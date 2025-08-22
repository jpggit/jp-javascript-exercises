const findTheOldest = function(people) {
    const findAge = (person) => {
        if (!person.yearOfDeath) { 
            return new Date().getFullYear() - person.yearOfBirth;
        } else {
            return person.yearOfDeath - person.yearOfBirth;
        }
    }
    const oldestPerson = people.reduce ((oldestSoFar, current) => {
        return findAge(current)  > findAge(oldestSoFar) 
        ? current 
        : oldestSoFar
    }, people[0]);
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
