//Objective is to change a string into a zigzag pattern and return the new
//string that is the concatenation of all of the new rows

let s = "PAYPALISHIRING", numRows = 3


//O(n + r) solution where n is the length of the string and r is the number of rows

//If only one row or string don't zigzag
if (numRows == 1 || s.length < numRows) {
    return s
}

let rows = []
let reverse = false
let total = ''
let count = 0

for (let i = 0; i < numRows; i++) {
    rows[i] = []
}

for (let i = 0; i < s.length; i++) {
    rows[count].push(s[i])
    reverse ? count-- : count++
    
    //If we've reached the top or bottom, reverse direction
    if (count == 0 || count == numRows - 1) {
        reverse = !reverse
    }
}

for (let arr of rows) {
    for (let letter of arr) {
        total += letter
    }
}

return total