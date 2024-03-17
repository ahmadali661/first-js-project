

// let firstName = "Huzaifa"
// let lastName = "Ahmad"

// let fullName = firstName + " " + lastName
// console.log(fullName)

document.getElementById("alertString").onclick = function () {
    let fullName = "Ahmad Malik"
    alert(fullName)
    let statement = " alert ('Ahmad Malik')"
    document.getElementById("output").innerHTML = statement;
}


document.getElementById("alertNumber").onclick = function () {
    alert(123)
    let statement = " alert ('123')"
    document.getElementById("output").innerHTML = statement;
}

document.getElementById("varibleNames").onclick = function () {
    let html = "<ul><li>A variable name can't contain any spaces.</li><li>A variable name can contain only letter, numbers, dollar signs and underscores.</li><li>Though a variable name can't be any of javascript's keywords. it can contain keywords. For example. userAlert and myNav are legal. </li><li>Capital letters are fine, but be careful. Variable names are case sensitive. A rose is not a Rose. If you assign the string 'Floribundas' to the variable rose, and then ask JavaScript for the value assigned to Rose, you'll come up empty.</li></ul> "
    document.getElementById("result").innerHTML = html;
}
document.getElementById("camelCaseExamples").onclick = function () {
    let html = " <h3>Examples</h3> <ul><li> <code> user</code></li><li><code>userResponse</code></li><li><code>userResponseTime</code></li><li><code>userResponseTimeLimit</code></li></ul> "
    document.getElementById("result").innerHTML = html;
}
document.getElementById("sum2Numbers").onclick = function () {
    let num1 = 10;
    let num2 = 5;
    let sum = num1 + num2;
    document.getElementById("result").innerHTML = "<p class='text-center'>" + sum + "</p>";

   let statement = "let num1 =" + num1 +";<br> let num2 = "+ num2 +";<br> let sum = num1 + num2"
    document.getElementById("output").innerHTML = statement ;
}
document.getElementById("subtract2Numbers").onclick = function () {
    let num1 = 10;
    let num2 = 5;
    let subtract = num1 - num2;
    document.getElementById("result").innerHTML = "<p class='text-center'>" + subtract + "</p>";

   let statement = "let num1 =" + num1 +";<br> let num2 = "+ num2 +";<br> let subtract = num1 - num2"
    document.getElementById("output").innerHTML = statement ;
}
document.getElementById("multiply2Numbers").onclick = function () {
    let num1 = 10;
    let num2 = 5;
    let multiply = num1 * num2;
    document.getElementById("result").innerHTML = "<p class='text-center'>" + multiply + "</p>";

   let statement = "let num1 =" + num1 +";<br> let num2 = "+ num2 +";<br> let multiply = num1 * num2"
    document.getElementById("output").innerHTML = statement ;
}
document.getElementById("divide2Numbers").onclick = function () {
    let num1 = 10;
    let num2 = 5;
    let divide = num1 / num2;
    document.getElementById("result").innerHTML = "<p class='text-center'>" + divide + "</p>";

   let statement = "let num1 =" + num1 +";<br> let num2 = "+ num2 +";<br> let divide = num1 / num2"
    document.getElementById("output").innerHTML = statement ;
}
document.getElementById("calculateSomeNumbers").onclick = function () {
    var someCalculation = 36 / 6 * 3 + 2 ** 4 - (3 + 5);
    document.getElementById("result").innerHTML = "<p class='text-center'>" + someCalculation + "</p>";

   let statement = "let someCalculation = 36 / 6 * 3 + 2 ** 4 - (3 + 5);"
    document.getElementById("output").innerHTML = statement ;
}

