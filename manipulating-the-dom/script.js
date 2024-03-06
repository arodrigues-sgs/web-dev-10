function addCard() {
    const cardContainer = document.getElementById('cardContainer');

    // Create a new div element for the card
    const newCard = document.createElement('div');

    // Set the class for the new card
    newCard.setAttribute('class', 'card');

    // Set the innerHTML for the new card
    newCard.innerHTML = `<p>New Card</p>`;

    // Append the new card to the container
    cardContainer.appendChild(newCard);
}

const addCardBtn = document.getElementById('addCardBtn');
addCardBtn.addEventListener('click', addCard);
