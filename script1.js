document.addEventListener("DOMContentLoaded", function () {
    // 1. Display full name inside h1 element with specified style
    let fullNameHeader = document.createElement("h1");
    fullNameHeader.textContent = "Randeep Singh Deol";
    fullNameHeader.style.color = "#A9A9A9";
    fullNameHeader.style.textAlign = "center";
    document.body.appendChild(fullNameHeader);

    // 2. Append two input elements and a button
    let input1 = createInputElement();
    let input2 = createInputElement();
    let addButton = createButtonElement("ADD");

    document.body.appendChild(input1);
    document.body.appendChild(input2);
    document.body.appendChild(addButton);

    // Message container for displaying the sum
    let messageContainer = document.createElement("p");
    messageContainer.style.color = "blue";
    messageContainer.style.textAlign = "center";
    document.body.appendChild(messageContainer);

    // Event listener for button click
    addButton.addEventListener('click', () => {
        let sum = parseInt(input1.value) + parseInt(input2.value);
        if (validateInput(input1.value, input1) && validateInput(input2.value, input2)) {
            messageContainer.textContent = "Sum of the numbers is: " + sum;
        }
    });

    // Function to create input elements
    function createInputElement() {
        let input = document.createElement("input");
        input.style.margin = "10px";
        return input;
    }

    // Function to create button element
    function createButtonElement(text) {
        let button = document.createElement("button");
        button.textContent = text;
        button.style.margin = "10px";
        button.style.padding = "1vw";
        button.style.height = "4vw";
        button.style.fontSize = "2vw";
        button.style.backgroundColor = "rgb(42, 125, 192)";
        button.style.color = " #fff";
        button.style.border = "none";
        button.style.cursor = "pointer";
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = "rgb(6, 95, 159)";
        });
        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = "rgb(42, 125, 192)";
        });
        return button;
    }

    // Function to validate input value
    const validateInput = (value, inputElement) => {
        try {
            if (isNaN(value)) {
                throw new Error(`${value} is not a valid number. Please enter a valid number.`);
            }
            return true;
        } catch (error) {
            showMessage(error.message);
            inputElement.style.border = "2px solid red";
            return false;
        }
    };

    // Function to show message container
    function showMessage(message) {
        messageContainer.textContent = message;
    }

    // Style the page
    document.body.style.backgroundColor ="#CFC";
    document.body.style.padding = "4vw";
    document.body.style.textAlign = "center";
});
