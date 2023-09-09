//import './styles.css';
import { users } from './util.js';

// TODO: Hent HTML #id med getElementById

const filterButton = document.getElementById("filter");
const nameInputField = document.getElementById("name");
const ageInputField = document.getElementById("age");
const userListWrapper = document.getElementById("users");

// TODO: Lag en funksjon som kan brukes til å skrive ut HTMLen for å se brukerene
//  . Du kan bruke users importert over for å hente en liste med 10 brukere
const displayUsers = () =>{
    for(const userIndex in users){
        let userValue = users[userIndex].name;
        const newElement = document.createElement("li");
        newElement.innerHTML = userValue;
        userListWrapper.appendChild(newElement);
    }
};
//displayUsers();

// TODO: Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket
const nameFilter = () => {
    let search = nameInputField.value;
    console.log(search);
    for(const userIndex in users){
        let userValue = users[userIndex].name;
        if(search === userValue){
            console.log("ee")
            addEllementToList(userValue);
        }
    }
}
nameInputField.addEventListener("input", nameFilter)
// TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret
const addEllementToList = (user) => {
    const newElement = document.createElement("li");
    newElement.innerHTML = user;
    userListWrapper.appendChild(newElement);
}

// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)

const ageFilter = () => {
    const age = ageInputField.value;
    for (const userIndex in users){
        let userValue = users[userIndex].name;
        console.log(users[userIndex].age)
        if (parseInt(age) === users[userIndex].age){
            addEllementToList(userValue)
        }
    }
}

filterButton.addEventListener("click", ageFilter);
