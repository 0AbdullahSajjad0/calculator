var len = document.querySelectorAll(".drum").length;
var i = 0;
var option;
var number1;
var number2;
var userClickedPattern = [];

for(var i = 0; i < len; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
    var input = this.innerHTML;
    

        if (input === "+") {
            option = "+"
            number1 = userClickedPattern.join("");
            userClickedPattern = [];
            document.querySelector(".big_cell").innerHTML = "";
        }
        else if (input === "-") {
            option = "-"
            number1 = userClickedPattern.join("");
            userClickedPattern = [];
            document.querySelector(".big_cell").innerHTML = "";
        }
        else if (input === "*") {
            option = "*"
            number1 = userClickedPattern.join("");
            userClickedPattern = [];  
            document.querySelector(".big_cell").innerHTML = ""; 
        }
        else if (input === "/") {
            option = "/"
            number1 = userClickedPattern.join("");
            userClickedPattern = [];
            document.querySelector(".big_cell").innerHTML = "";
        }
        else if (input === "=") {
            number2 = userClickedPattern.join("");
            userClickedPattern = [];
            DisplayAnswer(option,number1,number2)
        }
        else if (input === "C") {
            option = "";
            number1 = "";
            number2 = "";
            userClickedPattern = [];
            document.querySelector(".big_cell").innerHTML = "";
        }
        else{
            inputDisplay(input);
        }
        

    });
    
}

document.addEventListener("keydown", function(event){
    var input = event.key;

        if (input === "+") {
            option = "+"
            number1 = userClickedPattern.join("");
            userClickedPattern = [];
            document.querySelector(".big_cell").innerHTML = "";
        }
        else if (input === "-") {
            option = "-"
            number1 = userClickedPattern.join("");
            userClickedPattern = [];
            document.querySelector(".big_cell").innerHTML = "";
        }
        else if (input === "*") {
            option = "*"
            number1 = userClickedPattern.join("");
            userClickedPattern = [];  
            document.querySelector(".big_cell").innerHTML = ""; 
        }
        else if (input === "/") {
            option = "/"
            number1 = userClickedPattern.join("");
            userClickedPattern = [];
            document.querySelector(".big_cell").innerHTML = "";
        }
        else if (input === "=") {
            number2 = userClickedPattern.join("");
            userClickedPattern = [];
            DisplayAnswer(option,number1,number2)
        }
        else if (input === "C") {
            option = "";
            number1 = "";
            number2 = "";
            userClickedPattern = [];
            document.querySelector(".big_cell").innerHTML = "";
        }
        else if(input=== "1" || input=== "2" || input=== "3" || input=== "4" || input=== "5" || input=== "6" ||
                input=== "7" || input=== "8" || input=== "9" || input=== "0"){
            inputDisplay(input);
        }
})

function inputDisplay(currentKey) {
    // Push input to userClickedPattern
    userClickedPattern.push(currentKey);

    // Update bigCell innerHTML with the content of userClickedPattern
    document.querySelector(".big_cell").innerHTML = userClickedPattern.join('');

}

function DisplayAnswer(option,num1,num2) {
    let ans = 0;
    if(option === "+")
    {
        ans = parseInt(num1) + parseInt(num2);
    }
    else if(option === "-")
    {
        ans = parseInt(num1) - parseInt(num2);
    }
    else if(option === "*")
    {
        ans = parseInt(num1) * parseInt(num2);
    }
    else if(option === "/")
    {
        ans = parseInt(num1) / parseInt(num2);
    }

    // Push input to userClickedPattern
    console.log(ans);
    // Update bigCell innerHTML with the content of userClickedPattern
    document.querySelector(".big_cell").innerHTML = ans;

}