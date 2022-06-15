const people = [
    { name: 'arif', age: 27, country: 'Bangladesh' },
    { name: 'hiba', age: 20, country: 'Syria' },
    { name: 'ornob', age: 22, country: 'India' },
    { name: 'issabela', age: 15, country: 'Canada' },
    { name: 'kallen', age: 18, country: 'Japan' },
]

const ages = people.map((item) => item.age)

const getNames = ( item ) => item.name
const names = people.map(getNames)

const dataObj = people.map((item) => {
    return {
        fullname: item.name.toUpperCase(),
        age: item.age * 2,
        country: item.country.toLowerCase(),
        dataType: Object
    }
})

console.log(ages)
console.log(names)
console.log(dataObj)

const htmlNames = people.map(m => {
    return `<h4>${m.name}</h4>`
})

document.querySelector('#result').innerHTML = htmlNames.join('')