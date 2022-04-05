import uniqueRandomArray from 'unique-random-array'
import starWarsNames from './starwars-names.json'
import transformersNames from './transformers-names.json'

const allNames = starWarsNames.concat(transformersNames)
const getRandomItem = uniqueRandomArray(allNames)

function getRandomName(number: number) {
    if (number === undefined) {
        return getRandomItem()
    } else {
        const randomItems = []
        for (let i = 0; i < number; i++) {
            randomItems.push(getRandomItem())
        }
        return randomItems
    }
}

function checkIsStarWarsName(name: string) {
    return starWarsNames.includes(name)
}

function checkIsTransformerName(name: string) {
    return transformersNames.includes(name)
}

export {
    allNames,
    starWarsNames,
    transformersNames,
    getRandomName,
    checkIsStarWarsName,
    checkIsTransformerName,
}
