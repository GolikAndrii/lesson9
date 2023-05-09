//   --------------TASK 1---------------
let arrName = ["Семен", "Иван", "Петр", "Татьяна"];
let arrAge = [18, 27, 74, 34];

for (let i = 0; i <arrName.length; i++){
    let newArr = [arrName[i] +" " + arrAge[i] + " лет/годов"]
    console.log(newArr)
}
console.log('=======================')
//   --------------TASK 2---------------
for (let i = arrName.length-1; i >= 0; i--){
    let newArr = [arrName[i] +" " + arrAge[i] + " лет/годов"]
    console.log(newArr)
}

