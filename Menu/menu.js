
let openIcon = document.querySelector('.navbar--icon');
let menu = document.querySelector('.nav--open');
let closeIcon = document.querySelector('.nav--open-icon');

// Open the menu
openIcon.addEventListener('click', function () {
    menu.classList.remove('close'); // Remove the close class to show the menu
    addCloseButton(); // Add the close button dynamically
});

// Close the menu when close icon is clicked
closeIcon.addEventListener('click', function () {
    closeMenu();
});

// Function to add a close button dynamically with a PNG image
function addCloseButton() {
    let closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.style.cssText = `
  position: absolute;
  top: 17px;
  right: 10px;
  // background-color: #d4af37;
  // color: #333;
  border: none;
  border-radius: 50%;
  // padding: 10px 15px;
  // font-size: 1em;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

    // Add a PNG image
    let img = document.createElement('img');
    img.src = '/assets/close.png'; // Replace with the path to your PNG file
    img.alt = 'Close Menu'; // Alt text for accessibility
    img.style.cssText = `
  width: 20px; /* Set width as needed */
  height: 20px; /* Set height as needed */
  // margin-right: 8px; /* Space between the image and text */
`;

    // Add text next to the image
    let text = document.createTextNode('');

    // Append the image and text inside the button
    closeButton.appendChild(img);
    closeButton.appendChild(text);

    // Append the close button inside the menu
    menu.appendChild(closeButton);

    // Attach event listener to close button
    closeButton.addEventListener('click', function () {
        closeMenu();
    });
}

// Function to close the menu and remove the close button
function closeMenu() {
    menu.classList.add('close'); // Add the close class to hide the menu

    // Remove the close button if it exists
    let closeButton = document.querySelector('.close-button');
    if (closeButton) {
        closeButton.remove();
    }
}

// ------------------------------------------------------------------------------------------------------------

document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting
    let name = document.getElementById('name').value.trim();
    let feedback = document.getElementById('message').value.trim();
    let errorMessage = document.getElementById('error-message');

    errorMessage.textContent = ''; // Clear previous error messages

    // Validate name
    if (name === '') {
        errorMessage.textContent = 'Your Name is required.';
        return;
    }

    // Validate feedback message
    if (feedback === '') {
        errorMessage.textContent = 'Your Feedback is required.';
        return;
    }

    // If validation passes, submit feedback and show toast
    submitFeedback(name, feedback);
});

function submitFeedback(name, feedback) {
    // Show the toast notification instead of the alert
    showToast('Feedback submitted successfully! Thank you, ' + name + '!');

    // Reset the form after submission
    document.getElementById('feedbackForm').reset();
}

// Function to show the toast notification
function showToast(message) {
    let toast = document.getElementById('toast');
    let toastMessage = document.getElementById('toast-message');

    // Set the message for the toast
    toastMessage.textContent = message;

    // Add the 'show' class to make the toast visible
    toast.classList.add('show');

    // Hide the toast after 3 seconds
    setTimeout(function() {
        toast.classList.remove('show');
        toast.classList.add('hide');
    }, 3000);

    // Remove the 'hide' class after the toast fades out
    setTimeout(function() {
        toast.classList.remove('hide');
    }, 3500); // Wait for the fade-out to complete before resetting
}
