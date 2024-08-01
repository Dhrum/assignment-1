document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const generatedPasswordDisplay = document.getElementById('generated-password');
    const display = document.getElementById('display');
    const keypad = document.getElementById('keypad');
    const submitBtn = document.getElementById('submit-btn');
    const clearBtn = document.getElementById('clear-btn');
    const backspaceBtn = document.getElementById('backspace-btn');
    const resultMessage = document.getElementById('result-message');

    let generatedPassword = '';
    let userInput = '';

   // Function to generate a six-digit password
function generatePassword() {
    generatedPassword = Math.floor(100000 + Math.random() * 900000).toString();
    console.log("Generated Password: ", generatedPassword); // Debugging line
    generatedPasswordDisplay.textContent = generatedPassword;
    resultMessage.textContent = '';
    userInput = '';
    display.textContent = userInput;
}
    // Function to handle keypad button clicks
    function handleKeypadClick(event) {
        if (userInput.length < 6) {
            userInput += event.target.textContent;
            display.textContent = userInput;
        }
    }

    // Function to handle submit button click
    function handleSubmit() {
        if (userInput === generatedPassword) {
            resultMessage.textContent = 'Success! Password matched.';
            resultMessage.style.color = 'green';
        } else {
            resultMessage.textContent = 'Error! Password did not match.';
            resultMessage.style.color = 'red';
        }
    }

    // Function to clear input
    function handleClear() {
        userInput = '';
        display.textContent = userInput;
    }

    // Function to handle backspace
    function handleBackspace() {
        userInput = userInput.slice(0, -1);
        display.textContent = userInput;
    }

    // Generate password on button click
    generateBtn.addEventListener('click', generatePassword);

    // Add keypad buttons
    for (let i = 1; i <= 9; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        btn.addEventListener('click', handleKeypadClick);
        keypad.appendChild(btn);
    }
    const zeroBtn = document.createElement('button');
    zeroBtn.textContent = '0';
    zeroBtn.addEventListener('click', handleKeypadClick);
    keypad.appendChild(zeroBtn);

    // Handle submit, clear, and backspace
    submitBtn.addEventListener('click', handleSubmit);
    clearBtn.addEventListener('click', handleClear);
    backspaceBtn.addEventListener('click', handleBackspace);
});
