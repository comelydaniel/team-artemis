//number 1
document.querySelector("#team-name").innerHTML = "Team Artemis";
document.querySelector("#team-name").style.color = "limegreen";

//number 2
let teamMembers = ['Merit Dike', 'Emmanuel Stephen', 'Gabriel Ekpo', 'Comely Daniel', 'Ejeh Daniel', 'Ayobami Ogundiy', 'Abdulsamad Raji'];
console.log(teamMembers[3]);

//number 3
let comely = {
    firstName: 'Comely',
    lastName : 'Daniel',
    bestMovie: 'Halo',
    bestFood: 'Ekpangnkukwo',
    complexion: 'fair',
    birthMonth: 'may',
    state: 'Akwa Ibom State',
    groupName: 'Artemis',
}
console.log("Best movie: " + comely.bestMovie);

//number 4
let noun = 'Comely';
let verb = 'dancing';
let adjective = 'charming';

console.log(noun, verb, adjective)

console.log("First sentence: I am " + noun + " and I am " + verb);
console.log("Second sentence: " + noun + " is " + verb);
console.log("Third sentence: Her " + verb + " is very " + adjective)
console.log("Fourth sentence: I am " + verb + " with a " + adjective + " girl called " + noun);
console.log("Fifth sentence: Just like her name, " + noun + ", she is " + adjective);

//number 5
function remainder(num, denom ) {
    return num % denom;
}

console.log(remainder(19, 4));

//number 6
function quadratic(a, b, c) {
    let result = ((-b)+ Math.sqrt((b*b)-(4*a*c)))/(2*a);
    let resultTwo = ((-b)- Math.sqrt((b*b)-(4*a*c)))/(2*a);
    return result + " , " + resultTwo;
}

console.log(quadratic(1, 2, -2));

//number 7
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly"
const wordBlank = "My very " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + " into the yard."
console.log(wordBlank)

//number 8
function areaCircle(r) {
    const pi = 3.142;
    return pi*(r*r);
}

console.log("area of circle = " + areaCircle(2));

//number 9
let p = 8200;
let r = 17.5;
let t = 2.5;

console.log(p, r, t);

simpleInterest = p*(1+((r*t)/100))

console.log("SI = " + simpleInterest);

//number 10
let reMainder = 10 % 4;
console.log("the remainer is " + reMainder);

//number 11a
let M1 = {
    h: 1.69,
    m: 78,
}

let N1 = {
    h: 1.95,
    m: 92,
}

let M2 = {
    h: 1.76,
    m: 85,
}

let N2 = {
    h: 1.88,
    m: 95,
}

console.log(M1, M2, N1, N2);

//number 11b
function BMI(h, m) {
    return m/ (h*h);
}

console.log("M1 BMI - " + BMI(M1.h, M1.m), "  N1 BMI - " + BMI(N1.h, N1.m));
console.log("M2 BMI - " + BMI(M2.h, M2.m), "  N2 BMI - " + BMI(N2.h, N2.m));

//number 11c
meritHigherBMI1 = BMI(M1.h, M1.m) > BMI(N1.h, N1.m);
console.log(meritHigherBMI1);

meritHigherBMI2 = BMI(M2.h, M2.m) > BMI(N2.h, N2.m);
console.log(meritHigherBMI2);