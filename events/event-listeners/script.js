const btn = document.getElementById('btn');
const inputField = document.getElementById('inputField');
const log = document.getElementById('log');

// Function to log messages
const logMessage = (message) => {
    log.innerHTML += `<p>${message}</p>`;
};

// Global variable to track number of clicks
let count = 0;

// Function to count clicks
const countClicks = () => {
    count += 1;
    return count;
};

// Event listener for button click
btn.addEventListener('click', (event) => logMessage(`Clicked ${countClicks()} times`));

// Event listener for input field (keyboard event)
inputField.addEventListener('keyup', (event) => logMessage(`Key pressed: ${event.key}`));
