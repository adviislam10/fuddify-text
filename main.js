// FUDDIFY TEXT

document.getElementById('userText').addEventListener('change', fuddifyInput);
document.getElementById('fuddifyBtn').addEventListener('click', fuddifyFile);

// Evenet Functions
function fuddifyInput() {
    // Get the text and convert into an array of characters
    let userText = document.getElementById('userText').value;

    document.getElementById('fuddifyText').innerHTML = fuddifyText(userText);
}

function fuddifyFile() {
    // Get the text from file and convert into an array of characters
    fetch('sample.txt').then((rawData) => rawData.text()).then((data) => {
        document.getElementById('fuddifyText').innerHTML = fuddifyText(data);
    });
}


function fuddifyText(aString) {
    // Change all the r's and l's to w's in aString and return the new string

    let textArray = aString.split('');

    // Loop through an array and change r's and l's to w's
    for (let i = 0; i < textArray.length; i++) {
        if (textArray[i] == 'r' || textArray[i] == 'l') {
            textArray[i] = 'w';
        } else if (textArray[i] == 'R' || textArray[i] == 'L') {
            textArray[i] = 'W';
        }
    }

    // Convert textArray into a string and display
    return textArray.join('');
}