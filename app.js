

// // const vegatebles = ["carrot", "potate", " onion"]
// // const fruits = ["apple", "peach", "grapes"]
// // // console.log(...vegatebles);
// // // console.log(...fruits);

// // const harvestofVe = {
// //     carrot: 30,
// //     patato: 40,
// //     onion: 20
// // }
// // const fruots = {
// //     carrot: 25,
// //     apple: 10,
// //     peach: 5,
// //     grapes: 20
// // }

// // console.log({
// //     ...harvestofVe,
// //     ...fruots
// // });


// // const allFood = [...vegatebles, ...fruits]


// // const allFood = vegatebles.concat(fruits)
// // console.log(allFood);



// // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 23, 4, 56, 7, 86, 5, 6]
// // // console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 23, 4, 56, 7, 86, 5, 6)); === 86
// // // console.log(Math.max(...numbers));===86
// // console.log(Math.max.apply(null , numbers));









// //REST

// function sum(a, b, ...rest) {
//     console.log(rest);
//     return a + b + rest.reduce((a , i)=>a+i , 0 )
// }

// const numbers = [1, 2, 3, 4, 5,6,7,8,9,]

// // console.log(sum(1, 2, 3, 4, 5,6,7,8,9,0,0,9,9,8,87,7));
// // console.log(sum(...numbers));

// // const a = numbers[0]
// // const b = numbers[1]
// // console.log(a,b);


// const [a, b , ...others] = numbers
// console.log(a,b , others);



// const user = {
//     email: "a@gmail.com",
//     age: 25,
//     city: "Tashkent",
//     country  : "Uzbekistan"

// }






// const { email, age, ...address} = user
// console.log(email , age , address);









// ========================== THIS CALL BIND APLLY =================== ///




function myName() {
    console.log(" My name :" , this);
}

const car = {
    name: "coablt",
    year: 2022,
    sayName : myName,
    sayNameWindow: myName.bind(window),
    info: function (model, color) {
        console.log(`Car name is : ${this.name}`);
        console.log(`Year name is : ${this.year}`);
        console.log(`Model : ${model}`);
        console.log(`color : ${color}`);
    }
}




const gentra = {
    name: "Gentra",
    year : 2020
}



// const carInfo = car.info.bind(gentra, "shevralet")()


// car.info.call(gentra, "Callacallanagajunchiqqaur")


car.info.apply(gentra, ["chevralet" , 'white'])


let arr = [1, 2, 3, 4, 5, 6]



Array.prototype.plus= function(n){
    return this.map(a => {
                        return a+ n
                    })
}
console.log(arr.plus(3));
console.log(arr.plus(10));
// function plus(arr,n) {
//     return arr.map(a => {
//         return a+ n
//     })
// }

// console.log(plus(arr,3));






// const users = [
//     {
//         name: "Bexruz",
//         firstName: "Xolmominov"
//     }, {
//         name: "Qoqi",
//         firstName: "Boqiyev"
//     }, {
//         name: "Shaxboz",
//         firstName: "Alijonov"
//     },
// ]

// // ========== callback function ========== //
// function getUsers() {
//     setTimeout(() => {
//         let result = ""
//         users.forEach((e) => {
//             result += `<li>${e.name} ${e.firstName}</li>`
//         })
//         document.body.innerHTML = result
//     },1000)
// }

// function createUser(user, callback) {
//     setTimeout(() => {
//         users.push(user)
//         callback()
//     },2000)
// }

// createUser({
//     name: " toshmat",
//     firstName: "eshmatov"
// }, getUsers)

// ========== callback function ========== // 






// ========== Promice function ========== // 
// const users = [{
//     name: "Bexruz",
//     firstName: "Xolmominov"
// }, {
//     name: "Qoqi",
//     firstName: "Boqiyev"
// }, {
//     name: "Shaxboz",
//     firstName: "Alijonov"
// }, ]


// function getUsers() {
//     setTimeout(() => {
//         let result = ""
//         users.forEach((e) => {
//             result += `<li>${e.name} ${e.firstName}</li>`
//         })
//         document.body.innerHTML = result
//     }, 1000)
// }

// function createUser(user) {
//     return new Promise((resolve, reject) => {
        
//         setTimeout(() => {
//             users.push(user)
//             const err = true

//             if (!err) {
//                 resolve("Xammasi togri")
//             } else {
//                 reject("Nimadur xato ketti")
//             }
//         }, 2000)
//     })
// }

// createUser({
//     name: " toshmat",
//     firstName: "eshmatov"
// }).then(getUsers)
// .catch(err => console.log(err))


// ========== Promice function ========== //





// ========== async function ========== //


const users = [{
    name: "Bexruz",
    firstName: "Xolmominov"
}, {
    name: "Qoqi",
    firstName: "Boqiyev"
}, {
    name: "Shaxboz",
    firstName: "Alijonov"
}, ]


function getUsers() {
    setTimeout(() => {
        let result = ""
        users.forEach((e) => {
            result += `<li>${e.name} ${e.firstName}</li>`
        })
        document.body.innerHTML = result
    }, 1000)
}

function createUser(user) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            users.push(user)
            const err = false

            if (!err) {
                resolve("Xammasi togri")
            } else {
                reject("Nimadur xato ketti")
            }
        }, 2000)
    })
}

createUser({
        name: " toshmat",
        firstName: "eshmatov"
    }).then(getUsers)
    .catch(err => console.log(err))
// ========== async function ========== //




async function result() {
    await createUsercreateUser({
                name: " toshmat",
                firstName: "eshmatov"
    })
    
    getUsers()
}

result()