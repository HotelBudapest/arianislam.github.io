ls = ["Arian", "Promi"]
ls.push("Saad")
let a = 10 
console.log(ls)
console.log(a)
let i = 0
while (i < ls.length){
    if (i == (ls.length -1)){
        console.log("tor maa hala")
        break
    }
    console.log(ls[i])
    i = i + 1
}

let p = new Promise((resolve, reject) => {
    a = 1 + 1
    if (a == 2){
        resolve("Hoise")
    }
    else{
        reject("Baal Hoise")
    }
})

p.then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message)
})

function add2(a, b){
    document.getElementById("test").innerHTML = a + b
}
console.log(add2(2,3))

function replace() {
    num = Math.floor(Math.random() * 100)
    document.getElementById("test").innerHTML = num
}
