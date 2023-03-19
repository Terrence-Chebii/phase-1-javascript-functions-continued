// code your solution here
function saturdayFun(activity1 = 'roller-skate'){
    return `This Saturday, I want to ${activity1}!`
}
console.log(saturdayFun())

function mondayWork(activity2 = "go to the office"){
    return `This Monday, I will ${activity2}.`
}
console.log(mondayWork())

function wrapAdjective(flair = '*'){
    return function(special = 'a hard worker'){
        return `You are ${flair}${special}${flair}!`
    }
}
console.log(wrapAdjective())