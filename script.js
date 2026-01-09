// DOM- document object model
// DOM- browser object model
// DOM - есть 12 видов
// DOM _ 4 виды которые мы используем document/tag/atr/text

// let html = document.documentElement
// let body = document.body
// let head = document.head
//  console.log(html.childNodes)
//  console.log(body.childNodes)
//  console.log(head.childNodes)
// sibibling - биртууган
// lastChild - последний ребенок 
// firstChild - первый ребенок
// nextElementSibling-следуйщий
// previousElementSibling
// firstElementChild-первый ребенок


// let html = document.documentElement
// let first = html.firstChild
// let last = html.lastChild
// console.log(first)
// console.log(last.firstChild)

// console.log(document.head.nextElementSibling)
// console.log(document.body.previousElementSibling)

// console.log(document.body.children[0].firstElementChild.parentElement)

let a = document.getElementById("a")
// let a = document.body.firstElementChild
const changeText  = () => {
    a.style.color= 'red'
    a.style.backgroundColor='blue'
    a.innerHTML='Amanbaevv'
    a.style.transition='3s'
    a.style.transition='4s'
    document.body.style.backgroundColor='blue'

}


setTimeout(() => {
    changeText()
},4000);










