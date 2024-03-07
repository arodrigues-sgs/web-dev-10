const output = document.querySelector("#output");

function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

// Initially add event listers with capture false (ie. bubble)
container.addEventListener("click", handleClick, false);
button.addEventListener("click", handleClick, false);

// Toggle between capture and bubble
const captureCheckbox = document.getElementById('captureMode');
const toggleEventFlow = () => {
    const elements = [container, button]
    elements.forEach(elem => {
        elem.removeEventListener('click', handleClick, !captureCheckbox.checked);
        elem.addEventListener('click', handleClick, captureCheckbox.checked);
    })
};

// Listen for changes on the checkbox
captureCheckbox.addEventListener('change', toggleEventFlow);