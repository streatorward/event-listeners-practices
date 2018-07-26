/*
    In the following code, replace `event` with the correct string to handle
    a click event on the button. Then write the function that has instructions
    for activating the corresponding power. The function should...
        1. Remove the `disabled` class
        2. Add the `enabled` class
*/

const getPowerList = document.querySelector("#powerList");

const getFlight = document.querySelector("#activate-flight");
const getMind = document.querySelector("#activate-mindreading")
const getXray = document.querySelector("#activate-xray");

const flight = document.querySelector("#flight")
const mindreading = document.querySelector("#mindreading")
const xray = document.querySelector("#xray")

const getActivateAll = document.querySelector("#activate-all");
const getDeactivateAll = document.querySelector("#deactivate-all");



function handlerFunction1() {
    flight.classList.toggle("enabled");
    flight.classList.toggle("disabled");
}

function handlerFunction2() {
    mindreading.classList.toggle("enabled");
    mindreading.classList.toggle("disabled");
}

function handlerFunction3() {  
    xray.classList.toggle("enabled");
    xray.classList.toggle("disabled");
}

    // console.log(getFlight.classList.value);
    // console.log(getMind.classList.value);
    // console.log(getXray.classList.value);


getFlight.addEventListener("click", handlerFunction1)
getMind.addEventListener("click", handlerFunction2)
getXray.addEventListener("click", handlerFunction3)

/*
    Now write two more event handlers that activate the other two powers
    when the corresponding buttons are clicked.
*/

getActivateAll.addEventListener("click", function () {
    for (let i = 0; i < getPowerList.children.length; i++) {
        getPowerList.children[i].classList.add("enabled");
        getPowerList.children[i].classList.remove("disabled");
        }

});



getDeactivateAll.addEventListener("click", function () {
    for (let i = 0; i < getPowerList.children.length; i++) {
        getPowerList.children[i].classList.remove("enabled");
        getPowerList.children[i].classList.add("disabled");
        }

});


getActivateAll.addEventListener("click", null)
getDeactivateAll.addEventListener("cick", null)



/*
    Write two more event handlers for activating and deactivating all powers
    when the corresponding buttons are clicked. You will need to use the
    `document.querySelectorAll()` method for these.
*/

