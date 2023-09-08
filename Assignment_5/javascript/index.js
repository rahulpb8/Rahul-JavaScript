/*eslint linebreak-style: ["error", "unix"]*/

//2. Create a button and div using JS, when clicked on the button your basic details should be shown in the div. The static HTML file should only contain the basic HTML structure, no div/buttons.

function showDetails() {
    const name = 'Rahul P Binu';
    const phone = 7025503248;
    const age = 22;
    const company = 'Coddle Technologies';
    myDetailsDiv.innerHTML = `Name: ${name}, Phone Number: ${phone}, Age: ${age}, Company: ${company}`;
    
}
const button = document.createElement('button');
button.textContent = 'show details';
document.body.appendChild(button);

const myDetailsDiv = document.createElement('div');
document.body.appendChild(myDetailsDiv);

button.addEventListener('click', showDetails);
