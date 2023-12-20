let counter= document.getElementById("counter")
let saveEl = document.getElementById("save-el")
let count=0
function increment(){
    count+=1
    counter.innerText=count

}
function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
}