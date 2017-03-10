var personOne = ['Asad Marfani', 22];
var personTwo = ['Zainabb', 20];

var printNames = (name, age) => {
    return "Hi " + name + ", your age is : " +age;
}

console.log(printNames(...personOne));
console.log(printNames(...personTwo));

var names = ['ASAD','MARFANI'];
var constantName = ['Harry'];
var final = [...names, ...constantName];
console.log(final);

final.forEach((name, idx)=>{
    console.log(++idx +" : "+name);
});