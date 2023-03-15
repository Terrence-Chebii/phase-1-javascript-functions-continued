// code your solution here
function saturdayFun(activity1 = 'roller-skate'){
    return `This Saturday, I want to ${activity1}!`
}
console.log(saturdayFun())

function mondayWork(activity2 = "go to the office"){
    return `This Monday, I will ${activity2}.`
}
console.log(mondayWork())

function wrapAdjective(special = 'You are'){
    const innerFunction = function(place = "Moringa"){
        return `${special} ${place}`
    }
    return innerFunction()
}
console.log(wrapAdjective())