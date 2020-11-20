function sleep(ms) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + ms);
}

var focusEv = new Event("focus");
var inputEv = new Event("input");
var changeEv = new Event("change");
var clickEv = new Event("click");
var startingState = "";

if(document.body.contains(document.getElementById("component-id-1"))) {
    var passwordBox = document.getElementById("component-id-1");
    var subBtn = document.getElementById("submit-button");
    passwordBox.dispatchEvent(focusEv);
    passwordBox.dispatchEvent(inputEv);
    passwordBox.value += "admin";
    passwordBox.dispatchEvent(changeEv);

    while (subBtn.classList.contains("disabled")) {
        sleep(100);
    }

    subBtn.dispatchEvent(clickEv);
}

while(!(document.body.contains(document.getElementById("connect-btn")))) {
    sleep(100);
}

var conBtn = document.getElementById("connect-btn");
conBtn.click();