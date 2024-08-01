document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const generatedPasswordDisplay = document.getElementById('generated-password');
    const display = document.getElementById('display');
    const keypad = document.getElementById('keypad');
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
            resultMessage.innerHTML = '<i class="fas fa-check-circle icon"></i> Success! Password matched.';
            resultMessage.style.color = 'green';
            resultMessage.classList.add('success');
            resultMessage.classList.remove('error');
        } else {
            resultMessage.innerHTML = '<i class="fas fa-times-circle icon"></i> Error! Password did not match.';
            resultMessage.style.color = 'red';
            resultMessage.classList.add('error');
            resultMessage.classList.remove('success');
        }
        // Remove the animation classes after the animation ends to reset for the next animation
        resultMessage.addEventListener('animationend', () => {
            resultMessage.classList.remove('success', 'error');
        }, { once: true });
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
    const buttonLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'X', 'Submit', 'Clear'];
    buttonLabels.forEach(label => {
        const btn = document.createElement('button');
        btn.textContent = label;
        if (label === 'Submit') {
            btn.id = 'submit-btn';
            btn.addEventListener('click', handleSubmit);
        } else if (label === 'Clear') {
            btn.id = 'clear-btn';
            btn.addEventListener('click', handleClear);
        } else if (label === 'X') {
            btn.id = 'backspace-btn';
            const icon = document.createElement('span');
            icon.innerHTML = '&#x232B;'; // Backspace icon
            btn.textContent = '';
            btn.appendChild(icon);
            btn.addEventListener('click', handleBackspace);
        } else {
            btn.addEventListener('click', handleKeypadClick);
        }
        keypad.appendChild(btn);
    });
});
