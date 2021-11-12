// First, tell us your name
let yourName = "Saul Cortes" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread Cookie
let cc = 0      // Chocolate Chip Cookie
let sugar = 0   // Sugar Sprinkle Cookie

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

//Gingerbread Cookie Buttons
// Event listener to add gb cookie
document.getElementById('add-gb').addEventListener('click', function() {
    gb ++
    
    document.getElementById('qty-gb').textContent = gb
    document.getElementById('qty-total').textContent = gb + cc + sugar
})
//Event listener to remove gb cookie
document.getElementById('minus-gb').addEventListener('click', function() {
    gb --

    if (gb < 0) {
        gb = 0
    }
    document.getElementById('qty-gb').textContent = gb
    document.getElementById('qty-total').textContent = gb + cc + sugar
})
//

//Chocolate Chip Cookie Buttons
// Event listener to add chocolate chip c
document.getElementById('add-cc').addEventListener('click', function() {
    cc += 1
    document.getElementById('qty-cc').textContent = cc
    document.getElementById('qty-total').textContent = gb + cc + sugar
})
//Event listener to remove cc cookies
document.getElementById('minus-cc').addEventListener('click', function() {
    cc -= 1

    if (cc < 0) {
        cc = 0
    }
    document.getElementById('qty-cc').textContent = cc
    document.getElementById('qty-total').textContent = gb + cc + sugar
})
//

//Sugar Cookie Buttons
// Event listener to add sugar cookie
document.getElementById('add-sugar').addEventListener('click', function() {
    sugar ++
    document.getElementById('qty-sugar').textContent = sugar
    document.getElementById('qty-total').textContent = gb + cc + sugar
})
//Event listener to remove sugar cookie
document.getElementById('minus-sugar').addEventListener('click', function() {
    sugar --

    if (sugar < 0) {
        sugar = 0
    }
    document.getElementById('qty-sugar').textContent = sugar
    document.getElementById('qty-total').textContent = gb + cc + sugar
})