let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

function increment() {
   count += 1
   countEl.innerText = count
}

function decrease() {
    count -= 1
    countEl.innerText = count
}

function reset() {
    count = 0
    countEl.innerText = count
}

function save() {
    console.log (count)
    let countStr = count + " - "
    saveEl.textContent += countStr
}
