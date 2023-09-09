// Oppgave 1
const removeButton = document.getElementById("remove-btn")
const removeText = document.getElementById("remove")

removeButton.addEventListener("click", function () {
    removeText.textContent =""
});

// Oppgave 2
const changeButton = document.getElementById("change-btn")
const changeText = document.getElementById("change")

changeButton.addEventListener("click", function () {
    changeText.textContent ="Star Wars rocks"
});
// Oppgave 3
const textBox = document.getElementById("input-text");
const userInput = document.getElementById("input");

userInput.addEventListener("input", function () {
    textBox.textContent = userInput.value;
});

// Oppgave 4
const myList = ['item one', 'item two', 'item three'];
const printListButton = document.getElementById("write-list");
const wrapper = document.getElementById("ul");

printListButton.addEventListener("click", function () {
    for (const item of myList) {
        const li = document.createElement("li");
        li.innerHTML = item;
        wrapper.appendChild(li);
    }
})

// Oppgave 5
const div = document.getElementById("placeholder");

const createButton = document.getElementById("create");
const textField = document.getElementById("text")

createButton.addEventListener("click", function (){
    const select = document.getElementById("select");
    const newElement = document.createElement(select.value);
    newElement.innerHTML = textField.value;
    div.appendChild(newElement);
});

// Oppgave 6
const removeListButton = document.getElementById("remove-li");
const lists = document.getElementById("list");

removeListButton.addEventListener("click", function () {
    const child = lists.querySelector("li")
    if (child){
        lists.removeChild(child);
    }
})

// Oppgave 7
const disableTextField = document.getElementById("name");
const disableButton = document.getElementById("order");

disableTextField.addEventListener("input", function () {
    const text = disableTextField.value;
    if (text.length > 4){
        disableButton.disabled = true;
        disableButton.style.border = "2px solid red";
    }
    else
        disableButton.disabled = false;
})

// Oppgave 8
const changeColorButton = document.getElementById("color");
const listWrapper = document.getElementsByClassName("children");
changeColorButton.addEventListener("click", function (){
    listWrapper.item(0).style.border= "2px solid red";

})