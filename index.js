// Your code here

function saturdayFun (activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (activity = "go to the office"){
  return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(flair = '*'){
  return function(adjective = 'special'){
    return `You are ${flair}${adjective}${flair}!`
  }
}

let Calculator = {
  add: function(a, b){
    return a + b
  },
  subtract: function(a, b){
    return a - b
  },
  multiply: function(a, b){
    return a * b
  },
  divide: function(a, b){
    return a / b
  }
}

let actionApplyer = function(startInt, functionArray){
  if (functionArray.length == 0){
    return startInt
  }
  else{
    let modifiedInt = ((startInt * 2) + 1000) % 7
    return modifiedInt
  }
}
