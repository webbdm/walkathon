var walkerName = document.getElementById("name");
var email = document.getElementById("email");
var pledge = document.getElementById("pledge");
var submit = document.getElementById("submitBtn");
var clear = document.getElementById("clearBtn");
var radioNode = document.getElementsByClassName("radioNode");

function submitInfo() {
    Walk.addDonor(Walk.getInfo());
    clearForm();
};

function clearForm() {
    walkerName.value = "";
    email.value = "";
    pledge.value = "";
};

function getRadioValue() {
    var radioNode = document.getElementsByClassName("radioNode");
    var intervalChoice;
    for (i = 0; i < radioNode.length; i++) {
        if (radioNode[i].checked) {
            intervalChoice = radioNode[i].value;
        }
    }
    return intervalChoice;
};

submit.addEventListener("click", submitInfo);
clear.addEventListener("click", clearForm);
