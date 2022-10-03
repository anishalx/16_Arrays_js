let marks = [68,59,54,null,true,"Absent"]
marks[1] = 100 //changing the value in Arrays
console.log(marks)
console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[4])
console.log(marks[5])
marks[6] = 56//Adding rhe value in Arrays
console.log(marks[6])
console.log("The length of marks is =",marks.length)
console.log(typeof marks)

for(let a in marks){
  console.log(a)
}