let printCallback = function(names){
    names.forEach(el => console.log(el));
}

function titleize(names, cb){
    newArr = names.map(el => `Mx.${el} Jingleheimer Schmidt`);
    cb(newArr);
}

// titleize(["Mary", "Brian", "Leo"], printCallback);
// Mx.Mary Jingleheimer Schmidt
// Mx.Brian Jingleheimer Schmidt
// Mx.Leo Jingleheimer Schmidt
// undefined

function Elephant(name, height, tricks){
    this.name = name;
    this.height = height;
    this.tricks = tricks;
}

Elephant.prototype.trumpet = function(){
    console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
}

Elephant.prototype.grow = function(){
    this.height += 12;
}

Elephant.prototype.addTrick = function(trick){
    this.tricks.push(trick);
}

Elephant.prototype.play = function(){
    let trick = this.tricks[Math.floor(Math.random()*(this.tricks.length))];
    console.log(`${this.name} is ${trick}!`)
}

// let ele = new Elephant('dumbo', 5, ['dancing', 'eating peanuts']);
// ele.trumpet();
// console.log(ele.height);
// ele.grow();
// console.log(ele.height);
// console.log(ele.tricks)
// ele.addTrick('sleeping');
// ele.addTrick('smoking');
// ele.addTrick('drinking beer');
// console.log(ele.tricks)
// ele.play();

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.paradeHelper = function(el){
    console.log(`${el.name} is trotting by!`);
}

// herd.forEach(function(elephant){
//     Elephant.paradeHelper(elephant);
// })
// herd.forEach(el => Elephant.paradeHelper(el));

function dinerBreakfast(){
    let order = ['cheesy scrambled eggs']
    
    return function(item){
        order.push(item);
        console.log(`I'd like ${order.join(' and ')} please`);
    }
}

let bfastOrder = dinerBreakfast();
bfastOrder("chocolate chip pancakes");
bfastOrder("grits");