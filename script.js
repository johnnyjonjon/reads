// Combined array of conversation starters
const conversationStarters = [
    "What's your favorite local dish that we eat together as a family?",
    "What games do you love playing during recess that you can teach me?",
    "What was the highlight of your day today? Can you share it with me?",
    "Can you tell me about the most interesting thing you learned this week?",
    "Can you tell me about a book you’re reading right now? What do you like about it?",
    "Is there a new friend you made this year? What do you like about them?",
    "Have you faced something challenging at school lately? How did you handle it?",
    "What’s one thing you did today that you feel proud of?",
    "Have you come across anything confusing or weird at school that you’d like to talk about?",
    "What’s your favorite subject this year, and what do you like about it?",
    "Is there a project or hobby you’d like us to start together this weekend?",
    "What’s the coolest thing you’ve learned in school this month?",
    "What was the most surprising thing you learned in school this week?",
    "Can you tell me about a time you felt really proud of yourself recently?",
    "What project are you currently working on in school that excites you the most?",
    "Have you encountered any difficult situations at school? How did you handle them?",
    "What's a new hobby or activity you've tried lately? How did it go?",
    "Did you help a friend with something recently? How did it feel?",
    "Can you tell me about a book or article you read that you found fascinating?",
    "What did you do during recess today? Did you try any new games or activities?",
    "What's a new skill you're learning or want to learn?",
    "Tell me about a time you worked really hard on something. What was the outcome?",
    "What's a recent challenge you faced, and what did you learn from it?",
    "Can you describe a moment when you felt really happy or excited today?",
    "Have you had any interesting discussions with your friends recently? What were they about?",
    "Can you tell me about a recent achievement or milestone you reached?",
    "What kind of music are you currently listening to? How does it make you feel?",
    "Have you been involved in any group projects lately? How did it go?",
    "What's something new you discovered about yourself recently?",
    "Did you participate in any school events or clubs this week? How was the experience?",
    "What are you looking forward to the most in the coming week?",
    // Additional conversation starters...
];

// Array of background gradients to apply randomly
const gradients = [
    "linear-gradient(45deg, #FF9A8B, #FF6A88, #FF99AC)",
    "linear-gradient(45deg, #FAD0C4, #FFD1FF)",
    "linear-gradient(45deg, #FF9A8B, #FF6A88, #FF99AC)",
    "linear-gradient(45deg, #a18cd1, #fbc2eb)",
    "linear-gradient(45deg, #fad0c4, #ffd1ff)",
    "linear-gradient(45deg, #ff9a8b, #ff6a88, #ff99ac)",
    "linear-gradient(45deg, #fbc2eb, #a6c1ee)",
    "linear-gradient(45deg, #a1c4fd, #c2e9fb)",
    "linear-gradient(45deg, #d4fc79, #96e6a1)",
    "linear-gradient(45deg, #84fab0, #8fd3f4)"
];



// Variables to keep track of the current starter and history
let currentStarter = "";
let currentGradient = "";
const starterHistory = [];
const gradientHistory = [];

function generateStarter(event) {
    event.stopPropagation();

    // Ensure the next starter and gradient are different from the current one
    let newStarterIndex;
    let newGradientIndex;
    do {
        newStarterIndex = Math.floor(Math.random() * conversationStarters.length);
    } while (conversationStarters[newStarterIndex] === currentStarter);

    do {
        newGradientIndex = Math.floor(Math.random() * gradients.length);
    } while (gradients[newGradientIndex] === currentGradient);

    // Update the current starter and gradient
    currentStarter = conversationStarters[newStarterIndex];
    currentGradient = gradients[newGradientIndex];

    // Add the current starter and gradient to the history
    starterHistory.push(currentStarter);
    gradientHistory.push(currentGradient);

    // Keep the history length up to 5
    if (starterHistory.length > 5) {
        starterHistory.shift();
        gradientHistory.shift();
    }

    // Set the selected starter text and background gradient
    document.getElementById('conversationStarter').innerText = currentStarter;
    document.body.style.background = currentGradient;

    // Hide the initial container and show the output container
    document.getElementById('initialContainer').style.display = 'none';
    document.getElementById('output').classList.remove('hidden');
    document.querySelector('.button-container-fixed').style.display = 'flex';
}

function showPreviousStarter(event) {
    event.stopPropagation();

    if (starterHistory.length > 1) {
        // Remove the current starter and gradient from history
        starterHistory.pop();
        gradientHistory.pop();

        // Get the previous starter and gradient
        currentStarter = starterHistory[starterHistory.length - 1];
        currentGradient = gradientHistory[gradientHistory.length - 1];

        // Set the previous starter text and background gradient
        document.getElementById('conversationStarter').innerText = currentStarter;
        document.body.style.background = currentGradient;
    } else {
        showMoveOn("You gotta move on in order to keep the conversation going.");
    }
}

function copyToClipboard(event) {
    event.stopPropagation();

    const textToCopy = document.getElementById('conversationStarter').innerText;

    navigator.clipboard.writeText(textToCopy).then(() => {
        showNotification("Text Copied!");
    }).catch(err => {
        showNotification("Failed to copy text");
        console.error("Failed to copy text: ", err);
    });
}

function showNotification(message) {
    const notificationCard = document.getElementById('notificationCard');

    notificationCard.textContent = message;
    notificationCard.classList.remove('hidden');

    setTimeout(() => {
        notificationCard.classList.add('hidden');
    }, 2000);
}

function showMoveOn(message) {
    const notificationModal = document.getElementById('notificationModal');
    const notificationMessage = document.getElementById('notificationMessage');

    notificationMessage.textContent = message;
    notificationModal.classList.remove('hidden');
    notificationModal.style.display = 'flex';
}

function closeNotification() {
    const notificationModal = document.getElementById('notificationModal');
    notificationModal.classList.add('hidden');
    notificationModal.style.display = 'none';
}

function closeModalOnClickOutside(event) {
    if (event.target === document.getElementById('notificationModal')) {
        closeNotification();
    }
}

function closeNotification() {
    const notificationModal = document.getElementById('notificationModal');
    notificationModal.classList.add('hidden');
    setTimeout(() => {
        notificationModal.style.display = 'none';
    }, 300); // Delay to ensure transition completion
}

// Add event listener to close modal when clicking outside of it
document.getElementById('notificationModal').addEventListener('click', closeModalOnClickOutside);

// Dismiss modal when clicking the close button
document.getElementById('closeModalButton').addEventListener('click', closeNotification);

document.body.addEventListener('click', function(event) {
    if (!event.target.closest('button')) {
        generateStarter(event);
    }
});
