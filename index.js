//   --------------TASK 1---------------
let arrName = ["Семен", "Иван", "Петр", "Татьяна"];
let arrAge = [18, 27, 74, 34];
let newArr = []
for (let i = 0; i <arrName.length; i++){
    newArr.push(arrName[i] +" " + arrAge[i] + " лет/годов")
}
console.log(newArr)

console.log('-------------------')
console.log(newArr.length)

//   --------------TASK 2---------------
secondArr = [];
for (let i = newArr.length-1; i >=0; i--){
    secondArr.push(newArr[i])
}
console.log(secondArr)


