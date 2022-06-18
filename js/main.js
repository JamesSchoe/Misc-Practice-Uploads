// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 

class Animal{
    constructor(name,color,sound){
        this._name = name
        this._color = color
        this._sound = sound
    }
    get name(){
        return this._name
    }
    get color(){
        return this._color
    }
    get sound(){
        return this._sound
    }
    speak(){
        alert(`${this.name} says ${this.sound}!`)
    }
}

class Domesticated extends Animal{
    constructor(name,color,sound,home,feed){
        super(name,color,sound)
        this._home = home
        this._feed = feed
    }
    get home(){
        return this._home
    }
    get feed(){
        return this._feed
    }
}

class Wild extends Animal{
    constructor(name,color,sound,habitat,food){
        super(name,color,sound)
        this._habitat = habitat
        this._feed = food
    }
    get habitat(){
        return this._habitat
    }
    get food(){
        return this._food
    }
}


class Pig extends Domesticated{
    constructor(name,color,sound,home,feed){
        super(name,color,sound,home,feed)
    }
    speak(){
        alert(`${this.name} squealed and said ${this.sound}`)
    }
}

class Lion extends Wild{
    constructor(name,color,sound,habitat,food){
        super(name,color,sound,habitat,food)
    }
    speak(){
        alert(`${this.name} roared and said ${this.sound}!`)
    }
}

let simba = new Lion("Simba","Brown","ROARRRRR","The Savannah","Antelope")
let babe = new Pig("Babe","Pink","OINK OINK OINK","Jim's Farm","Corn and apples and stuff")
let tiger = new Wild("Tony","Orange and black stripes","SNARL","The Jungle","Jungle prey")
let dog = new Domesticated("Fido","White and spotted","BARK BARK","Jim's house","Healthy kibbles")


let zoo = [simba, babe, tiger, dog]

for (animal of zoo){
    animal.speak()
}


// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }
